---
title: "How We Built Secure, Scalable Agent Sandbox Infrastructure"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2027215713476460544"
author: "Larsen Cundric (@larsencc)"
tags: [agents, sandbox, infrastructure, security, unikraft]
via: "Twitter bookmark from @larsencc"
---

Browser Use describes moving from AWS Lambda browser agents to running the entire agent inside a Unikraft micro-VM that holds zero secrets and talks to the world only through a credentialed control plane.

## Key Takeaways

- Two patterns: isolate the tool (agent stays on backend) vs isolate the agent (whole agent in sandbox). They moved to the second.
- Sandbox receives only SESSION_TOKEN, CONTROL_PLANE_URL, SESSION_ID; no AWS keys or DB credentials.
- Same container image runs on Unikraft micro-VMs (prod, sub-second boot, scale-to-zero) and Docker (dev/evals), switched by a config flag.
- Hardening: compile to .pyc and delete sources, drop root privileges via setuid/setgid, strip os.environ after reading the three vars.
- Control plane (FastAPI, stateless) proxies LLM calls, owns conversation history, enforces cost caps, and issues scoped presigned S3 URLs for file sync.
- A Gateway protocol (ControlPlaneGateway vs DirectGateway) hides the backend from agent code.
- Tradeoff: extra network hop and three services instead of one; latency is noise next to LLM response times.
- Key line: the agent should have nothing worth stealing and nothing worth preserving.

## Links

- [Article](https://x.com/i/article/2027215713476460544)
- [Original Tweet](https://x.com/larsencc/status/2027225210412470668)
