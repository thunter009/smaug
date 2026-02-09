# Claude Code On-The-Go

## Overview
Article detailing infrastructure for running 6 Claude Code agents in parallel from an iPhone using cloud VM, Tailscale, mosh, and push notifications.

## Infrastructure Setup
- **VM:** Vultr vhf-8c-32gb instance
- **Cost:** $0.29/hr (~$7/day when running)
- **Access:** Tailscale-only (no public SSH)
- **Terminal:** Termius (iOS app for SSH + mosh)
- **Session:** tmux with auto-attach on login

## Key Concepts
- Async development workflow from anywhere
- Network-resilient mosh connections (survives WiFi/cellular switches)
- Push notifications for agent attention (via PreToolUse hooks)
- iOS Shortcut for direct VM startup via Vultr API
- Defense-in-depth security (cloud firewall + local nftables + fail2ban)

## Notable Details
- Mosh doesn't forward SSH agent (workaround: regular SSH in tmux for git)
- Session persistence via auto-attaching to tmux
- Multiple agents run in parallel tmux windows
- Terminal bell for local attention, webhooks for push notifications

## Article Date
January 2, 2026

## Author
mgranda (Granda | Ideas & Code)

## Links
- Article: https://granda.org/en/2026/01/02/claude-code-on-the-go/
- Multi-language versions available (Spanish, Dutch, German, Italian, French, Japanese, Chinese, Russian, Esperanto, Hindi)

## Context
Referenced in @randomor's tweet about remote development optimization (Jan 6, 2026). Practical implementation of "vibe coding" from mobile devices.
