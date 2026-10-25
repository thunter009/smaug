---
title: "How to Wrap Claude CLI for Your Agentic Apps"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2009497314013138947"
author: "danialhasan"
tags: [claude-code, cli, agents, headless]
via: "Twitter bookmark from @danialhasan"
---

Guide to using `claude -p` (print mode) as a primitive for agentic apps, covering input/output formats, permissions, tools, models, and structured output.

## Key Takeaways
- Stream-json output requires `--verbose`; stream input requires stream output
- `--json-schema` returns results in a separate `structured_output` field
- `--fallback-model` gives auto-fallback when the primary model is overloaded
- `--strict-mcp-config` stops MCP tools loading by default
- `bypassPermissions` needs guardrails
- Avoid dynamic timestamps in prompts to keep the KV cache warm and cost low
- Includes bash and TypeScript wrapper examples for extraction tasks

## Links
- [Article](https://x.com/i/article/2009497314013138947)
- [Original Tweet](https://x.com/danialhasan/status/2009529865511555506)
