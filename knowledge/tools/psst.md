---
title: "psst"
type: tool
date_added: 2026-10-25
source: "https://github.com/Michaelliv/psst"
tags: [secrets, security, ai-agents, cli]
via: "Twitter bookmark from @micLivs"
---

AI-native secrets manager where agents use secrets without seeing them. Secrets live in a local encrypted vault and reach the agent only as injected environment variables, with values scrubbed from tool output.

## Key Features

- Stores secrets in a local encrypted vault (keychain-backed)
- Injects secrets as env vars into the agent's bash tool
- Scrubs secret values from all tool output
- Agent sees which secrets exist, never their values
- TypeScript CLI, installable via npm as `psst-cli`

## Links

- Repo: https://github.com/Michaelliv/psst
- Original Tweet: https://x.com/micLivs/status/2041215611330531454
