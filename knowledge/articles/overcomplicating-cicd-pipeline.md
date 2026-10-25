---
title: "You're probably overcomplicating your CI/CD pipeline"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2025502023542566912"
author: "Branko (@brankopetric00)"
tags: [ci-cd, github-actions, devops, caching]
via: "Twitter bookmark from @brankopetric00"
---

Diagnoses ten common CI/CD pipeline smells, from a 26-step, 38-minute pipeline, with GitHub Actions fixes. Goal: a boring pipeline nobody thinks about.

## Key Takeaways

- Slow builds: cache deps and Docker layers (type=gha), parallelize lint/test, use setup actions instead of apt installs
- Flaky tests: quarantine with continue-on-error, mock externals, fix root causes rather than retry
- YAML spaghetti: move bash into scripts, use composite actions
- Security: fail early on critical-only audit, raise bar gradually
- Local parity: Makefile `make ci` called by CI
- Deploy only from main, environment approval, keep artifacts and a rollback workflow
- Notify on state change only; document triggers, secrets, environments

## Links

- Article: https://x.com/i/article/2025502023542566912
- Tweet: https://x.com/brankopetric00/status/2027653024982679804
