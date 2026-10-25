---
title: "Model effort in Claude Code: knowing more vs. trying harder"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2074606120292020224"
author: "@ClaudeDevs"
tags: [claude-code, effort, model-selection, tokens]
via: "Twitter bookmark from @ClaudeDevs"
---

Anthropic explainer on Claude Code's two quality knobs. Model sets which frozen weights answer (how much it knows). Effort sets how much work Claude does overall: thinking, files read, verification, how far it pushes before checking in.

## Key Takeaways

- Weights are read-only at inference. Prompt/CLAUDE.md steer one request but teach the model nothing.
- Effort is an input the model was trained to respond to. It sets how thorough and certain Claude must be before calling a task done. It does not pad simple tasks.
- Use the default effort for most work. Treat override as a general preference, not a per-task call.
- When Claude errs, fix context first (vague prompt, missing tools/skills), then ask: did it not try hard enough (raise effort) or not know enough (bigger model)?
- Larger model for subtle bugs, unfamiliar domains, architecture. Smaller model for routine, precisely describable edits.
- Analogy: Fable = specialist, Opus = expert, Sonnet = strong generalist. Effort = time each gets.
- Effort shapes token use but does not cap it. Only max_tokens hard-caps; task budgets are advisory.
- Opus 4.8 default effort beats Opus 4.7 default at about the same tokens.

## Links

- [Original post](https://x.com/ClaudeDevs/status/2074900291062034618)
