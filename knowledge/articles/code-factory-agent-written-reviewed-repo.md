---
title: "Code Factory: How to setup your repo so your agent can auto write and review 100% of your code"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2023001790258573312"
author: "@ryancarson"
tags: [agents, ci, code-review, harness]
via: "Twitter bookmark from @ryancarson"
---

Pattern for a repo where a coding agent writes code, a review agent validates PRs, and merge policy is enforced by machine-verifiable checks.

## Key Takeaways

- One machine-readable contract defines risk tiers by path, required checks per tier, and evidence rules
- Run a risk-policy gate before expensive CI fanout
- Treat review state as valid only for the current PR head SHA; rerun after each push
- Use a single rerun-comment writer, deduped by marker and sha
- Optional remediation agent patches findings in-branch; auto-resolve bot-only threads only after a clean rerun
- Require browser evidence manifests for UI changes; turn incidents into harness cases

## Links

- [Article](https://x.com/i/article/2023001790258573312)
- [Original Tweet](https://x.com/ryancarson/status/2023452909883609111)
