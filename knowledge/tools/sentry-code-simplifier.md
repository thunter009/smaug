---
title: "Sentry code-simplifier agent"
type: tool
date_added: 2026-10-25
source: "https://github.com/getsentry/skills/blob/main/plugins/sentry-skills/agents/code-simplifier.md"
tags: [claude-code, agent-skills, code-quality, sentry]
via: "Twitter bookmark from @camsoft2000"
---

Code-simplifier agent and skill from Sentry's `getsentry/skills` repo. It refines code for clarity, consistency and maintainability while preserving all functionality. Installs as a Claude Code plugin or via `npx skills add getsentry/skills`.

## Key Features

- Simplifies and refines code without changing behavior; counters AI-generated slop
- Ships as a Claude Code plugin (`claude plugin marketplace add getsentry/skills`, `claude plugin install sentry-skills@sentry-skills`)
- Also installable via skills.sh for Cursor, Cline, Copilot and other agents
- Part of a wider Sentry skills set: agents-md, code-review, commit, create-branch, find-bugs, claude-settings-audit, Django reviews

## Links

- GitHub: https://github.com/getsentry/skills/blob/main/plugins/sentry-skills/agents/code-simplifier.md
- Original Tweet: https://x.com/camsoft2000/status/2022263090792820964
