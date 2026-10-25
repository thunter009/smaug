---
title: "qmd"
type: tool
date_added: 2026-10-25
source: "https://github.com/tobi/qmd"
tags: [search, obsidian, embeddings, local-first, agents]
via: "Twitter bookmark from @emigal"
---

Local markdown indexer by Tobi Lutke. Combines BM25 and vector embeddings, with optional LLM reranking, so agents fetch relevant snippets instead of whole files.

## Key Features

- Indexes markdown collections (e.g. Obsidian vaults) locally; no cloud
- `qmd search` (BM25), `qmd vsearch` (semantic), hybrid query with LLM rerank
- Setup: `bun install -g`, `qmd collection add ~/vault --name notes`, `qmd embed`
- Reported ~96% token saving for agent lookups (15k tokens to ~500) on a 600-note vault

## Links

- [GitHub](https://github.com/tobi/qmd)
- [Original Tweet](https://x.com/emigal/status/2015532238591365530)
