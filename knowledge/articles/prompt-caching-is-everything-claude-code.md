---
title: "Lessons from Building Claude Code: Prompt Caching Is Everything"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2024543492064882688"
author: "Thariq"
tags: [claude-code, prompt-caching, agents]
via: "Twitter bookmark from @hooeem"
---

Claude Code's harness is built around prompt caching; hit rate drives cost and rate limits, and the team declares SEVs when it drops.

## Key Takeaways

- Order prompts static first, dynamic last: system prompt and tools, CLAUDE.md, session context, messages.
- Timestamps in the system prompt, nondeterministic tool order, or changing tool params break the prefix.
- Send updates via system-reminder tags in messages, not by editing the prompt.
- Do not switch models mid-session.

## Links

- [Article](https://x.com/i/article/2024543492064882688)
- [Toolkit artifact](https://claude.ai/public/artifacts/03a743c6-852f-4e7c-9944-2e087548eb93)
- [Original Tweet](https://x.com/hooeem/status/2024893159654756368)
