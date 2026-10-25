---
title: "My chief of staff, Claude Code"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2029698920159531010"
author: "Jim Prosser"
tags: [claude-code, subagents, automation, todoist, productivity]
via: "Twitter bookmark from @jimprosser"
---

Non-programmer comms consultant built a personal chief-of-staff system on Claude Code in 36 hours. Overnight jobs triage email and calendar; a morning "AM Sweep" fans out six parallel subagents.

## Key Takeaways

- Two overnight automations on an always-on Mac Studio: calendar scan with Google Maps drive-time events, and email triage that creates deduped Todoist tasks.
- Stream Deck button launches the AM Sweep: six scoped subagents (email drafts, Obsidian client notes, scheduling, research) run in parallel, each with its own context and tool access.
- Second button, "Time Block", turns remaining Todoist tasks into a geographically batched calendar using duration estimates.
- Layered design: each component emits metadata the next consumes; any layer removable.
- Behavior defined in plain-English Markdown files (classification criteria, voice, scheduling rules, tool permissions).
- Key principle: deliberate human boundary. Never sends email, never writes strategy docs, never makes pricing calls. Default is "prep" (80% ready) over "dispatch".
- Green/yellow/red/gray triage: handled, prepped options, human-only, deferred.

## Links

- [Original article](https://x.com/i/article/2029698920159531010)
- [Tweet](https://x.com/jimprosser/status/2029699731539255640)
