---
title: "An AI Skill-Building Pipeline for Non-Experts"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2037466181586894848"
author: "nurijanian"
tags: [ai-skills, notebooklm, evals, agents]
via: "Twitter bookmark from @nurijanian"
---

Seven-step pipeline for building AI skills in domains you lack expertise in: NotebookLM serves as the on-demand subject matter expert, and binary evals (mostly regex) provide quality control.

## Key Takeaways

- Load source books/PDFs into NotebookLM, query exhaustively for operational detail (rules, named patterns, worked examples), and wire up the NotebookLM CLI in a coding agent.
- Extraction depth sets the skill's ceiling: summaries yield summary-producing skills.
- Evals: about 85% deterministic regex checks, about 15% Claude-as-judge; 0-100 LLM scoring was uncalibrated and 35 sequential NLM calls timed out.
- Run an autonomous loop (pi-autoresearch) to fix gaps the evals expose, then validate against the source with NotebookLM.
- Read outputs manually before designing evals; skipping this produced skills that scored well and performed poorly.
- Examples: focal-point-finder (Schelling) and rulebook-for-arguments (Weston) skills.

## Links

- Source: https://x.com/i/article/2037466181586894848
- [Original Tweet](https://x.com/nurijanian/status/2037824127076356528)
