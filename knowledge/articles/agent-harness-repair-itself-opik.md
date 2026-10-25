---
title: "Your Agent Harness Should Repair Itself"
type: article
date_added: 2026-10-25
source: "https://x.com/i/article/2063964921495523328"
author: "akshay_pachaar"
tags: [agents, observability, evals, harness, opik]
via: "Twitter bookmark from @_avichawla"
---
Sponsored (Comet ML) piece arguing agent observability stops at the trace and the fix loop stays manual. Opik, an open-source platform, closes the loop from bad trace to locked regression test.

## Key Takeaways
- Four layers: Tracing (`@opik.track`), Ollie (coding agent that diagnoses traces and proposes diffs after `opik connect`), Test Suites, Agent Sandbox
- Loop: bad trace, root cause, diff, approve, rerun on the exact failing input, failure locked as a regression test
- Test Suites use plain-English assertions run as LLM-as-judge; every debugged failure becomes a test case
- Agent Sandbox runs the full instrumented agent graph end-to-end, not just a single prompt
- Self-host: clone comet-ml/opik and run `./opik.sh`; 50+ framework integrations, 6-algorithm optimizer

## Links
- [Article](https://x.com/i/article/2063964921495523328)
- [Opik on GitHub](https://github.com/comet-ml/opik)
- [Original Tweet](https://x.com/_avichawla/status/2065727218991735000)
