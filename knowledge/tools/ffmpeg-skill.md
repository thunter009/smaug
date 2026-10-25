---
title: "ffmpeg-skill"
type: tool
date_added: 2026-10-25
source: "https://github.com/kajisho5/ffmpeg-skill"
tags: [ffmpeg, video, agent-skill, codex, claude-code]
via: "Twitter bookmark from @Voxyz_ai"
---

Free open-source agent Skill that lets Codex or Claude Code edit video locally with FFmpeg. The agent inspects source footage, performs the edit, then verifies duration, dimensions and format of the export. Uses lossless processing where possible. Repo README was empty in the fetched data, so details come from the tweet.

## Key Features

- Prompts like: landscape to 9:16 vertical, cut silent pauses, add subtitles, HDR to SDR, export X-ready version
- Verifies exported file (duration, dimensions, format)
- Local processing, no upload to online editors
- Install: `npx ffmpeg-skill --codex` (Codex) or `npx ffmpeg-skill` (Claude Code); needs FFmpeg, Python, Node

## Links

- [GitHub](https://github.com/kajisho5/ffmpeg-skill)
- [Original Tweet](https://x.com/Voxyz_ai/status/2096576649886339112)
