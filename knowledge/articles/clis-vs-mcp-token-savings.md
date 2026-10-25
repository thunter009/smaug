---
title: "There's a Different Way to Give Claude Tools in 2026"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2027239266280255488"
author: "tomcrawshaw01"
tags: []
via: "Twitter bookmark from @tomcrawshaw01"
---

Argues CLIs beat MCP servers for agent tool access on token cost. MCP loads every tool schema at session start; a CLI loads only names and fetches details on demand via help output.

## Key Takeaways

- Six MCP servers with 14 tools each cost about 15,540 tokens before work starts; a CLI setup starts near 300.
- At first tool call: 15,570 vs 910 tokens (94% gap). At 100 calls: 18,540 vs 1,504.
- Anthropic Tool Search cuts roughly 85% vs raw MCP, but still pulls about 3,530 tokens per retrieved schema vs 910 for a CLI.
- CLIHub converts any MCP server into a CLI; OAuth and the underlying API stay the same.
- CLIs are model-agnostic, so discovery can run on a cheaper model.
- Claims are the author's own numbers, not independently verified.

## Links

- [Original article](https://x.com/i/article/2027239266280255488)
- [CLIHub converter](https://github.com/thellimist/clihub/blob/main/README.md)
- [CLIHub directory](https://clihub.org/)
