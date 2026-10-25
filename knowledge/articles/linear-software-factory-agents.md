---
title: "How I use Linear to manage agents (software factories)"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2078299179231715328"
author: "@enginoid"
tags: [linear, agents, software-factory, workflow, coding-agents]
via: "Twitter bookmark from @enginoid"
---

Solo founder uses Linear ($12/mo sole-user fee) as the coordination layer for coding agents. Agents closed about 400 issues in a month. Setup is a low-tech prototype that pastes prompts into Codex, Claude Code, Cursor or Antigravity.

## Key Takeaways

- Tickets form an outcome hierarchy (named after outcomes, not technical tasks), so agents finish trees down to the root.
- Triage is an inbox for future agent prompts; issues go there instead of spawning new agents.
- Each ticket is a contract with Goal, Why, Outcomes, plus Implementation approach and Verifications (automated, manual, visual checks).
- Agents cannot close a ticket while checklist items remain unchecked.
- Work runs in batches of 3-5 non-overlapping parallel workstreams, unsupervised but monitored; AskUser hook is blocked.
- A "workstream update" skill syncs in-progress work, reads triage, loads priorities and proposes 4-5 agent prompts.
- Hooks (not APIs) force agents to finish: commit, PR, review, merge, check all boxes, else mark Blocked and escalate.

## Links

- [Original article](https://x.com/i/article/2078299179231715328)
- [Tweet](https://x.com/enginoid/status/2078850177926938666)
