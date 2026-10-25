---
title: "Lessons learned choosing a startup tech stack"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2015882265264291841"
author: "@kushalbyatnal"
tags: [startups, tech-stack, architecture, typescript, postgres]
via: "Twitter bookmark from @kushalbyatnal"
---

Extend's CEO reviews a "boring" stack (React, Node, TypeScript, Postgres, Redis) chosen 2.5 years ago, which carried the company past $1M ARR with 3 engineers and 1000x volume growth.

## Key Takeaways

- Core stack unchanged; boring tech kept shipping velocity high.
- Monorepo was the best decision: one PR across codebase, better context for Cursor/Claude. Regret: docs repo not included.
- Designing for self-hosting/on-prem from day 1 now unblocks enterprise deals; retrofitting would be a 6-month rewrite.
- Migrated to AWS: improved stability, faster sales cycles, easier SOC2/security reviews for F500 buyers.
- Added Go/Rust selectively for CPU-bound work.
- Postgres job queues locked up at scale; moving queue state to Redis earlier would have been better.
- Open-source auth tool lacked SAML SSO/SCIM; moved to WorkOS.

## Links

- [Original Tweet](https://x.com/kushalbyatnal/status/2016602943869293047)
- [Article](https://x.com/i/article/2015882265264291841)
