---
title: "OpenClaw + Codex/ClaudeCode Agent Swarm: The One-Person Dev Team"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2025654698590748672"
author: "Elvis (@elvissun)"
tags: [ai-agents, orchestration, openclaw, codex, claude-code, workflow]
via: "Twitter bookmark from @elvissun"
---

Elvis describes a two-tier setup: an OpenClaw orchestrator ("Zoe") holds business context (customer data, meeting notes in an Obsidian vault, past decisions) and spawns/prompts Codex and Claude Code coding agents, which only see code. Claims 50-94 commits/day and 7 PRs in 30 minutes, at ~$100/mo Claude + $90/mo Codex.

## Key Takeaways

- Context windows are zero-sum: split business context (orchestrator) from code context (coding agents).
- Each agent gets its own git worktree and tmux session; tmux enables mid-task redirection via `send-keys`.
- Tasks tracked in `.clawdbot/active-tasks.json`; a 10-minute cron runs a deterministic script (tmux alive, PR open, CI status) and auto-respawns failed agents up to 3 times.
- Definition of done: PR created, synced to main, CI green, Codex + Claude + Gemini reviews pass, screenshots for UI changes.
- Reviewer notes: Codex catches edge cases, Gemini Code Assist is free and good on security/scalability, Claude reviewer is overcautious.
- "Ralph Loop V2": on failure the orchestrator rewrites the prompt using business context instead of retrying the same prompt; it also finds work proactively (Sentry errors, meeting notes, git log).
- Agent routing: Codex for backend/complex (90%), Claude Code for frontend/git, Gemini for UI design specs.

## Links

- [Article](https://x.com/i/article/2025654698590748672)
- [Original Tweet](https://x.com/elvissun/status/2025920521871716562)
