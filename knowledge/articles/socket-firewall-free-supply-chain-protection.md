---
title: "Introducing Socket Firewall: Free, Proactive Protection for Your Software Supply Chain"
type: article
date_added: 2026-10-25
source: "https://socket.dev/blog/introducing-socket-firewall"
author: "Dale Bustad"
tags: [security, supply-chain, npm, malware]
via: "Twitter bookmark from @feross"
---

Socket Firewall (`sfw`) is a free tool that blocks malicious packages at install time. It wraps package managers so supply chain attacks are caught before code lands on disk.

## Key Takeaways

- Install with `npm i -g sfw`; prefix installs: `sfw npm install`, `sfw pnpm install`, `sfw yarn install`, `sfw cargo fetch`, `sfw uv pip install`.
- No sign up, free forever.
- Proactive blocking at install time, not post-hoc scanning.
- Context: Feross flagged a live axios@1.14.1 compromise (plain-crypto-js dropper) the day before.

## Links

- [Source](https://socket.dev/blog/introducing-socket-firewall)
- [Original Tweet](https://x.com/feross/status/2039002182817833144)
