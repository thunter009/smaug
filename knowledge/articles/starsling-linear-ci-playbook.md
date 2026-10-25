---
title: "Linear's 15 GitHub Actions Optimizations (StarSling playbook)"
type: article
date_added: 2026-10-25
source: "https://starsling.dev/blog/linear-ci"
tags: [ci, github-actions, performance, coding-agents]
via: "Twitter bookmark from @yonasbe"
---

StarSling turns Linear's published CI speedups into 15 copy-paste prompts you can hand to a coding agent, each tied to a named ci-speedup pattern.

## Key Takeaways

- Faster runners: 34% faster jobs on average, typecheck 52% faster.
- tsgo (native TypeScript) cut typecheck weekly median 73% and took it off the critical path.
- Syntax-only lint rules plus Oxlint: API lint 68% faster, whole repo 55% faster.
- Shallow fetch and no-checkout for jobs that never read files: 94s to 20s, 27s to 7s; retrying checkout aborts stalled fetches at ~30s.
- Move cache writes off the merge-check critical path (42s saved per API PR); bake the Postgres client into the CI image (7-8s per shard).
- Filtered pnpm installs: 44-73s to 16-18s; drop node_modules cache when restore (28s) is slower than fresh install (7.5s).
- Load a schema snapshot instead of replaying migrations: ~12s to 1-2s per container.
- Merge 7 tiny jobs into 2: ~87,000 runner-minutes/month saved (11.8% of CI).
- Rebalance shards (4 to 8) and share module state across test files: slowest shard 300-379s to ~195s, shard runner time 32.8 to 22 min.

## Links

- Source: https://starsling.dev/blog/linear-ci
- Tweet: https://x.com/yonasbe/status/2110045850852634825
