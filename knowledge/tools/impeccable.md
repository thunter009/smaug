---
title: "Impeccable (design skill/CLI for AI harnesses)"
type: tool
date_added: 2026-04-15
source: "https://impeccable.style/"
tags: [design, claude-code, skills, frontend]
via: "Twitter bookmark from @pbakaus"
---

Impeccable (by Paul Bakaus) is a skill pack that makes AI coding harnesses better at frontend design, formerly called frontend-design. v2 adds a non-LLM anti-pattern detector, a Chrome extension, and a design-brief-first workflow.

## Key Features

- `npx impeccable detect`: scans HTML/CSS/JSX/TSX/Vue/Svelte/CSS-in-JS for 25 anti-patterns without an LLM; CI-ready JSON, live URL scanning via Puppeteer, --fast regex mode.
- Chrome extension with one-click page detection and DevTools panel.
- Upgraded /critique: parallel LLM and detector sub-agents scored against Nielsen's heuristics, with a live browser overlay.
- Anti-attractor procedure: model enumerates and rejects its reflex defaults before choosing, increasing font/color diversity (evaluated on gpt-5.4 and Qwen 3.6 Plus across 15 niches).
- /shape runs a discovery interview producing a design brief; /impeccable craft chains it into implementation.
- Consolidated to 18 commands under one namespace; docs site with per-skill before/after demos.

## Links

- [Site](https://impeccable.style/)
- [Original Tweet](https://x.com/pbakaus/status/2044505743144194514)
