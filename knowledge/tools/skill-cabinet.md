---
title: "Skill Cabinet"
type: tool
date_added: 2026-10-25
source: "https://github.com/subsy/skill-cabinet"
tags: [agent-skills, cli, cleanup, claude-code]
via: "Twitter bookmark from @theplgeek"
---

Local catalog app for agent skills installed on your machine. `npx skill-cabinet` starts a localhost server (port 3781) that scans `.agents`, `.claude`, `.codex`, `.cursor`, Hermes and other `~/.*/skills` drawers.

## Key Takeaways
- Read each skill body, frontmatter and extra files; filter by drawer, form, risk, invocation.
- Detects identical copies, symlinks/virtual references, broken links, static risk in skill body.
- Quarantine (reversible, `~/.skill-cabinet/quarantine`) vs delete (no undo; symlink unlinked, target kept).
- Requires Node 20+; 429 stars.

## Links
- [Repo](https://github.com/subsy/skill-cabinet)
- [Tweet](https://x.com/theplgeek/status/2094426831524888709)
