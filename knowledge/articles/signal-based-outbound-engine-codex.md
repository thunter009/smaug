---
title: "How to Build a Signal-Based Outbound Engine on Codex"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2072649745882075136"
author: "nifinet"
tags: [codex, gtm, outbound, agents, automation]
via: "Twitter bookmark from @MichLieben"
---

Nicolas Finet (Sortlist) ports his signal-based outbound system to OpenAI Codex, so reasoning runs on the existing ChatGPT/Codex plan with no API key. A cron job runs `codex exec` chains each morning and emits a shortlist: who moved, why now, what to say, what happened last time.

## Key Takeaways

- Loop: SENSE -> SCORE -> WRITE -> CHECK -> LOG -> LEARN, six Codex jobs around one shared record.
- `codex exec` takes a file and writes a structured file, giving each step predictable JSON input and output.
- Repo layout: inputs/, schemas/, prompts/, outputs/, logs/, memory/, scripts/. Memory (what to remember) stays separate from outputs (what happened today).
- AGENTS.md holds house rules: no invented facts, every recommendation needs a concrete signal, reject drafts that work without the signal, human approval queue, never send.
- JSON schemas (account, signals) keep prompt drift from breaking downstream steps.
- Sense step should discard weak signals aggressively; boring CSV inputs are fine if evidence is concrete.
- Treat `~/.codex/auth.json` like a password. Data sources (CRM, job boards, funding feeds) still need their own keys.

## Links

- [X Article](https://x.com/i/article/2072649745882075136)
- [Original Tweet](https://x.com/MichLieben/status/2072900698711413071)
