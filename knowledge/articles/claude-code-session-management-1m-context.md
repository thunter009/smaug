---
title: "Using Claude Code: Session Management & 1M Context"
type: article
date_added: 2026-04-15
source: "https://x.com/i/article/2044537014620721153"
author: "Thariq (@trq212)"
tags: [claude-code, context-management, workflow]
via: "Twitter bookmark from @trq212"
---

Thariq (Anthropic) explains how to manage Claude Code sessions with a 1M-token context window: context rot degrades quality as context grows, so every finished turn is a branching point (continue, rewind, clear, compact, subagent).

## Key Takeaways

- Rule of thumb: new task means new session; related follow-ups (e.g. docs for a just-built feature) can reuse context to avoid re-reading files.
- Rewind (Esc Esc or /rewind) beats correcting in-line: jump back past failed attempts and re-prompt with what you learned; "summarize from here" creates a handoff note.
- /compact is lossy but cheap; /clear with a hand-written brief gives a context you fully chose.
- Bad compacts happen when the model cannot predict where work is heading, and it compacts at peak context rot; compact proactively with a steering description.
- Subagents give a fresh window for work with bulky intermediate output; test: need the tool output again, or just the conclusion?

## Links

- [Article](https://x.com/i/article/2044537014620721153)
- [Original Tweet](https://x.com/trq212/status/2044548257058328723)
