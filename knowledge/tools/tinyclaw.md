# TinyClaw

Minimal multi-channel AI assistant with WhatsApp integration and queue-based architecture.

**Repo:** https://github.com/jlia0/tinyclaw
**Language:** Shell
**Stars:** 260

## Overview

TinyClaw is a lightweight wrapper around Claude Code (400 LoC shell script) that:
- Connects WhatsApp via QR code
- Processes messages sequentially (no race conditions)
- Maintains conversation context
- Runs 24/7 in tmux
- Integrates with existing Claude Code plugins and setup

## Key Innovation

File-based queue system prevents race conditions and enables multi-channel support.

## Architecture

```
┌─────────────────┐
│  WhatsApp       │──┐
│  Client         │  │
└─────────────────┘  │
                     ├──→ Queue (incoming/)
┌─────────────────┐  │        ↓
│  Telegram       │──┤   ┌──────────────┐
│  (future)       │  │   │   Queue      │
└─────────────────┘  │   │  Processor   │
                     │   └──────────────┘
Other Channels ──────┘        ↓
                         claude -c -p
                              ↓
                         Queue (outgoing/)
                              ↓
                    ┌─────────────────┐
                    │ Channels send   │
                    │ responses       │
                    └─────────────────┘
```

### Tmux Layout

```
┌──────────────┬──────────────┐
│  WhatsApp    │    Queue     │
│  Client      │  Processor   │
├──────────────┼──────────────┤
│  Heartbeat   │    Logs      │
└──────────────┴──────────────┘
```

## Components

1. **whatsapp-client.js:** Connects to WhatsApp, reads incoming queue, sends responses
2. **queue-processor.js:** Single-message processing, calls `claude -c -p`, writes to outgoing queue
3. **heartbeat-cron.sh:** Runs every 5 minutes, keeps conversation active
4. **tinyclaw.sh:** Main orchestrator, manages tmux session, CLI interface

## Quick Start

```bash
cd /path/to/tinyclaw
npm install
chmod +x *.sh *.js
./tinyclaw.sh start
```

QR code appears—scan with WhatsApp to link device. Send a message and get a response.

## Commands

```bash
./tinyclaw.sh start      # Start TinyClaw
./tinyclaw.sh status     # Check status
./tinyclaw.sh send "msg" # Send manual message
./tinyclaw.sh reset      # Reset conversation
./tinyclaw.sh logs whatsapp  # View logs
./tinyclaw.sh attach     # Attach to tmux
./tinyclaw.sh stop       # Stop
```

## Configuration

**Heartbeat interval** (edit `heartbeat-cron.sh`):
```bash
INTERVAL=300  # seconds (5 minutes)
```

**Heartbeat prompt** (edit `.tinyclaw/heartbeat.md`):
Custom instructions for periodic AI checks.

## Directory Structure

```
tinyclaw/
├── .claude/              # Claude Code config
│   ├── settings.json
│   └── hooks/
├── .tinyclaw/            # TinyClaw data
│   ├── queue/
│   │   ├── incoming/
│   │   ├── processing/
│   │   └── outgoing/
│   ├── logs/
│   └── whatsapp-session/
├── tinyclaw.sh
├── whatsapp-client.js
├── queue-processor.js
└── heartbeat-cron.sh
```

## Monitoring

```bash
# View logs
tail -f .tinyclaw/logs/whatsapp.log
tail -f .tinyclaw/logs/queue.log
tail -f .tinyclaw/logs/heartbeat.log

# Watch queue
watch -n 1 'ls -lh .tinyclaw/queue/incoming/'
```

## Message Flow

1. WhatsApp message arrives
2. `whatsapp-client.js` writes to `.tinyclaw/queue/incoming/whatsapp_<id>.json`
3. `queue-processor.js` picks it up
4. Runs: `claude -c -p "message"`
5. Writes to `.tinyclaw/queue/outgoing/whatsapp_<id>.json`
6. `whatsapp-client.js` sends response
7. User receives reply

## Features

- **Sequential processing:** One message at a time, no race conditions
- **Multi-channel ready:** File-based queue supports Telegram, etc.
- **Stable:** ~400 lines, easy to deploy
- **Integrated:** Uses existing Claude Code plugins and setup
- **24/7 operation:** tmux keeps it running
- **Persistent context:** WhatsApp session maintained
