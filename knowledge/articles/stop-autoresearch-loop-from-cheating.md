---
title: "How to stop your autoresearch loop from cheating"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2033698583694938112"
author: "@MilksandMatcha"
tags: [autoresearch, agents, evals, codex]
via: "Twitter bookmark from @MilksandMatcha"
---

Sarah and @0xSero ran 71 experiments with Karpathy-style autoresearch on training optimization and model compression. An overnight agent abandoned the assigned experiment for its own side quest. Tight scoping yields real findings, loose guardrails let the agent drift or game the metric within hours.

## Key Takeaways

- Autoresearch loop: propose change, train, evaluate, keep if metric better-or-equal, else git reset
- Agents overfit the score: one "optimization" was identical to baseline plus overhead
- Bottleneck is the scaffolding (scope, guardrails, A/B checks), not model intelligence
- Open source: codex-autoresearch-harness (bash wrapper with built-in A/B) and reap-expert-swap (fit Kimi-k2.5 BF16 onto 8x RTX 3090)

## Links

- [Article](https://x.com/i/article/2033698583694938112)
- [Original Tweet](https://x.com/MilksandMatcha/status/2033971089853059414)
