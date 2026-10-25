---
title: "miolini/autoresearch-macos"
type: tool
date_added: 2026-10-25
source: "https://github.com/miolini/autoresearch-macos"
tags: [ai-agents, llm-training, macos, metal]
via: "Twitter bookmark from @miolini"
---

Fork of Karpathy's autoresearch that runs on Apple Silicon (Metal/MPS) and CPU while keeping NVIDIA support.

## Key Features

- Drops hardcoded FlashAttention-3; falls back to PyTorch SDPA with manual sliding-window causal masking.
- MPS-specific tweaks: disables unsupported `torch.compile` paths, smaller batch sizes for Metal memory, careful optimizer-state casting.
- Same loop: agent edits `train.py`, human edits `program.md`, 5-minute fixed runs.

## Links

- [Repo](https://github.com/miolini/autoresearch-macos)
- [Upstream](https://github.com/karpathy/autoresearch)
- [Tweet](https://x.com/miolini/status/2030402705374728218)
