import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const cliPath = path.join(repoRoot, 'src', 'cli.js');

function makeWorkspace() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'smaug-cli-test-'));
  const binDir = path.join(dir, 'bin');
  fs.mkdirSync(binDir, { recursive: true });
  fs.mkdirSync(path.join(dir, '.state'), { recursive: true });

  const birdPath = path.join(binDir, 'bird');
  const ytDlpPath = path.join(binDir, 'yt-dlp');
  const logFile = path.join(dir, 'commands.log');

  const birdScript = `#!/usr/bin/env node
const fs = require('fs');
const args = process.argv.slice(2);
if (process.env.SMAUG_SMOKE_LOG) {
  fs.appendFileSync(process.env.SMAUG_SMOKE_LOG, args.join(' ') + '\\n');
}

if (args[0] === 'bookmarks') {
  const out = [{
    id: '1111111111111111111',
    text: 'bookmarked thread root',
    author: { username: 'alice', name: 'Alice' },
    createdAt: '2026-02-20T12:00:00Z',
    isThread: true,
    media: [{ type: 'video' }]
  }];
  process.stdout.write(JSON.stringify(out));
  process.exit(0);
}

if (args[0] === 'thread') {
  const target = args[1] || '';
  const out = [
    {
      id: '1111111111111111111',
      text: 'root for ' + target,
      author: { username: 'alice' },
      createdAt: '2026-02-20T12:00:00Z',
      media: [{ type: 'video' }]
    },
    {
      id: '1111111111111111112',
      text: 'follow up',
      author: { username: 'alice' },
      createdAt: '2026-02-20T12:01:00Z',
      media: []
    }
  ];
  process.stdout.write(JSON.stringify(out));
  process.exit(0);
}

process.stderr.write('Unsupported bird args: ' + args.join(' ') + '\\n');
process.exit(2);
`;

  const ytDlpScript = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const args = process.argv.slice(2);
const outIdx = args.indexOf('-o');
if (outIdx === -1 || !args[outIdx + 1]) {
  process.stderr.write('missing -o\\n');
  process.exit(2);
}

const template = args[outIdx + 1];
const url = args[args.length - 1] || '';
const match = url.match(/status\\/(\\d+)/);
const id = match ? match[1] : 'unknown';
const filename = template.replace('%(id)s', id).replace('%(ext)s', 'mp4');
fs.mkdirSync(path.dirname(filename), { recursive: true });
fs.writeFileSync(filename, 'fake video');
process.stdout.write(filename + '\\n');
`;

  fs.writeFileSync(birdPath, birdScript);
  fs.chmodSync(birdPath, 0o755);
  fs.writeFileSync(ytDlpPath, ytDlpScript);
  fs.chmodSync(ytDlpPath, 0o755);

  const config = {
    archiveFile: './bookmarks.md',
    pendingFile: './.state/pending-bookmarks.json',
    stateFile: './.state/bookmarks-state.json',
    timezone: 'UTC',
    birdPath,
    twitter: {
      authToken: 'token',
      ct0: 'token'
    },
    mediaDir: './media'
  };

  fs.writeFileSync(path.join(dir, 'smaug.config.json'), JSON.stringify(config, null, 2) + '\n');

  return { dir, binDir, logFile };
}

function runCli(workspace, args) {
  return spawnSync(process.execPath, [cliPath, ...args], {
    cwd: workspace.dir,
    encoding: 'utf8',
    env: {
      ...process.env,
      PATH: `${workspace.binDir}${path.delimiter}${process.env.PATH || ''}`,
      SMAUG_SMOKE_LOG: workspace.logFile
    }
  });
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

test('fetch --threads --download-media captures thread and downloaded media', t => {
  const workspace = makeWorkspace();
  t.after(() => fs.rmSync(workspace.dir, { recursive: true, force: true }));

  const result = runCli(workspace, ['fetch', '1', '--threads', '--download-media']);
  assert.strictEqual(result.status, 0, result.stderr || result.stdout);

  const pendingPath = path.join(workspace.dir, '.state', 'pending-bookmarks.json');
  const pending = JSON.parse(fs.readFileSync(pendingPath, 'utf8'));
  assert.strictEqual(pending.bookmarks.length, 1);

  const bookmark = pending.bookmarks[0];
  assert.strictEqual(bookmark.isThread, true);
  assert.strictEqual(bookmark.threadTweets.length, 2);
  assert.strictEqual(bookmark.downloadedMedia.length, 1);

  const downloadedPath = path.join(workspace.dir, 'media', '1111111111111111111.mp4');
  assert.strictEqual(fs.existsSync(downloadedPath), true);

  const commands = fs.readFileSync(workspace.logFile, 'utf8');
  assert.match(commands, /bookmarks .*--author-chain .*--thread-meta/);
  assert.match(commands, /thread 1111111111111111111 --json/);
});

test('thread command accepts URL with query params', t => {
  const workspace = makeWorkspace();
  t.after(() => fs.rmSync(workspace.dir, { recursive: true, force: true }));

  const url = 'https://x.com/alice/status/1111111111111111111?s=20&t=abc';
  const result = runCli(workspace, ['thread', url]);

  assert.strictEqual(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /Thread: 2 tweets/);

  const commands = fs.readFileSync(workspace.logFile, 'utf8');
  assert.match(commands, new RegExp(`thread ${escapeRegExp(url)} --json`));
});
