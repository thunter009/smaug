---
title: "24/7 AI Agent on a Mac Mini: Hermes Agent, 18 Cron Jobs, $21/month"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2037203341533450241"
author: "witcheer"
tags: [hermes-agent, mac-mini, cron, agents, self-hosted]
via: "Twitter bookmark from @witcheer"
---

Two-month field report on a Mac Mini M4 (16GB) running an always-on agent. Hermes Agent (Nous Research, Python) is the backbone, with a Telegram bot interface, run as a launchd service.

## Key Takeaways

- 18 scheduled jobs over 24h searched the web, read Hacker News/Reddit, ran shell scripts against 8 APIs, wrote memory files and drafted Telegram content scored against voice rules.
- Stack: 35 scripts, 6 custom skills, ~6.6GB of local LLM models, total cost about $21/month, no cloud server or GPU.
- An "ALIVE" structured context system makes each day's research build on earlier runs.
- Voice feedback loop teaches the agent the author's writing style.
- Guide covers hardware, framework, model stack, cron, scripts, skills, lessons and a minimal setup.

## Links

- [Article](https://x.com/i/article/2037203341533450241)
- [Original Tweet](https://x.com/witcheer/status/2037530350763524482)
