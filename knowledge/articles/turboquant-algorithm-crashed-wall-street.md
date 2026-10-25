---
title: "The algorithm that crashed Wall Street (TurboQuant)"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2037798771753439232"
author: "k1rallik"
tags: [llm, kv-cache, quantization, google-research]
via: "Twitter bookmark from @k1rallik"
---

Explainer on Google Research's TurboQuant, which compresses the KV cache from 16 to 3 bits (about 6x less memory) with no reported accuracy loss, and the memory-stock selloff that followed.

## Key Takeaways

- Two stages: PolarQuant (rotation, no calibration) and QJL (one sign bit to remove bias).
- Claimed: 6x memory cut, up to 8x faster attention logits on H100; tested only up to about 8B models.
- Community reimplemented it in Triton, MLX and llama.cpp within 24 hours; naive QJL without bias correction gives garbage.
- Near the Shannon limit, so further gains need new architectures, not compression.
- Jevons paradox argument: cheaper memory use likely raises total demand.

## Links

- Source: https://x.com/i/article/2037798771753439232
- [Original Tweet](https://x.com/k1rallik/status/2037868113480319321)
