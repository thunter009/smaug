---
title: "Agent Mode in the DuckDB CLI"
type: article
date_added: 2026-10-25
source: "https://duckdb.org/2026/10/09/agent-mode"
tags: [duckdb, agents, cli, tokens]
via: "Twitter bookmark from @duckdb"
---

DuckDB v2.0 CLI detects AI coding agents and changes its output to get correct results faster with fewer tokens. (Summary from the tweet; blog body not extracted.)

## Key Takeaways
- Prints compact Markdown tables instead of padded boxes.
- States clearly when a result was truncated.
- Stops runaway queries early.
- Reports errors as JSON.
- Long queries announce expected cost up front so the agent can decide whether to wait.

## Links
- Source: https://duckdb.org/2026/10/09/agent-mode
- Tweet: https://x.com/duckdb/status/2108718894395621644
