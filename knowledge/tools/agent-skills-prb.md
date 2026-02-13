---
title: "agent-skills (PRB)"
type: tool
date_added: 2026-02-12
source: "https://github.com/PaulRBerg/agent-skills"
tags: [agent-skills, ai-agents, claude-code, workflow-automation]
via: "Twitter bookmark from @PaulRBerg"
---

Paul Razvan Berg's personal collection of AI agent skills, optimized for Claude Code and Codex. Includes skills for code review, git commits, dependency management, CLI guidance, and workflow automation.

## Key Features

- **Code Quality**: biome-js (linting), code-polish (combined review/simplification), code-review, code-simplify
- **Git Operations**: commit (conventional commits), bump-release (changelog + tagging)
- **CLI Guidance**: cli-cast (Foundry), cli-gh (GitHub), cli-just (Just), cli-sentry
- **Documentation**: md-docs (Markdown management)
- **Developer Tools**: bump-deps (Node.js), ls-lint (dir/file linting), yeet (GitHub contributions)
- **Advanced**: delayed-command, oracle-codex (planning), refine-prompt, work (end-to-end tasks)

## Skill Configuration Patterns

**Invocation Control:**
- `user-invocable: true` (default) → shows in `/` menu
- `disable-model-invocation: true` → prevents Claude auto-load, user-triggered only (for side-effect workflows like deploy/commit)

**Execution Context:**
- Default: runs inline in current conversation
- `context: fork` → isolated subagent (no conversation history)
  - `agent: general-purpose` (default) → full read/write
  - `agent: Explore` → read-only codebase exploration
  - `agent: Plan` → read-only implementation planning

## Links

- [GitHub](https://github.com/PaulRBerg/agent-skills)
- [Original Tweet](https://x.com/PaulRBerg/status/2021948480000802818)
- [Skills Issues](https://github.com/vercel-labs/skills/issues)
- [Skills Ecosystem](https://vercel.com/changelog/introducing-skills-the-open-agent-skills-ecosystem)
