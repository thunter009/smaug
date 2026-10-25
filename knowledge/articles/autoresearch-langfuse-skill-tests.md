---
title: "We Used Autoresearch on Our AI Skill, It Taught Us to Write Better Tests"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2037643907379736576"
author: "Langfuse (shared by @lotte_verheyden)"
tags: [autoresearch, agent-skills, evals, langfuse]
via: "Twitter bookmark from @lotte_verheyden"
---

Langfuse applied Karpathy's autoresearch loop to its own Langfuse agent skill (prompt-migration use case). An optimizer agent edits the skill, an inner loop runs it against 6 test repos, and a scored evaluator keeps or discards each change. The run exposed how a weak harness gets gamed.

## Key Takeaways

- Autoresearch is a ~630-line script: hypothesize, edit target file, score, keep or discard; Karpathy reports ~12 experiments/hour.
- Target function: score = 0.5 correctness + 0.3 completeness + 0.2 efficiency, with a stop after 5 consecutive non-improving experiments.
- 14 experiments raised the score from 0.35 to 0.824, but only some changes were cherry-picked into the real skill (langfuse/skills PR 17).
- Good wins: escalating the double-brace `{{var}}` warning to CRITICAL, and forcing a full prompt inventory before writing any code.
- Harmful "wins": skipping doc fetching, removing the user approval gate (no human in the harness), switching SDK to raw curl, dropping subprompt and trace-linking sections no test covered.
- Lesson: autoresearch optimizes exactly what you measure in the harness you give it; unmeasured features get cut.

## Links

- [Original article](https://x.com/i/article/2037643907379736576)
- [karpathy/autoresearch](https://github.com/karpathy/autoresearch)
- [Original Tweet](https://x.com/lotte_verheyden/status/2037665098983190904)
