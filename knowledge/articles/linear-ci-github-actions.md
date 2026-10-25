---
title: "Linear's 15 GitHub Actions Optimizations"
type: article
date_added: 2026-10-25
source: "https://starsling.dev/blog/linear-ci"
tags: [ci, github-actions, performance, typescript]
via: "Twitter bookmark from @yonasbe"
---

# Linear's 15 GitHub Actions Optimizations

StarSling write-up of how Linear cut CI time, summarized in a tweet by @yonasbe. The post is meant to be handed to an agent to replicate (50+ more optimizations).

## Key Takeaways
- Faster runners than GitHub's: jobs 34% faster on average, typecheck 52% faster
- tsc to tsgo (native TypeScript): typecheck weekly median down 73%, off the critical path
- Rewrite type-aware lint rules as syntax-only, then move to Oxlint: API lint 68% faster, repo 55%
- Shallow fetch: slowest gate job 94s to 20s; skip checkout where files are unread: 27s to 7s
- Checkout retries and aborts a stalled fetch at ~30s
- Move cache write off the final merge check: saves 42s per API PR
- Bake Postgres client into CI image: 7-8s per test shard
- Filtered pnpm install (API package only): 44-73s to 16-18s
- Setup time bounds sharding: cutting setup to ~40s makes 8 shards cheaper than 4 were

## Links
- Article: https://starsling.dev/blog/linear-ci
- Tweet: https://x.com/yonasbe/status/2110045850852634825
