---
title: "karpathy/autoresearch"
type: tool
date_added: 2026-10-25
source: "https://github.com/karpathy/autoresearch"
tags: [ai-agents, llm-training, autonomous-research]
via: "Twitter bookmark from @karpathy"
---

Minimal single-GPU, one-file (~630 lines) LLM training setup derived from nanochat. An AI agent edits the training code autonomously overnight while the human iterates only on `program.md`.

## Key Features

- Agent edits only `train.py` (model, Muon + AdamW optimizer, hyperparameters); human edits `program.md`.
- Fixed 5-minute wall-clock training budget per run, about 12 experiments/hour, so runs are comparable.
- Metric is val_bpb (validation bits per byte), vocab-size independent.
- Agent works in a loop on a git feature branch, committing improvements.
- Requires one NVIDIA GPU (tested on H100), Python 3.10+, uv.

## Links

- [Repo](https://github.com/karpathy/autoresearch)
- [Tweet](https://x.com/karpathy/status/2030371219518931079)
