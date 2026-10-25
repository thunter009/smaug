---
title: "Plano"
type: tool
date_added: 2026-10-25
source: "https://github.com/katanemo/plano"
tags: [ai-gateway, llm-proxy, agent-safety, openclaw, rust]
via: "Twitter bookmark from @_avichawla"
---

Plano is an AI-native proxy server and data plane for agentic apps. It handles agent routing and orchestration, guardrails, observability, and smart LLM routing outside your agent code. Written in Rust, ~7k GitHub stars.

## Key Features

- Filter chains: small HTTP services that inspect each request; 200 passes, 4xx blocks before the model sees it, 5xx surfaces failure
- `input_filters` (content blocking, validation, PII redaction such as swapping emails/SSNs for placeholders) and `output_filters` (restore placeholders, block policy-violating responses, per-chunk on streams)
- Safety logic lives in the proxy, not the context window, so compaction cannot drop it (motivating case: Meta's Summer Yue OpenClaw inbox deletion)
- Smart LLM routing for model agility; works with any language or framework
- 100% local setup possible

## Links

- GitHub: https://github.com/katanemo/plano
- Docs: https://docs.planoai.dev
- Original Tweet: https://x.com/_avichawla/status/2036911023706566768
