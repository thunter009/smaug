---
title: "CI Is Changing"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2104986101022941184"
tags: [ci, agents, devops, testing]
via: "Twitter bookmark from @depotdev"
---

Depot's article argues that CI has become the bottleneck in software delivery now that agents generate code far faster than teams can validate it. Anthropic, Linear, and Lindy each published or posted about CI strain in the same month, and Depot says the common lesson is that CI needs investment across many layers, not one big fix.

Key Takeaways:

- Non-performant CI is death by a thousand papercuts: slow tests, flaky tests, and suites that run on every commit.
- Anthropic built test impact analysis, but its architecture could not keep up with CI volume growth.
- Linear's CI stack includes faster type checking, sparse checkouts, preinstalled dependencies, schema snapshots instead of replayed migrations, and balanced test shards.
- The purpose of CI is to build trust in code. Trust takes longer to build as code volume grows.
- Validation should move to where code is generated: agents run real CI workflows before commit, and Depot CI is driven through an API and CLI so agents can do this.
- Further ideas: skip CI for code an agent already validated, select tests from the generated diff, and feed production failures back into the trust loop.

Links:

- Source: https://x.com/i/article/2104986101022941184
- Anthropic post on agentic coding straining CI: https://claude.com/blog/agentic-coding-is-straining-ci-heres-how-we-scaled-test-impact-analysis-at-anthropic
- Linear post on CI bottleneck: https://linear.app/now/ci-bottleneck-reworked
- Depot CI: https://depot.dev/products/ci
