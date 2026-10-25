---
title: "stonex-mcp"
type: tool
date_added: 2026-10-25
source: "https://github.com/anaisbetts/stonex-mcp"
tags: [mcp, typescript, finance, api-reverse-engineering]
via: "Twitter bookmark from @anaisbetts"
---

Typed TypeScript client plus MCP server for the StoneX brokerage REST API, built by reverse-engineering the web app's network calls. Auth uses an exported browser cookies.txt.

## Key Features
- Endpoints: accounts, balances, summary, positions, activity, performance, projected income, documents
- Bearer JWT minted from session cookies, cached on disk
- Example of the DevTools "Keep Log" trick for making APIs/MCP servers for any site

## Links
- Repo: https://github.com/anaisbetts/stonex-mcp
- Tweet: https://x.com/anaisbetts/status/2084309430854664644
