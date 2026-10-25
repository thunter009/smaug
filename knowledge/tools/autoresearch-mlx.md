---
title: "autoresearch-mlx"
type: tool
date_added: 2026-10-25
source: "https://github.com/trevin-creator/autoresearch-mlx"
tags: [autoresearch, mlx, apple-silicon]
via: "Twitter bookmark from @TrevinPeterson"
---

Apple Silicon (MLX) port of Karpathy's autoresearch: one mutable train.py, one val_bpb metric, fixed 5-minute training budget, keep-or-revert via git. No PyTorch or CUDA needed.

## Key Features

- Runs natively on Apple Silicon via MLX; needs Python 3.10+ and uv
- Author's loop found depth=4 beat depth=8 on an M4 Max (more optimizer steps beat more parameters)
- Keeps the program.md-driven autonomous loop from the original

## Links

- [GitHub](https://github.com/trevin-creator/autoresearch-mlx)
