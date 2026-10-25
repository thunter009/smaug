---
title: "Claude Code Devcontainer (Trail of Bits)"
type: tool
date_added: 2026-10-25
source: "https://github.com/trailofbits/claude-code-devcontainer"
tags: [claude-code, security, devcontainer, sandboxing]
via: "Twitter bookmark from @Axel_bitblaze69"
---

Trail of Bits devcontainer setup that runs Claude Code inside an isolated container, so the agent cannot reach the host's SSH keys, cloud credentials or .env files. Intended for working in untrusted repos.

## Key Features

- Installs via `@devcontainers/cli` and an `install.sh self-install` script
- `devc .` starts the container, `devc shell` opens a shell, then `claude` runs inside it
- Full filesystem isolation from the host; level 3 of a three-tier Claude Code lockdown (settings.json deny rules, Trail of Bits skills plugin, container)
- Pairs with `/sandbox` and deny rules for Read(~/.ssh/**), Read(~/.aws/**), Read(*.env)

## Links

- GitHub: https://github.com/trailofbits/claude-code-devcontainer
- Original Tweet: https://x.com/Axel_bitblaze69/status/2042704945200402649
