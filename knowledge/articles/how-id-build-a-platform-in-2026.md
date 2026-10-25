---
title: "How I'd build a platform in 2026"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/1840194368029839360"
author: "burcs"
tags: [multi-tenant, platform, security, architecture]
via: "Twitter bookmark from @burcs"
---

X article on designing a multi-tenant platform where users own their slice. Early choices lock you in: tenant isolation, data flow, and where tenants live.

## Key Takeaways

- Host tenant workloads on a separate domain (acme.app, not acme.com) so abuse or phishing cannot taint the main brand
- Browsers treat subdomains as siblings and share cookies; discipline does not scale, so use the Public Suffix List
- Like warming a fresh domain for cold outreach, isolate reputation risk first

## Links

- [Article](https://x.com/i/article/1840194368029839360)
- [Original Tweet](https://x.com/burcs/status/2011542877420294233)
