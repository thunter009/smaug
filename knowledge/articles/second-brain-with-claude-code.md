---
title: "Creating a Second Brain with Claude Code"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2044203095429918721"
author: "Ryan Wiggins (rywiggs)"
tags: [claude-code, second-brain, qmd, hooks, memory]
via: "Twitter bookmark from @rywiggs"
---
Mercury VP Product describes a local "second brain": 15k docs / 3.5M words indexed with QMD, injected into prompts via hooks, with self-updating memory.

## Key Takeaways
- Prep (1-2h): export all work docs to a raw-data folder, index with QMD (vector + BM25)
- Train (2h): me.md self-description, agent-team "distill" into context.md, tool connectors/skills (Linear, Notion, Metabase, Docs)
- Wire (<1h): UserPromptSubmit hook runs QMD search and injects relevant context into every prompt
- Learn: per-session /learn skill, daily/weekly cron briefs, monthly interview with Claude
- Claimed result: 2x productivity, near-instant recall, no meeting prep

## Links
- Article: https://x.com/i/article/2044203095429918721
- Original Tweet: https://x.com/rywiggs/status/2044448092477661638
