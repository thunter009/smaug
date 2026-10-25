---
title: "Grep Is Dead: How I Made Claude Code Actually Remember Things"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2028328572272742401"
author: "Artem Zhutov (@ArtemXTech)"
tags: [claude-code, memory, qmd, obsidian, semantic-search]
via: "Twitter bookmark from @ArtemXTech"
---

Artem plugs QMD (Tobi Lutke's local search engine) into his Obsidian vault and Claude Code session exports so each new session starts with recalled context instead of from zero. A /recall skill offers temporal, topic (BM25), and graph modes. Claims QMD is instant and cheaper than Claude's brute-force Haiku-subagent grep, which took 3 minutes for 300 mediocre files.

## Key Takeaways

- QMD modes: BM25 (`qmd search`, deterministic, ~80% of searches), semantic (`qmd vsearch`, finds meaning without keyword overlap), hybrid (`qmd query`, best ranking)
- One QMD collection per vault folder (notes, daily, sessions, transcripts) for focused search
- Claude Code sessions are JSONL; parse to clean markdown of user messages and embed into QMD via an end-of-session hook, keeping the index fresh
- /recall: temporal (`/recall yesterday` rebuilt 39 sessions), topic, and graph visualization of sessions and files
- Semantic search over daily notes surfaced forgotten ideas never acted on and patterns (happiest days = shipping plus good sleep)
- Everything is local; skill works across Claude Code, Codex, Gemini CLI; vault synced to an always-on Mac Mini running OpenClaw

## Links

- [Article](https://x.com/i/article/2028328572272742401)
- [QMD](https://github.com/tobi/qmd)
- [Video walkthrough](https://youtu.be/RDoTY4_xh0s)
- [Original Tweet](https://x.com/ArtemXTech/status/2028330693659332615)
