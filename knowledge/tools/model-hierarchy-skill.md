# Model Hierarchy Skill - Cost-Optimized Routing

## Overview
Agent skill for hierarchical model routing based on task complexity. Reduces API costs from $225/month (pure Opus) to ~$19/month with intelligent routing.

## Cost Breakdown
- **Routine Tasks (80%)** → DeepSeek @ $0.14/M
  - File operations, status checks, simple Q&A, formatting

- **Moderate Tasks (15%)** → Sonnet @ $3/M
  - Code generation, summaries, drafts, light analysis

- **Hard Tasks (5%)** → Opus @ $15/M
  - Debugging, architecture decisions, multi-step reasoning

## Savings
- Pure Opus: $225/month
- With Hierarchy: $19/month
- **Reduction: 91.5%**

## Compatibility
- OpenClaw
- Claude Code
- Any agent system

## Implementation
28 tests. Auto-classifies task complexity and routes to cheapest capable model without output degradation.

## GitHub
https://github.com/zscole/model-hierarchy-skill
- Stars: 149
- Language: Python

## Tags
[[cost-optimization]] [[agent-routing]] [[tools]]
