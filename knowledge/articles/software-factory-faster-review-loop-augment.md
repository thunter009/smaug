---
title: "The software factory needs a faster review loop: further optimizing the path from PR to merge"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2087979731908263936"
author: "Augment Code"
tags: [code-review, agents, loop-engineering, ai-coding]
via: "Twitter bookmark from @augmentcode"
---

Augment Code describes expanding its Cosmos review system from code review into the full PR-to-merge loop. Code generation is no longer the bottleneck; review, verification, repair, and human decisions are. A fleet of specialized agents ("Experts") handles mechanical work while humans keep consequential judgment and the final merge click.

## Key Takeaways
- Experts: Risk Analyzer (risk classification, auto-approval), Deep Reviewer (line-by-line correctness vs AGENTS.md/CLAUDE.md), Pair Reviewer (intent, architecture, tradeoffs with a human), Memory Manager, plus new Verifier (end-to-end runtime evidence), PR Fixer (review findings, CI failures, merge conflicts), Review Dashboard, and `cosmos approve`.
- Principle: agents do mechanical work, humans make consequential decisions; no expert ever merges.
- Cost: optimize cost per successful outcome (human time plus tokens), not token price. GPT-5.6 Sol for judgment-heavy work, GPT-5.6 Luna for bounded mechanical tasks.
- `cosmos approve`: opt-in policy check (author is CODEOWNER, no unresolved findings on current head, no contradictory Verifier evidence).
- Operating model: specialization, minimal human checkpoints, inspectable evidence, repair loops, observability, configurability, human ownership.

## Links
- [Article](https://x.com/i/article/2087979731908263936)
- [Original Tweet](https://x.com/augmentcode/status/2087981573551583307)
