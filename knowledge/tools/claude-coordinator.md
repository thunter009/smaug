---
title: "claude-coordinator - pure-delegation multi-agent control plane for Claude Code"
type: tool
date_added: 2026-10-25
source: "https://github.com/dennisonbertram/claude-coordinator"
tags: [claude-code, multi-agent, orchestration, tdd, subagents]
via: "Twitter bookmark from @DennisonBertram"
---

Instead of one Claude session doing everything, claude-coordinator runs a team of specialized agents under a coordinator whose only tool is `Agent`. It plans, keeps state, delegates, and writes context for the next session. MIT license, 22 stars at capture.

## Key Features

- Coordinator never reads or writes files; it only spawns subagents
- Roles: Briefer (Haiku), Planner (Sonnet), Worker / Worker-Refactor / Worker-Test / Worker-Investigation (Sonnet), Reviewer (Opus plus external GPT-5.4 pass), UI/UX/System testers, Intent-Validator (Opus), learning extractor, Scribe (Haiku)
- Strict TDD workers produce an auditable red, green, regression commit trail
- 10-phase state machine: startup, intake, plan, delegate, integrate, review, test, promote-learnings, validate, close
- State persists in `.coord/` (machine-readable) and `docs/` (human-readable) across sessions
- Workers run in isolated worktrees with no file overlap
- Stop hook logs work done and turns it into structured learnings

## Links

- [GitHub](https://github.com/dennisonbertram/claude-coordinator)
- [Original Tweet](https://x.com/DennisonBertram/status/2037592952726294677)
