---
title: "Building a knowledge operating system with Obsidian and Claude"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2026792639358709763"
author: "Aref (@aref_vc)"
tags: [obsidian, claude, knowledge-graph, pkm, automation]
via: "Twitter bookmark from @aref_vc"
---

Describes a daily-running pipeline where Claude ingests newsletters, research and voice memos in a messy "engine room" workspace, then proposes structured notes into a clean Obsidian vault ("Apollo"). A ~500-line Knowledge Processing Protocol governs note types, frontmatter, links, and when not to create notes. Human reviews and commits; graph compounds over time.

## Key Takeaways

- Two workspaces: raw Claude workspace (messy) vs curated vault; bridged by symlinks into Sources/, one-way flow raw to processed to structured
- AI output must not flow straight into the graph: dilutes signal; Claude proposes, human reviews and commits
- Protocol doc (not a prompt) defines four atomic note types: weekly digests, people, companies, topics (plus book notes), with strict templates and bidirectional links
- Restraint rule: no notes for passing mentions, lists without analysis, or topics without frameworks from the corpus
- Rhythm: 7:15 newsletter digest to Telegram, daily morning report, podcast monitor, evening voice-memo transcription; weekly Sunday digest processing groups insights by theme, not source
- Weaknesses: weekly processing still manual review, topic notes need pruning, voice memos underused, personal notes not processed like newsletters

## Links

- Tweet: https://x.com/aref_vc/status/2026798409672438263
- Article: https://x.com/i/article/2026792639358709763
