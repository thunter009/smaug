---
title: "SecureClaw"
type: tool
date_added: 2026-10-25
source: "https://github.com/adversa-ai/secureclaw"
tags: [openclaw, ai-security, owasp, agent-security]
via: "Twitter bookmark from @AISecHub"
---

OWASP-aligned security plugin and skill for OpenClaw agents, built by Adversa AI. It audits an OpenClaw install for misconfigurations and known vulnerabilities, applies automated hardening, and gives the agent behavioral security rules.

## Key Features

- Layer 1 audit: 56 checks across 8 categories (exposed gateway ports, weak file permissions, plaintext credentials, disabled sandboxing)
- Layer 2 hardening: auto-fix modules with backup and rollback
- Layer 3 behavioral rules: 15 LLM directives in a ~1,230 token skill; detection logic runs in bash, zero LLM tokens
- Defends against prompt injection, credential theft, supply chain attacks, privacy leaks
- Maps to OWASP ASI Top 10, MITRE ATLAS, CoSAI, CSA MAESTRO, NIST AI 100-2
- Integrity baselines for tamper detection

## Links

- GitHub: https://github.com/adversa-ai/secureclaw
- Original Tweet: https://x.com/AISecHub/status/2022292973430448462
