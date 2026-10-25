---
title: "Inference Engineering (Philip Kiely, Baseten Books) - LLM-readable text"
type: article
date_added: 2026-10-25
source: "https://www.baseten.co/inference-engineering/llms.txt"
author: "Philip Kiely"
tags: [inference, llm, gpu, book]
via: "Twitter bookmark from @philipkiely"
---

Inference Engineering is a book on serving generative AI models in production. Baseten publishes it as Markdown for LLMs: a ~3,000-token llms.txt index linking each chapter and section, and a ~70,000-token llms-full.txt with the whole text. Agents can fetch just the part they need.

## Key Takeaways

- Inference stack has three layers: runtime (single model on GPU), infrastructure (clusters, regions, clouds), tooling.
- Chapters: prerequisites, models, hardware (Hopper to Rubin), software (CUDA, vLLM, SGLang, TensorRT-LLM, Dynamo), techniques (quantization, speculative decoding, caching, parallelism, disaggregation), modalities, production.
- Thesis: open models make inference engineering essential; claimed benefits are lower latency, higher availability and cost at least 80 percent lower at scale.

## Links

- [llms.txt](https://www.baseten.co/inference-engineering/llms.txt)
- [llms-full.txt](https://www.baseten.co/inference-engineering/llms-full.txt)
- [Original Tweet](https://x.com/philipkiely/status/2094545309393424848)
