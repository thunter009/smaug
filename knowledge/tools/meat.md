---
title: "meat"
type: tool
date_added: 2026-10-25
source: "https://github.com/boldsoftware/meat"
tags: [code-review, go, agents, diff]
via: "Twitter bookmark from @tqbf"
---

Go CLI that uses a model to abridge a git diff into a "reading diff" so humans review concepts, algorithms, and architecture instead of style, nil-checks, and imports.

## Key Features
- `go install meat.dev/cmd/meat@latest`; takes git-style args to pick commits
- Large diffs split at file/hunk boundaries, abridged per chunk, merged into one output
- Slow; suggested to pre-process via devtools integration
- 2097 stars

## Links
- Repo: https://github.com/boldsoftware/meat
- Tweet: https://x.com/tqbf/status/2084329402079363270
