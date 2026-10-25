---
title: "Expect: agent skill that tests code changes in a real browser"
type: tool
date_added: 2026-10-25
source: "https://github.com/millionco/expect"
tags: [agent-skills, testing, browser, playwright]
via: "Twitter bookmark from @aidenybai"
---

Expect is an open-source skill that reads your git changes, generates a browser test plan, and runs it with Playwright on your own machine. It works inside Claude Code, Codex, Cursor, and other coding agents, and it reports broken behavior so the agent can fix and re-run.

## Key Features

- Reads git changes and generates a test plan from them, with no hand-written selectors or scripts
- Runs tests in a real browser via Playwright, using your real cookies
- Spawns subagents that simulate logged-in users to find issues and regressions
- Checks performance (INP, LCP, long animation frames), security (npm deps, CSRF), and UI completeness
- CI mode (`--ci`) runs headless, skips cookie extraction, auto-approves the plan, and enforces a 30-minute timeout
- Installs with `npx expect-cli@latest init`; `add github-action` sets up per-PR testing

## Links

- GitHub: https://github.com/millionco/expect
- Original Tweet: https://x.com/aidenybai/status/2041909118647279620
