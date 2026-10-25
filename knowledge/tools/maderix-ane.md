---
title: "maderix/ANE - Neural network training on Apple Neural Engine"
type: tool
date_added: 2026-10-25
source: "https://github.com/maderix/ANE"
tags: [apple, neural-engine, training, on-device-ml]
via: "Twitter bookmark from @BrianRoemmele"
---

Open-source project claiming full transformer training, including backpropagation, directly on the Apple Neural Engine without CoreML, Metal, or GPU. GitHub metadata was empty at capture; details below come from the bookmarking tweet and are unverified.

## Key Features

- Single transformer layer (dim=768, seq=512) at about 9.3 ms/step, 1.78 TFLOPS sustained (tweet claim)
- Reported 11.2% ANE utilization on an M4 chip
- No CoreML, Metal, or GPU dependency
- Claimed efficiency far above A100 per watt (promotional claim, unverified)
- Currently single-layer scope; full models not yet shown

## Links

- [Repo](https://github.com/maderix/ANE)
- [Tweet](https://x.com/BrianRoemmele/status/2028524908779802736)
