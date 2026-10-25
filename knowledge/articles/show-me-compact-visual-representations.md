---
title: "/show-me: compact visual representations for coding agents"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2087315210667429888"
author: "dexhorthy"
tags: [agent-skills, coding-agents, developer-experience, humanlayer]
via: "Twitter bookmark from @BHolmesDev"
---

Dex Horthy (HumanLayer) argues coding agents produce walls of jargon prose that are hard to read. His fix is the show-me skill: make the agent explain changes with concise visual shapes instead of paragraphs. Install with `npx skills add humanlayer/skills --skill show-me`.

## Key Takeaways

- Shapes the skill uses: component trees, call stacks, mermaid diagrams (state/sequence), shallow file layouts, pseudocode, types and signatures, diff syntax, HTML mockups and explainers
- Rationale: analyzing prose is exhausting; the visual cortex processes structure effortlessly, so tools should fit the human mind
- Strong for program design: discuss types, signatures and call stacks before agents write code
- Also useful for exploring large diffs post-hoc to decide what to dig into during review
- Composable: follow-ups like "/show-me the InboxView" drill into one area
- HumanLayer's built-in version renders inline HTML and diagrams first-class

## Links

- [Article](https://x.com/i/article/2087315210667429888)
- [Original Tweet](https://x.com/BHolmesDev/status/2111883582373257218)
