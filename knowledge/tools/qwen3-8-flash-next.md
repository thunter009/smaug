---
title: "Qwen3.8-Flash-Next"
type: tool
date_added: 2026-10-25
source: "https://github.com/QwenLM/Qwen3.8-Flash-Next"
tags: [llm, open-weights, qwen, moe, multimodal]
via: "Twitter bookmark from @itsPaulAi"
---

Open-weight multimodal MoE from Alibaba Qwen and early preview of the Qwen4 architecture. 125B params plus 51B N-gram embeddings, 6B active per token, 262K native context (1M via YaRN). Production Qwen3.8-Flash API priced $0.16/1M input, $0.47/1M output.

## Key Features

- GDN + QSA hybrid attention, gated residual, N-gram embedding, Muon optimizer
- Trained at 1/9 the cost of Qwen3.7-Plus; 62.5 SWE-bench Pro, 58.7 DeepSWE 1.1
- Weights on Hugging Face and ModelScope; tech report in repo

## Links

- Source: https://github.com/QwenLM/Qwen3.8-Flash-Next
- Blog: https://qwen.ai/blog?id=qwen3.8-flash-next
- Tweet: https://x.com/itsPaulAi/status/2092598364970066218
