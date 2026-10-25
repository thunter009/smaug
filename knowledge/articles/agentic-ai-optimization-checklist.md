---
title: "Agentic AI Optimization: Implementation Checklist"
type: article
date_added: 2026-10-25
source: "https://joelclaw.com/aaio-implementation-checklist"
author: "Joel Hooks"
tags: [aaio, agents, seo, llms-txt]
via: "Twitter bookmark from @joelhooks"
---

Implementation-first checklist for making a website crawlable, citable, and usable by AI agents. The page itself demonstrates the pattern: agent navigation prompt, markdown sitemap, JSON API discovery, per-slug .md content, llms.txt, all via Accept-header content negotiation.

## Key Takeaways
- Serve /sitemap.md, /{slug}.md, /llms.txt with correct Content-Type
- Expose /api with search and docs endpoints for agents
- Verify Content-Type to detect HTML fallbacks
- Add schema.org JSON-LD metadata

## Links
- Article: https://joelclaw.com/aaio-implementation-checklist
- Original Tweet: https://x.com/joelhooks/status/2036497936536969454
