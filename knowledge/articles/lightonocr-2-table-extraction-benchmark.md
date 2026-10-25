---
title: "Open source LightOnOCR-2 just outscored OpenAI, Anthropic, Alibaba, Mathpix at table extraction"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2037668223835947008"
author: "IgorCarron"
tags: [ocr, table-extraction, benchmark, rag]
via: "Twitter bookmark from @IgorCarron"
---

Summary of an independent benchmark (Offenburg University and University of Mannheim) of 21 PDF parsers on 451 tables, scored by an LLM judge validated against 1,500+ human ratings. LightOn's 1B-parameter LightOnOCR-2 ranked first.

## Key Takeaways

- LightOnOCR-2 scored 9.08/10, ahead of Mathpix (8.53), Qwen3-VL-235B (8.43), GPT-5 mini (7.14) and Claude Sonnet 4.6 (7.02).
- 1B parameters, Apache 2.0, runs on a single GPU, so it deploys on-premise behind a firewall.
- Table errors cause RAG pipelines to hallucinate numbers, so table extraction is a foundational step for enterprise document reasoning.
- Study: "Benchmarking PDF Parsers on Table Extraction with LLM-based Semantic Evaluation" (arxiv 2603.18652).

## Links

- [Original article](https://x.com/i/article/2037668223835947008)
- [Model on Hugging Face](https://huggingface.co/lightonai/LightOnOCR-2-1B)
- [Paper](https://arxiv.org/abs/2603.18652)
- [Original Tweet](https://x.com/IgorCarron/status/2037682114833842629)
