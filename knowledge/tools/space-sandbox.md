---
title: "SPACE (Perplexity sandbox)"
type: tool
date_added: 2026-10-25
source: "https://github.com/perplexityai/SPACE"
tags: [sandbox, agents, security, firecracker, rust]
via: "Twitter bookmark from @ethanwalkerman"
---

Perplexity's open-sourced (Apache 2.0) sandbox platform that runs every task in Perplexity Computer. Each agent task gets its own Firecracker microVM, and credentials and outbound traffic are controlled from outside the VM.

## Key Features

- Rust + Firecracker microVM per session; Perplexity reports 0 host escapes across 108 intentional breach attempts
- Credentials managed outside the VM instead of passed as env vars
- Differential snapshots to branch environments or roll back after a mistake
- Drop-in E2B-compatible API wrapper
- Claimed 3-5x faster sandbox creation vs the prior commercial provider; self-hosted cost ~$0.03-$0.05/hr (2vCPU/2GB) per the bookmarking tweet (unverified)
