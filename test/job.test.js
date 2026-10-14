import { test, describe } from 'node:test';
import assert from 'node:assert';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { findClaude, getPathSeparator, run } from '../src/job.js';

describe('findClaude', () => {
  describe('Unix/macOS', () => {
    test('returns default "claude" when no paths exist and which fails', () => {
      const result = findClaude({
        platform: 'darwin',
        env: { HOME: '/Users/test' },
        existsSync: () => false,
        execSyncFn: () => { throw new Error('not found'); }
      });
      assert.strictEqual(result, 'claude');
    });

    test('finds claude in /usr/local/bin', () => {
      const result = findClaude({
        platform: 'darwin',
        env: { HOME: '/Users/test' },
        existsSync: (p) => p === '/usr/local/bin/claude',
        execSyncFn: () => { throw new Error('not found'); }
      });
      assert.strictEqual(result, '/usr/local/bin/claude');
    });

    test('finds claude in homebrew path', () => {
      const result = findClaude({
        platform: 'darwin',
        env: { HOME: '/Users/test' },
        existsSync: (p) => p === '/opt/homebrew/bin/claude',
        execSyncFn: () => { throw new Error('not found'); }
      });
      assert.strictEqual(result, '/opt/homebrew/bin/claude');
    });

    test('finds claude via which command', () => {
      const result = findClaude({
        platform: 'darwin',
        env: { HOME: '/Users/test' },
        existsSync: () => false,
        execSyncFn: (cmd) => {
          assert.strictEqual(cmd, 'which claude');
          return '/some/custom/path/claude\n';
        }
      });
      assert.strictEqual(result, '/some/custom/path/claude');
    });

    test('uses which (not where) on Unix', () => {
      let commandUsed = null;
      findClaude({
        platform: 'linux',
        env: { HOME: '/home/test' },
        existsSync: () => false,
        execSyncFn: (cmd) => {
          commandUsed = cmd;
          throw new Error('not found');
        }
      });
      assert.strictEqual(commandUsed, 'which claude');
    });
  });

  describe('Windows', () => {
    test('checks Windows-specific paths on win32', () => {
      const checkedPaths = [];
      findClaude({
        platform: 'win32',
        env: {
          HOME: 'C:\\Users\\test',
          APPDATA: 'C:\\Users\\test\\AppData\\Roaming',
          LOCALAPPDATA: 'C:\\Users\\test\\AppData\\Local',
          USERPROFILE: 'C:\\Users\\test',
          PROGRAMFILES: 'C:\\Program Files'
        },
        existsSync: (p) => {
          checkedPaths.push(p);
          return false;
        },
        execSyncFn: () => { throw new Error('not found'); }
      });

      // Should check Windows paths
      assert.ok(
        checkedPaths.some(p => p.includes('npm') && p.includes('claude.cmd')),
        'should check npm claude.cmd path'
      );
      assert.ok(
        checkedPaths.some(p => p.includes('claude.exe')),
        'should check .exe paths'
      );
    });

    test('finds claude.cmd in npm directory', () => {
      // Note: path.join on Unix will use forward slashes, so we need to match
      // what path.join actually produces, not Windows-native paths
      const appdata = 'C:\\Users\\test\\AppData\\Roaming';
      const expectedPath = path.join(appdata, 'npm', 'claude.cmd');
      const result = findClaude({
        platform: 'win32',
        env: {
          HOME: 'C:\\Users\\test',
          APPDATA: appdata,
          LOCALAPPDATA: 'C:\\Users\\test\\AppData\\Local',
          USERPROFILE: 'C:\\Users\\test',
          PROGRAMFILES: 'C:\\Program Files'
        },
        existsSync: (p) => p === expectedPath,
        execSyncFn: () => { throw new Error('not found'); }
      });
      assert.strictEqual(result, expectedPath);
    });

    test('uses where (not which) on Windows', () => {
      let commandUsed = null;
      findClaude({
        platform: 'win32',
        env: {
          HOME: 'C:\\Users\\test',
          APPDATA: 'C:\\Users\\test\\AppData\\Roaming',
          LOCALAPPDATA: 'C:\\Users\\test\\AppData\\Local',
          USERPROFILE: 'C:\\Users\\test',
          PROGRAMFILES: 'C:\\Program Files'
        },
        existsSync: () => false,
        execSyncFn: (cmd) => {
          commandUsed = cmd;
          throw new Error('not found');
        }
      });
      assert.strictEqual(commandUsed, 'where claude');
    });

    test('handles where returning multiple lines (takes first)', () => {
      const result = findClaude({
        platform: 'win32',
        env: {
          HOME: 'C:\\Users\\test',
          APPDATA: 'C:\\Users\\test\\AppData\\Roaming',
          LOCALAPPDATA: 'C:\\Users\\test\\AppData\\Local',
          USERPROFILE: 'C:\\Users\\test',
          PROGRAMFILES: 'C:\\Program Files'
        },
        existsSync: () => false,
        execSyncFn: () => 'C:\\First\\Path\\claude.cmd\nC:\\Second\\Path\\claude.cmd\n'
      });
      assert.strictEqual(result, 'C:\\First\\Path\\claude.cmd');
    });
  });
});

