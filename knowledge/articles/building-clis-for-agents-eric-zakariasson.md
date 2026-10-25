---
title: "Building CLIs for agents"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2036387800119975936"
author: "eric zakariasson"
tags: [cli, agents, design]
via: "Twitter bookmark from @ericzakariasson"
---
Practical rules for making CLIs usable by coding agents, which get stuck on interactive prompts and example-free help pages. The core idea: make explicit what humans figure out implicitly.

## Key Takeaways
- Non-interactive first: every input passable as a flag; interactive mode only as fallback
- Progressive discovery via subcommand `--help`, each with examples
- Accept flags, config files and stdin; make errors self-correcting with the fix command and valid values
- Idempotent commands (agents retry), `--dry-run` for destructive actions, `--yes`/`--force` to skip confirmations
- Predictable resource + verb structure; return useful data (IDs, URLs, duration) on success

## Links
- [Article](https://x.com/i/article/2036387800119975936)
- [Original Tweet](https://x.com/ericzakariasson/status/2036762680401223946)
