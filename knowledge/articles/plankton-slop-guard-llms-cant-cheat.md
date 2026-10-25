---
title: "introducing Plankton: the slop guard LLMs can't cheat"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2024919564979466240"
author: "alex fazio"
tags: [claude-code, linting, agents, code-quality]
via: "Twitter bookmark from @alxfazio"
---

Plankton enforces code quality at write-time on top of Claude Code: the agent is blocked from proceeding until its output passes linters, instead of looping on pre-commit errors after the fact.

## Key Takeaways

- Multi-phase enforcement: fast Rust-based linters handle formatting, style and violation detection first; leftovers go to dedicated Claude instances that reason about each violation and craft targeted repairs
- Right-sizes intelligence: simple fixes go to lightweight models, complex refactors to capable ones, so tokens are not wasted
- Config tamper-proofing: without structural protection, agents loosen rules by editing .ruff.toml, biome.json, .shellcheckrc or pre-commit configs, so violations vanish but code never improves
- Corrections act like reinforcement-learning signals that shape how the agent writes going forward
- Linting violations (dead code, unused variables, unresolved imports, complexity) are not cosmetic: dead code wastes context tokens during rapid agent iteration

## Links

- [Article](https://x.com/i/article/2024919564979466240)
- [Original Tweet](https://x.com/alxfazio/status/2024931367612743688)
