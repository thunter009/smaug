---
title: "Redline - Codex reviews inside Claude Code"
type: tool
date_added: 2026-10-25
source: "https://github.com/alexanderatallah/redline"
tags: [claude-code, codex, code-review, plugin, hooks]
via: "Twitter bookmark from @alexatallah"
---

Claude Code plugin that adds automatic code review, adversarial review, and rescue delegation powered by Codex. A Stop hook nudges Claude after each response; Claude decides whether to review, challenge design, delegate, or skip. Works with an OpenAI subscription or OpenRouter.

## Key Features
- `/redline:review` standard review, `/redline:adversarial` design/assumption challenge, `/redline:rescue` delegate to Codex
- Model decides when to act; no hardcoded diff thresholds
- Stop hook is a minimal nudge, suppressed when already responding (no loops)
- OpenRouter routing for GPT, Claude, Gemini, DeepSeek

## Links
- GitHub: https://github.com/alexanderatallah/redline
- Original Tweet: https://x.com/alexatallah/status/2036099891878047994
