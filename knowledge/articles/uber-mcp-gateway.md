---
title: "Designing Uber's MCP Gateway"
type: article
date_added: 2026-10-25
source: "https://www.uber.com/gb/en/blog/designing-mcp-gateway/"
tags: [mcp, gateway, security, enterprise, architecture]
via: "Twitter bookmark from @stretchcloud"
---

Uber's MCP gateway fronts 800+ MCP servers and 5,000+ tools, mostly auto-generated from existing services. Commentary from @stretchcloud: copying it is hard because it sits on top of a service mesh, IDL registry and standardized APIs most teams lack.

## Key Takeaways

- Control plane (registry for discovery/ownership) plus data plane (proxy translating MCP to HTTP, gRPC, TChannel)
- Scheduled crawler detects services/schema changes, uses an LLM to write agent-friendly tool descriptions, auto-registers them
- Secure by default: servers disabled until the owning team enables; tool description changes need owner-approved diff
- Attribute-based access control per tool for humans, services and agents; PII redacted by default
- Reuse existing APIs; Code Mode reduces context/token cost; buy a gateway unless you are Uber

## Links

- Source: https://www.uber.com/gb/en/blog/designing-mcp-gateway/
- Original tweet: https://x.com/stretchcloud/status/2109352834802258326
