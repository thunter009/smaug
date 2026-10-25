---
title: "Pal: a personal context-agent that learns how you work"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2028550455278829568"
author: "Ashpreet Bedi"
tags: [context-agent, agent-memory, personal-agent, agno, navigation-vs-rag]
via: "Twitter bookmark from @ashpreetbedi"
---

Describes Pal, a personal agent that navigates a "context graph" of your systems instead of embedding everything into a vector store, and improves via saved learnings while the prompt stays fixed.

## Key Takeaways

- Context agents navigate heterogeneous sources (SQL, files, Gmail, calendar) like Claude Code navigates a codebase, rather than doing similarity search over chunks.
- Four-part context graph: SQL tables Pal creates itself (`pal_*`, linked by tags), markdown files in `context/` that configure behavior (voice, templates, projects), a knowledge map of where things live, and learnings (strategies and corrections; corrections take priority).
- Five-step loop: Classify, Recall, Retrieve, Act, Learn. Classifying first scopes recall to the right sources.
- Improvement comes from better navigation and memory, not prompt changes.
- Scheduled tasks let the agent compound in the background, e.g. surfacing a meeting brief before it is requested.

## Links

- [Original article](https://x.com/i/article/2028550455278829568)
- [Tweet](https://x.com/ashpreetbedi/status/2029953139856531528)
