---
title: "Your .claude/ Folder Is a Production Agent"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2044386628676866048"
author: "Pawel Huryn (PawelHuryn)"
tags: [claude-code, agent-sdk, claude-md, skills, mcp]
via: "Twitter bookmark from @PawelHuryn"
---
Argues the same .claude/ folder used in Claude Code dev (CLAUDE.md, skills, MCPs, hooks, sub-agents) deploys unchanged as a production agent called from inside an app.

## Key Takeaways
- Pattern: agent as callable component; web app handles routing/auth/CRUD, calls the agent only when reasoning is needed
- Five primitives: CLAUDE.md, skills, MCPs, hooks, sub-agents (each a self-contained folder)
- No dev-to-prod translation layer; everything is files, version-controlled, diffable in PR
- Author shipped a working knowledge chatbot in an afternoon with the Agent SDK

## Links
- Article: https://x.com/i/article/2044386628676866048
- Original Tweet: https://x.com/PawelHuryn/status/2044393804023660939
