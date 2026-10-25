---
title: "cloudflare/security-audit-skill"
type: tool
date_added: 2026-10-25
source: "https://github.com/cloudflare/security-audit-skill"
tags: [security, agent-skills, audit, cloudflare]
via: "Twitter bookmark from @marklaunches"
---

# cloudflare/security-audit-skill

Coding-agent skill that turns an agent into a security auditor. It orchestrates isolated agents through multi-phase audits with independently verified, machine-readable findings. It seeded Cloudflare's internal vulnerability discovery harness.

## Key Features
- Six phases: reconnaissance, coverage-led hunting, candidate validation, structured output, independent record verification, target-neutral reporting
- Artifacts: architecture.md, coverage-ledger.json, findings.json, REPORT.md, FINDINGS-DETAIL.md, NEEDS-VALIDATION.md
- Validator scripts for the coverage ledger and findings
- JavaScript, ~46k stars

## Links
- Repo: https://github.com/cloudflare/security-audit-skill
- Background: https://blog.cloudflare.com/build-your-own-vulnerability-harness
