---
title: "My Ralph Loop setup for long running AI Agents"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2026009212296327168"
author: "d4m1n"
tags: [ai-agents, ralph-loop]
via: "Twitter bookmark from @d4m1n"
---

Dan's guide to a Docker-sandboxed Ralph Loop (npx @pageai/ralph-loop) for Claude Code: PRD-to-tasks skill, fresh context each iteration, state in files and git. Longest run was 37 hours and 250 tasks from a 2,000-line requirements doc.

## Key Takeaways

- Install with npx @pageai/ralph-loop; creates .agent/ with PROMPT.md, STEERING.md, tasks.json, prd/, logs/, history/, skills/.
- Needs Docker sandbox plus Claude Code; install Playwright and Vitest so the loop verifies its own work.
- Use the prd-creator skill; review every generated task, point to exact docs, prepare API keys early.
- Run ./ralph.sh -n 2, then 10, then 30 overnight; steer mid-run by editing .agent/STEERING.md.
- Fresh context per iteration avoids the context-window dumb zone; good for MVPs, tests, migrations; weak for pixel-perfect UX, novel architecture, security-critical code.

## Links

- [Article](https://x.com/i/article/2026009212296327168)
- [Original Tweet](https://x.com/d4m1n/status/2026032801322356903)
