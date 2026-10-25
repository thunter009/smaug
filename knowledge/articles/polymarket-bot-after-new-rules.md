---
title: "How to build a Polymarket bot (after new rules edition)"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2024859635878871040"
author: "@_dominatos"
tags: [polymarket, trading-bots, market-making]
via: "Twitter bookmark from @_dominatos"
---

Polymarket removed the 500ms taker delay on crypto markets and added taker fees (~1.56% at 50% probability), killing latency-arb taker bots. Makers pay zero fees and earn USDC rebates.

## Key Takeaways

- Be a maker, not a taker; fee curve needs >1.56% edge at 50% odds.
- Use WebSockets, not REST polling; target <100ms cancel/replace cycle.
- Include feeRateBps in signed orders; query /fee-rate per token, never hardcode.
- Rust options: polyfill-rs, polymarket-client-sdk, polymarket-hft; Python: py-clob-client.
- Run on colocated VPS (<5ms), merge YES/NO positions to free capital.

## Links

- [Article](https://x.com/i/article/2024859635878871040)
- [Original Tweet](https://x.com/_dominatos/status/2024871493809680410)
