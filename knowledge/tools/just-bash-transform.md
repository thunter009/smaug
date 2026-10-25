---
title: just-bash AST transform (vercel-labs)
type: tool
date_added: 2026-10-25
source: https://github.com/vercel-labs/just-bash/blob/main/src/transform/README.md
tags: [agents, shell, ast, vercel]
via: "Twitter bookmark from @cramforce"
---

Transform module in vercel-labs/just-bash that parses shell scripts to an AST and re-serializes them without running them, with hooks for custom AST transformers (Babel/Acorn-style).

## Key Features

- Parse and re-serialize shell scripts without execution
- Plug in AST transformers or information extractors
- Built-in transformer: tee every command's output to a file so agents can re-read output without rerunning
- Built-in extractor: reliable list of commands in a script for permission prompts

## Links

- [GitHub](https://github.com/vercel-labs/just-bash/blob/main/src/transform/README.md)
- [Original Tweet](https://x.com/cramforce/status/2022778424784490944)
