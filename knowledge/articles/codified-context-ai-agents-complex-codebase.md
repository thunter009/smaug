---
title: "Codified Context: Infrastructure for AI Agents in a Complex Codebase"
type: article
date_added: 2026-10-25
source: "https://arxiv.org/abs/2602.20478"
author: "elvis"
tags: [agents, context-engineering, agents-md, claude-code, memory]
via: "Twitter bookmark from @omarsar0"
---

Paper argues a single AGENTS.md cannot scale past modest codebases and documents a three-tier context system built over 283 sessions on a 108k-line C# distributed system.

## Key Takeaways
- Hot memory: ~660-line constitution, always loaded
- 19 domain-expert agents (~9,300 lines) invoked per task
- Cold memory: 34 spec docs (~16,250 lines) served on demand via an MCP retrieval server
- Scale: 2,801 human prompts, 1,197 agent invocations, 16,522 autonomous turns (~6 per prompt); knowledge-to-code ratio 24.2%
- Nothing designed upfront: each agent/spec codified from a real failure so it never needs re-explaining

## Links
- [Paper](https://arxiv.org/abs/2602.20478)
- [Original Tweet](https://x.com/omarsar0/status/2027770787659464812)
