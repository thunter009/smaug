---
title: "How Peter Steinberger does agentic engineering, plus my take"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2025986700158353408"
author: "BHolmesDev"
tags: [ai-agents, agentic-coding]
via: "Twitter bookmark from @BHolmesDev"
---

Ben Holmes (Warp) summarizes Peter Steinberger's minimalist agentic workflow: one repo, one branch, one dev server, 3-8 Codex instances in parallel, no worktrees or orchestration frameworks. Holmes adds his own critique from team experience.

## Key Takeaways

- Steinberger keeps a low blast radius per task so agents rarely touch the same files, and commits atomically per touched file.
- Holmes prefers cloud sandboxes, separate branches and PR review on teams; agents needing computer access cannot test simultaneously on one machine.
- Skip /init-generated AGENTS.md: it bloats context with discoverable info; nudge the agent to update it as needed and prune occasionally.
- Do not over-engineer: start with one agent on one branch, scale to 2-3 in one directory, add rules, then branches/worktrees/cloud only when conflicts persist.

## Links

- [Article](https://x.com/i/article/2025986700158353408)
- [Original Tweet](https://x.com/BHolmesDev/status/2025988271776383275)
