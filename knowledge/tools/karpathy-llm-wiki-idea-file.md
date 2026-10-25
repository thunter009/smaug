---
title: "karpathy-llm-wiki-idea-file"
type: tool
date_added: 2026-10-25
source: "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f"
tags: [llm, knowledge-base, obsidian, markdown, idea-file]
via: "Twitter bookmark from @karpathy"
---

Andrej Karpathy's idea file for an LLM-maintained personal knowledge wiki. The gist is meant to be given to an agent, which builds a wiki customized to the user. The gist body was not captured in the bookmark data, so this description comes from the linked tweet.

## Key Features

- Share the idea, not the app: the receiving agent builds its own version
- Raw sources are compiled by an LLM into a markdown wiki with summaries, backlinks, and concept articles
- Obsidian serves as the viewer for raw data, the compiled wiki, and generated visuals
- Q&A runs through LLM agents over the wiki, using index files and summaries instead of RAG at roughly 100 articles
- Outputs such as markdown reports, Marp slides, and matplotlib images get filed back into the wiki
- Periodic LLM health checks find inconsistencies, impute missing data, and suggest new articles

## Links

- Gist: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- Tweet: https://x.com/karpathy/status/2040470801506541998
