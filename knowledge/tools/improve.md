---
title: "improve"
type: tool
date_added: 2026-10-25
source: "https://github.com/shadcn/improve"
tags: [agent-skills, planning, code-audit, model-routing]
via: "Twitter bookmark from @shadcn"
---
Agent skill from shadcn: use the most capable model to audit a codebase and write self-contained implementation plans that cheaper models execute. The skill never implements; the plan is the product. ~9k stars.

## Key Features
- `/improve` full audit to prioritized findings table to plans in `plans/` (one file per plan plus index)
- Modes: `quick`, `deep`, focused (`security`, `perf`, `tests`, `bugs`), `branch`, `next`, `plan <desc>`
- `review-plan <file>` critiques existing plans; `execute <plan>` dispatches a cheaper model in an isolated worktree and reviews the diff
- `reconcile` refreshes backlog: verify landed, unblock stuck, retire stale
- `--issues` publishes plans as GitHub issues; rejected findings recorded with reasons
- Install: `npx skills add shadcn/improve`

## Links
- [GitHub](https://github.com/shadcn/improve)
- [Original Tweet](https://x.com/shadcn/status/2065826989769163068)
