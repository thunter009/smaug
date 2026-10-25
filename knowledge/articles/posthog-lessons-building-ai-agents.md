---
title: "What we wish we knew about building AI agents"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2036844708643667968"
author: "PostHog"
tags: [ai-agents, mcp, harness]
via: "Twitter bookmark from @posthog"
---
PostHog shares lessons from two years building PostHog AI (relaunched November last year) and three harness iterations.

## Key Takeaways
- Consider an MCP server before a custom agent; 34% of AI-created dashboards come via their MCP server
- For predictable flows, start with a hardcoded workflow with LLM steps; build an agent only once users demand more use cases
- The harness is not a moat; use existing SDKs (Anthropic Agent SDK) and make MCP the canonical interface
- Their first coordinator-plus-sub-agents harness created a black-box problem

## Links
- [Article](https://x.com/i/article/2036844708643667968)
- [Original Tweet](https://x.com/posthog/status/2036847339466301918)
