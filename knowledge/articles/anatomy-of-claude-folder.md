---
title: "Anatomy of the .claude/ folder"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2034961967149195264"
author: "akshay_pachaar"
tags: [claude-code, claude-md, configuration]
via: "Twitter bookmark from @Argona0x"
---

Guide to the two .claude directories: project-level (committed, shared team rules, commands, permissions) and global ~/.claude (personal preferences, session history, auto-memory). CLAUDE.md is the central instruction file. Argona's quote-tweet adds field results from splitting a bloated CLAUDE.md into scoped files.

## Key Takeaways
- Project .claude/ is team config in git; ~/.claude/ is machine-local
- Keep CLAUDE.md under ~300 lines; adherence drops past that
- Nested per-directory CLAUDE.md files load only when working in that dir
- A rules/ folder gives scoped, modular instructions

## Links
- Article: https://x.com/i/article/2034961967149195264
- Original Tweet: https://x.com/Argona0x/status/2036106517678624820
