---
title: Anthropic's CI Playbook for GitHub Actions
type: article
date_added: 2026-10-25
source: "https://starsling.dev/blog/anthropic-ci"
tags: [ci, github-actions, testing, devops, performance]
via: "Twitter bookmark from @yonasbe"
description: StarSling's translation of Anthropic's CI test-selection lessons into GitHub Actions optimizations
---

# Anthropic's CI Playbook for GitHub Actions

StarSling blog post on how Anthropic's CI jobs grew 25x in six months, leading to a custom test selection system, and how the same ideas apply on GitHub Actions. Merges reportedly went from about 2,500 a day in May to over 30,000 in September.

## Key Takeaways

1. Run only affected tests: use the dependency graph from Turborepo, Nx, Bazel, Gradle, Vitest or Jest on PRs.
2. Keep the full suite where it counts: run everything on main and in the merge queue so skipped tests are caught before deploy.
3. Skip workflows a change cannot affect: path filters plus job-level `if` so required checks do not hang.
4. Run CI once per change: drop the push + pull_request double trigger; do not rerun on PR title edits unless a check reads them.
5. Bound flaky jobs: default 6-hour hang limit; set `timeout-minutes` from run history.
6. Advice: "assume your architecture will be at 25x load within two quarters". The post lists 70+ more optimizations.

## Links

- Article: https://starsling.dev/blog/anthropic-ci
- Tweet: https://x.com/yonasbe/status/2112221235333722255
