---
title: "Aftermarket Harnesses"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2082158492337811457"
author: "@ttunguz"
tags: [ai-agents, harness, prompt-caching, benchmarks, cost]
via: "Twitter bookmark from @ttunguz"
---

Tomasz Tunguz argues the agent harness affects performance, cost and accuracy more than the underlying model. Endor Labs ran the same models through two harnesses in one week and got large swings.

## Key Takeaways

- Endor Labs: GPT-5.5 scored 61.5% functional correctness in Codex and 87.2% in Cursor, a 25.7-point swing from runtime alone.
- Opus 4.7 scored 87.2% in Claude Code and 91.1% in Cursor. Both frontier models did better in a competitor's harness.
- Input tokens are 86-98% of LLM traffic on OpenRouter, so controlling input cost matters most. The harness, not the model, controls it.
- Harnesses decide what context to send. Intelligent caching saves 40-80%; a 500-session study found 41-80% cost reduction and 13-31% faster time-to-first-token.
- Winning strategy: cache only the stable prefix and place dynamic content after the cache breakpoint.
- Cursor's harness matches Claude Code technique-for-technique: dynamic tool fetching, priority-based prefix assembly, two-tier caching.
- Claude Code treats cache hit rate as an uptime metric (about 96% in real sessions) and builds forked sub-agents with 99% byte-identity for about 90% savings.
- Cache discipline lives in the harness, so third-party harnesses can match it.

## Links

- [Tweet](https://x.com/ttunguz/status/2082158740107866459)
- [Article](https://x.com/i/article/2082158492337811457)
