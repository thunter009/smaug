---
title: "crabbox"
type: tool
date_added: 2026-10-25
source: "https://github.com/openclaw/crabbox"
tags: [agent-infra, remote-test-runner, coding-agents, go, cli]
via: "Twitter bookmark from @steipete"
---
Crabbox (openclaw/crabbox): on-demand computers for coding agents. Warm a box, sync the working-tree diff, run the suite. Go CLI, MIT, ~1.5k stars.

## Key Features
- `crabbox run -- pnpm test` leases a box, syncs the tree (including uncommitted changes), streams output, returns the exit code, releases the box
- Providers: cloud boxes, local VM/container, or a machine you already own; Linux, macOS, native Windows, WSL2
- `warmup` keeps a reusable lease so each agent gets its own warm box and avoids CPU/RAM/port contention
- Desktop via VNC/WebVNC, browser, browser VS Code, coordinator portal
- Optional team coordinator: central cloud credentials, usage tracking, spend caps, stale lease expiry

## Links
- [GitHub](https://github.com/openclaw/crabbox)
- [Original Tweet](https://x.com/steipete/status/2065650561484267540)
