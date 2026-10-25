---
title: "FrankenOverlap"
type: tool
date_added: 2026-10-25
source: "https://github.com/Dicklesworthstone/franken_overlap"
tags: [rust, text-processing, provenance, search, ai-coding]
via: "Twitter bookmark from @doodlestein"
---

Safe-Rust library and CLIs for explainable textual provenance: finds where a passage came from after formatting changes, substitutions, insertions, deletions, OCR corruption, fragmentation or reordering.
Uses rare-feature positional retrieval, anchor chaining and exact verification instead of scanning every corpus window with edit distance.
Bookmarked because Jeffrey Emanuel says it was built 100% via GPT Pro in the ChatGPT web app with the GitHub connector (125 commits in a day), a usage-limit workaround for building real projects.

## Key Features

- Edit-tolerant approximate alignment and edited-passage retrieval
- Fielded BM25, phrase and proximity search, lexical/overlap fusion, incremental indexes
- Real-corpus benchmarking (Gutenberg, SEC 10-K), learned reranking, evidence-gated deployment
- No C/C++/Python/BLAS/GPU runtime deps; Linux x86_64 release binaries (`fo`, `fo-corpus`, `fo-section`, `fo-sec-fetch`)
- Status per README: promising, not yet benchmark-proven on real corpora (as of 2026-08-15)

## Links

- [GitHub](https://github.com/Dicklesworthstone/franken_overlap)
- [Original Tweet](https://x.com/doodlestein/status/2088636008803819646)
