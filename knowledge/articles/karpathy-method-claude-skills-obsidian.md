---
title: "Andrej Karpathy Method: Claude Skills + Obsidian Explained"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2040467358272155648"
author: "polydao"
tags: [obsidian, claude-code, skills, knowledge-management, llm-wiki]
via: "Twitter bookmark from @Mr_Buzzoni"
summary: "Guide to an LLM-maintained markdown wiki: raw sources compiled into linked concept pages in Obsidian, with Claude Skills running the ingest and query loops."
---

## Key Takeaways

- Capture raw sources (articles, papers, repos, transcripts) into a raw/ folder with no organizing step
- An LLM compiles raw/ into a wiki/ of concept pages with backlinks, summaries, and index pages
- Queries answer as files in reports/, and each answer files back into the wiki
- Periodic LLM "lint" passes flag conflicting claims, duplicate pages, unsourced numbers, and missing entity pages
- Claude Code skills (for example /kb-compile and /kb-report) package the loops as reusable workflows
- The Local REST API plugin plus mcp-obsidian lets Claude read and write the vault directly
- The article claims a mature wiki can later become a finetuning corpus; this is unverified

## Links

- [Article](https://x.com/i/article/2040467358272155648)
- [Original Tweet](https://x.com/Mr_Buzzoni/status/2042203352054771748)
