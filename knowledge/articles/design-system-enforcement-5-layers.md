---
title: "How to force your agent to obey your design system (5-layer setup)"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2028912816674226179"
author: "Ryan Carson (ryancarson)"
tags: [design-system, coding-agents, linting, pre-commit, ci]
via: "Twitter bookmark from @ryancarson"
---
Treat the design system as an enforced contract, not optional guidance. Five overlapping layers make agent-generated UI deterministic.

## Key Takeaways

- Layers: canonical docs, agent routing (design-system SKILL.md), custom lint rules, pre-commit staged lint, CI gate.
- Docs must be lintable: "use semantic spacing tokens (`mt-s`), never `mt-3`" beats "be consistent". Add a "Machine Enforcement" section naming commands.
- High-value custom lints: spacing tokens, color tokens, token contract alignment, typography constants, shared form wrappers.
- One orchestrator command (`lint:design-system`) plus a `:staged` variant for the hook; CI runs the same contract on changed files.
- Scope tightly at first (logged-in app only). Exceptions need an inline marker with a reason and periodic audit.
- Failure modes: competing lint entrypoints, stale docs, strict-but-unactionable rules, premature scope.

## Links

- [Tweet](https://x.com/ryancarson/status/2028916090596643078)
- [Article](https://x.com/i/article/2028912816674226179)
