---
title: "(Re)introducing CleanYourTV"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2112174627925705109"
tags: [android-tv, claude-code, debloat, open-source]
via: "Twitter bookmark from @NewOrleansVC"
---

# (Re)introducing CleanYourTV

X article on a Claude Code prompt that debloats any Android TV or Google TV over Wi-Fi (adb) and gives it an Apple TV-style home. Started as a fix for the author's parents' ad-laden TV; grew into a community project in two days.

## Key Takeaways
- Core is one markdown prompt pasted into Claude Code; it asks what apps you use, backs up, finds junk per model
- Rules: no root, nothing uninstalled (only disabled), one-line restore
- 30 TVs across 16 brands, projectors, Fire TV, 8 languages, 45k repo visitors, 36 merged PRs
- 250 KB offline launcher built for 1 GB sets, themes via config.json, module cards
- Pure-Python adb alternative (tools/tv.py) for macOS adb blocking
- Setup: enable USB debugging, paste prompt from cleanyour.tv, give TV model, ~15 minutes

## Links
- Site: https://cleanyour.tv
- Repo: https://github.com/Gathin23/cleanyourtv
