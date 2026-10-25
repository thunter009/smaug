---
title: "Autoresearching Apple's "LLM in a Flash" to run Qwen 397B locally"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2034344524353560576"
author: "@danveloper"
tags: [local-llm, apple-silicon, autoresearch, claude-code, moe]
via: "Twitter bookmark from @danveloper"
---

Dan Woods used Claude Code with Karpathy-style autoresearch to run Qwen 3.5 397B (209 GB MoE) on a 48 GB MacBook Pro by streaming weights from flash per Apple's "LLM in a Flash" paper. He reports 5.7 tok/s sustained (7.07 peak) using about 5.5 GB resident memory.

## Key Takeaways

- Give the agent a metric and a goal to hit; the loop wrote Metal shaders and an Objective-C inference engine
- Apple's flash-streaming thesis works for MoE models exceeding DRAM
- Result: 5.7 tok/s sustained, 5.5 GB resident, production-quality output
- Opus 4.6 plus Claude Code long tool loops made low-level work feasible for a non-specialist

## Links

- [Article](https://x.com/i/article/2034344524353560576)
- [Original Tweet](https://x.com/danveloper/status/2034353876753592372)
