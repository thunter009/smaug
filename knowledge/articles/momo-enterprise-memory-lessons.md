---
title: "3 Months Building Enterprise Memory: What I Learned (Momo)"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2037441071589068800"
author: "cailynyongyong"
tags: [agent-memory, knowledge-graph, pgvector, posthog]
via: "Twitter bookmark from @yoheinakajima"
---

Founder write-up on three approaches to AI memory for companies while building Momo: bottom-up input indexing, top-down project extraction, and customer-context-first memory seeded from PostHog data.

## Key Takeaways

- Approach 1 (bottom-up): extract people, entities, decisions per input; store in pgvector plus knowledge graph. Per-user onboarding was a barrier; the graph was too slow on multi-hop queries, so they went back to pure pgvector.
- Approach 2 (top-down): admin connects apps, infer projects first, then decisions. Slow setup, high token cost, inaccurate project extraction.
- Approach 3 (now): start from structured customer data in PostHog, auto-generate profiles, enrich with email/Slack/meeting interactions, analyze power users and churn.
- Core problem: structuring memory from unstructured inputs is lossy and errors compound; the team's high-level mental model was never written down.
- A one-stop SaaS memory will not work; memory needs continuous building with human feedback. Agent teams need a shared, queryable source of truth.

## Links

- [Original article](https://x.com/i/article/2037441071589068800)
- [Original Tweet](https://x.com/yoheinakajima/status/2037673681670086967)
