---
title: "GitHub Actions: The Stuff Nobody Tells You"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2038750798575030272"
tags: [github-actions, ci, devops, security]
via: "Twitter bookmark from @acolombiadev"
author: "Andrea (@acolombiadev)"
---

Practical tips from a GitHub employee for taming GitHub Actions pain: log viewing, YAML sprawl, debugging loops, supply-chain trust, caching and concurrency.

## Key Takeaways

- Use `gh run view --log-failed` and `gh run watch` instead of the web log viewer
- Shrink YAML with reusable workflows (whole pipelines) and composite actions (step bundles)
- Run workflows locally with `act` to avoid push-wait-fail loops
- Pin third-party actions to SHAs (with version comment), let Dependabot update, prefer GitHub-maintained actions, check OpenSSF Scorecard
- Expression survival rules: quote `if:` expressions, `fromJSON` for boolean inputs, `>-` for multi-line conditions, `case()` function
- Cache dependencies (`cache: 'npm'`, `actions/cache` keyed on lockfile hash)
- Use `concurrency` groups with cancel-in-progress to drop stale runs
- Let Copilot generate/refactor workflow YAML

## Links

- [Source](https://x.com/i/article/2038750798575030272)
- [Original Tweet](https://x.com/acolombiadev/status/2038990002609078399)
