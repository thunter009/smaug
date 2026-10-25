---
title: "The best tools I give Codex are bespoke CLIs"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2042694217663979520"
author: "@nickbaumann_"
tags: [codex, cli, agents, skills, tooling]
via: "Twitter bookmark from @nickbaumann_"
---

Nick Baumann argues that connectors and MCP servers give agents access, but small purpose-built CLIs give them leverage. A command with flags, stable JSON, predictable errors and a help screen lets Codex search, narrow, pipe, write big results to files and compose the next command. He wraps each CLI in a skill that says which commands to run first, how much output to pull, and which actions need approval.

## Key Takeaways

- Use connectors for access; add a CLI when source output is too big, noisy or awkward to hand to the agent raw
- `codex-threads`: local searchable index of ~/.codex/sessions with sync, messages search, threads resolve/read, events read; used to turn good past threads into skills
- `slack-cli`: search, resolve-permalink, read-thread and context commands over the approved Codex apps gateway (same access model, not a permissions workaround)
- `typefully-cli`: small Rust binary built by Codex from API docs; its skill defaults to drafts and never publishes, schedules, deletes or overwrites without explicit ask
- Playbook: have Codex build the CLI, then wrap it in a skill; see OpenAI's agent-friendly-clis use case and the `cli-creator` curated skill

## Links

- Article: https://x.com/i/article/2042694217663979520
- Playbook: https://developers.openai.com/codex/use-cases/agent-friendly-clis
- cli-creator skill: https://github.com/openai/skills/tree/main/skills/.curated/cli-creator
- Original Tweet: https://x.com/nickbaumann_/status/2042705384306336083
