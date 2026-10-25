---
title: "How to Build a Data Agent in 2026"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2029702407823970306"
author: "Jamie Quint"
tags: [data-agent, dbt, claude-agent-sdk, text-to-sql, semantic-layer]
via: "Twitter bookmark from @jamiequint"
---

Ex-Notion data lead's guide to an "AI data stack" agent that replaces hand-maintained semantic layers with on-demand context investigation. Roughly 3 weeks to build, claimed to 5x+ data team bandwidth.

## Key Takeaways

- Replace pre-defined semantic layer with a context sub-agent that reads dbt models, traces `ref()` dependencies upstream, and returns a brief (tables, join paths, filters, dedup rules, caveats) before any SQL is written.
- Annotate dbt staging models with links to application code so business rules can be validated.
- Capture user corrections as durable "quirks" in a store (pgvector + BM25 hybrid retrieval, OpenAI text-embedding-3-small) and inject top matches per question.
- Keep a small human-authored set of core KPI definitions in the same store (the useful ~20% of a semantic layer).
- Run on Claude Agent SDK; author prefers Opus 4.6 over Codex 5.3 xhigh for data work.
- Advanced tuning: agent self-scores each SQL query (structural, execution, context alignment), builds a context-gap brief, and retries targeted at unresolved gaps.
- Wire into Slack with multi-threading plus an admin dashboard to monitor usage and edit the knowledge store.

## Links

- [Original article](https://x.com/i/article/2029702407823970306)
- [Tweet](https://x.com/jamiequint/status/2029705203457609785)
