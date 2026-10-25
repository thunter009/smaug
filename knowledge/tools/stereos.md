---
title: "stereOS"
type: tool
date_added: 2026-10-25
source: "https://github.com/papercomputeco/stereos"
tags: [agents, sandbox, nixos, gvisor, security]
via: "Twitter bookmark from @johncodes"
---

Hardened, purpose-built NixOS-based Linux OS for running AI agents. Boots a full NixOS system, then starts per-agent sandboxes using gVisor with read-only /nix/store namespace mounts, so each agent gets its own kernel and an escape lands as an unprivileged "agent" user.

## Key Features

- gVisor sandboxes per agent with read-only /nix/store mounts
- Native system-level agents managed by `agentd`, which can spawn sub-agents
- Keeps GPU PCIe passthrough, secure boot, FIPS options that Firecracker strips
- Companion tools: masterblaster (client to launch/manage agents), stereosd (control plane daemon), agentd (agent management daemon)

## Links

- Repo: https://github.com/papercomputeco/stereos
- masterblaster: https://github.com/papercomputeco/masterblaster
- stereosd: https://github.com/papercomputeco/stereosd
- agentd: https://github.com/papercomputeco/agentd
- Tweet: https://x.com/johncodes/status/2027079574513664071
