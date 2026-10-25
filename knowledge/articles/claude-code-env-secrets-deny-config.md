---
title: "The .env Setup That Keeps Claude Code From Leaking Your Secrets"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2049760065427574784"
author: "@zodchiii"
tags: [claude-code, security, secrets, settings]
via: "Twitter bookmark from @zodchiii"
summary: "CLAUDE.md rules are advisory; only settings.json permissions.deny blocks Claude Code from reading .env and credential files. Covers three leak paths plus mitigations."
---
Claude Code can read .env files and echo them into conversation context; CLAUDE.md prohibitions are only suggestions.

## Key Takeaways
- Enforce with `permissions.deny` in ~/.claude/settings.json: Read/Write on `**/.env*`, `*.pem`, `*.key`, `.aws`, `.ssh`, `secrets/**`, `.npmrc`, `.pypirc`
- Three leak paths: direct file read, runtime output capture (logged auth headers, connection strings), grep hits on config files; deny rules only cover the first
- Use .env.test with dummy values so test output leaks nothing real
- Add a git pre-commit hook scanning for key patterns (sk-ant-, sk_live_, ghp_, AKIA, xox*, private keys)
- Strongest option: run in a container with /dev/null mounted over .env

## Links
- [Article](https://x.com/i/article/2049760065427574784)
- [Tweet](https://x.com/zodchiii/status/2049779422291460576)
