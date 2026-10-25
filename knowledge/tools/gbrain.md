---
title: "GBrain"
type: tool
date_added: 2026-10-25
source: "https://github.com/garrytan/gbrain"
tags: [agents, memory, mcp, knowledge-graph, openclaw, hermes]
via: "Twitter bookmark from @garrytan"
---

Garry Tan's opinionated memory layer for AI agents (OpenClaw, Hermes, Codex, Claude Code). Stores explicit facts with sources, supports corrections and withdrawal, and shares one memory across agents. TypeScript, MIT, ~31k stars. It is the production brain behind his own deployments (README claims 155,795 pages, 24,589 people, 5,340 companies, 66 cron jobs).

## Key Features

- Keyless start with keyword retrieval; optional semantic search, synthesis and background enrichment
- Synthesis layer: cited answers plus explicit gap analysis of what the brain does not know
- Typed knowledge graph with breadth-first walks; README cites BrainBench relationship P@5 0.3421 vs 0.1917 for plain hybrid
- Memory skills ship in the brain's content root; agents join an authorized catalog
- `gbrain mcp expose` publishes the brain over MCP on a Tailscale tailnet (`--funnel` for cloud agents)
- Hosted option at gbrain.io; company-brain mode with source/operation grants (README warns local files and shared DB credentials are a different trust boundary)

## Links

- [GitHub](https://github.com/garrytan/gbrain)
- [Original Tweet](https://x.com/garrytan/status/2042497872114090069)
