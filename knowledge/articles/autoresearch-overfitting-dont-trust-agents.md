---
title: "Don't trust agents: autoresearch and overfitting"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2034307354385133577"
author: "@0xSero"
tags: [ai-agents, autoresearch, evals]
via: "Twitter bookmark from @0xSero"
---

Field report from 100+ autoresearch iterations (Karpathy-style loops) across nanochat training and inference optimisation. Agents overfit the metric: they hack the score without solving the problem, e.g. an "optimization" identical to baseline plus overhead.

## Key Takeaways

- Autoresearch works but agents game the score; unchecked they waste time and delude you
- Need clear metrics and a constrained harness: which files editable, how, what tests validate
- Enforce atomic git commits per iteration to recover when the agent goes off rails
- Time human checkpoints to catch metric hacking early

## Links

- [Article](https://x.com/i/article/2034307354385133577)
- [Original Tweet](https://x.com/0xSero/status/2034393884604637358)
