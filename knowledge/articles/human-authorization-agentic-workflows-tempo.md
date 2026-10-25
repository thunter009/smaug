---
title: "Human Authorization in Agentic Workflows (Voight-Kampff)"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2090116716873326593"
author: "Tempo"
tags: [security, agents, code-review, secure-enclave, github]
via: "Twitter bookmark from @gakonst"
---

Tempo describes Voight-Kampff, a proof-of-human intent layer that requires a physical action (macOS Touch ID) before high-impact operations such as PR merges proceed. Authentication alone does not show that a human intended the specific action.

## Key Takeaways

- Approvals bind to a specific changeset/deployment, not a generic yes
- Requires physical presence, so agents and malware with local tokens cannot approve
- macOS LaunchAgent client holds a P-256 key in the Secure Enclave; server verifies signatures
- Integrates via GitHub status checks and branch protection; no new merge flow
- Must be fast or it gets bypassed

## Links

- Source: https://x.com/i/article/2090116716873326593
- Tweet: https://x.com/gakonst/status/2090240852191002718
