---
title: "How we built scalable evaluation infrastructure for AI web agents"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2025962198724653058"
author: "gregpr07"
tags: [ai-agents, agent-evals]
via: "Twitter bookmark from @gregpr07"
---

Browser Use deep dive on its LLM-as-a-judge eval platform for web agents: repeated runs with bootstrapped statistics, 100 tasks in under 5 minutes on Blacksmith runners, traces in ClickHouse via Laminar, and a Slack-driven Claude Code loop for A/B analysis.

## Key Takeaways

- Web agent runs are noisy; run tasks repeatedly and aggregate with statistical bootstrapping, with error bars.
- Judge is built into agent code; gemini-2.5-flash judge reaches 87% alignment with 200 hand-labeled traces; simple True/False verdicts beat complex rubrics.
- Embedding clustering of failures was useless; Claude Code reading raw failure_reason strings and iteratively subcategorizing worked.
- Agent-first loop: dev pings Claude in Slack, it triggers runs via MCP, queries Laminar SQL, posts statistical A/B summary; runs on every PR.
- Open-sourced benchmark at github.com/browser-use/benchmark.

## Links

- [Article](https://x.com/i/article/2025962198724653058)
- [Original Tweet](https://x.com/gregpr07/status/2026001783265583168)
