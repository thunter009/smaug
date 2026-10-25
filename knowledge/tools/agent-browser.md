---
title: "agent-browser"
type: tool
date_added: 2026-10-25
source: "https://github.com/vercel-labs/agent-browser"
tags: [browser-automation, ai-agents, cli, rust]
via: "Twitter bookmark from @0xSero"
---

Browser automation CLI for AI agents, written as a fast native Rust binary by Vercel Labs. Agents drive the browser through accessibility-tree refs, which keeps token use low compared with Playwright-based setups.

## Key Features

- Accessibility snapshot with element refs (`snapshot`, then `click @e2`, `fill @e3 "..."`)
- Traditional CSS selectors and `find role` queries also supported
- Screenshots, page text extraction, and `read` for agent-readable page content
- Installs Chrome for Testing via `agent-browser install`; detects existing Chrome, Brave, Playwright, and Puppeteer installs
- Installable via npm, Homebrew, or Cargo; ships with an agent skill

## Links

- GitHub: https://github.com/vercel-labs/agent-browser
- Original Tweet: https://x.com/0xSero/status/2040067262124601358