describe('getPathSeparator', () => {
  test('returns semicolon for Windows', () => {
    assert.strictEqual(getPathSeparator('win32'), ';');
  });

  test('returns colon for macOS', () => {
    assert.strictEqual(getPathSeparator('darwin'), ':');
  });

  test('returns colon for Linux', () => {
    assert.strictEqual(getPathSeparator('linux'), ':');
  });

  test('returns colon for unknown platforms', () => {
    assert.strictEqual(getPathSeparator('freebsd'), ':');
  });
});

describe('run() batch limits', () => {
  test('forceFetch keeps bookmarks parked by the pre-fetch limit', async (t) => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'smaug-job-test-'));
    t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
    const stateDir = path.join(dir, '.state');
    fs.mkdirSync(stateDir);
    const pendingFile = path.join(stateDir, 'pending-bookmarks.json');

    // 30 bookmarks already pending; the fetch brings 3 new ones.
    const pending = Array.from({ length: 30 }, (_, i) => ({
      id: `30000000000000000${String(i).padStart(2, '0')}`,
      createdAt: `2026-01-01T00:${String(i).padStart(2, '0')}:00Z`
    }));
    fs.writeFileSync(pendingFile, JSON.stringify({ count: 30, bookmarks: pending }));

    const bird = path.join(dir, 'bird');
    fs.writeFileSync(bird, `#!/usr/bin/env node
process.stdout.write(JSON.stringify([0, 1, 2].map(i => ({
  id: '4000000000000000' + i,
  text: 'new ' + i,
  author: { username: 'carol', name: 'Carol' },
  createdAt: '2026-02-0' + (i + 1) + 'T00:00:00Z'
}))));
`);
    fs.chmodSync(bird, 0o755);

    const configPath = path.join(dir, 'smaug.config.json');
    fs.writeFileSync(configPath, JSON.stringify({
      archiveFile: path.join(dir, 'bookmarks.md'),
      pendingFile,
      stateFile: path.join(stateDir, 'bookmarks-state.json'),
      birdPath: bird,
      twitter: { authToken: 'token', ct0: 'token' },
      autoInvokeClaude: false,
      maxBatchSize: 10
    }));

    const result = await run({ forceFetch: true, configPath });
    assert.strictEqual(result.success, true);

    const full = JSON.parse(fs.readFileSync(pendingFile + '.full', 'utf8'));
    const ids = new Set(full.bookmarks.map(b => b.id));
    assert.strictEqual(ids.size, 33, 'every parked and fetched bookmark must survive');
    for (const b of pending) assert.ok(ids.has(b.id), `lost parked bookmark ${b.id}`);

    const trimmed = JSON.parse(fs.readFileSync(pendingFile, 'utf8'));
    assert.strictEqual(trimmed.bookmarks.length, 10);
  });
});
