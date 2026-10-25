---
title: "camofox-browser"
type: tool
date_added: 2026-10-25
source: "https://github.com/jo-inc/camofox-browser"
tags: [browser-automation, anti-bot, ai-agents, scraping, firefox]
via: "Twitter bookmark from @leftcurvedev_"
---

Anti-detection browser server for AI agents, built on Camoufox, a Firefox fork with fingerprint spoofing at the C++ level. It wraps the browser in a REST API with accessibility snapshots and element refs. The repo is JavaScript with about 11.9k GitHub stars.

## Key Features

- C++-level fingerprint spoofing (hardware concurrency, WebGL, AudioContext, screen geometry, WebRTC) applied before page JS runs
- Accessibility snapshots about 90% smaller than raw HTML, with stable element refs (e1, e2, ...) for clicking
- Lazy browser launch with idle shutdown; about 40MB resident when idle
- Session isolation, cookie import, proxy and GeoIP locale routing
- Search macros for common sites, YouTube transcript extraction via yt-dlp, and structured extract with JSON Schema
- Deploys with Docker, Fly.io, or Railway; OpenAPI docs at /docs

## Links

- GitHub: https://github.com/jo-inc/camofox-browser
- Original Tweet: https://x.com/leftcurvedev_/status/2042285416624128456
