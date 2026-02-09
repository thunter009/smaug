# Drawbridge

Claude Code skill + real-time diagram server for Excalidraw.

**Repo:** https://github.com/alexknowshtml/drawbridge
**Language:** TypeScript
**Stars:** 11

## Overview

Drawbridge enables natural language diagram creation by connecting Claude Code to Excalidraw. Ask Claude to draw flowcharts, architecture diagrams, or dependency maps—they appear live on an Excalidraw canvas in the browser.

## Key Features

- **Real-time rendering:** Elements appear progressively as Claude pushes them
- **Claude Code skill:** Ready-to-use skill teaching Claude diagram generation
- **Element format reference:** Complete spec for shapes, arrows, bindings, zones
- **Semantic colors:** Predefined palette with meaningful color assignments
- **Progressive streaming:** Draw order supports progressive rendering
- **Render to PNG/SVG:** Export diagrams after creation
- **Persistence:** Sessions automatically persisted to disk

## Architecture

```
AI/Script → HTTP POST → Drawbridge Server → WebSocket → Browser (Excalidraw)
```

Express server runs HTTP API + WebSocket on configurable ports. Browser loads Excalidraw, connects via WebSocket to a session. AI/scripts push simplified "skeleton" elements via HTTP—browser converts them to full Excalidraw elements with proper font loading.

## Quick Start

```bash
git clone https://github.com/alexknowshtml/drawbridge.git
cd drawbridge
npm install
npm run build
npm start  # API on :3062, WebSocket on :3061
```

Open `http://localhost:3000/#my-session` in browser, then push elements:

```bash
curl -X POST http://localhost:3062/api/session/my-session/elements \
  -H "Content-Type: application/json" \
  -d '{
    "elements": [{
      "type": "rectangle", "id": "b1", "x": 100, "y": 100, "width": 200, "height": 80,
      "roundness": { "type": 3 }, "backgroundColor": "#a5d8ff", "fillStyle": "solid",
      "label": { "text": "Hello World", "fontSize": 20 }
    }]
  }'
```

## Configuration

| Variable | Default | Purpose |
|---|---|---|
| `DRAWBRIDGE_PORT` | `3062` | HTTP + WebSocket port |
| `DRAWBRIDGE_DATA_DIR` | `./data` | Session persistence directory |

## Skill Installation

```bash
mkdir -p .claude/skills/drawbridge
cp drawbridge/skills/SKILL.md .claude/skills/drawbridge/SKILL.md
```

Skill includes element format specs, color palette, sizing rules, drawing order, and complete examples.

## Use Cases

- Flowchart generation from natural language
- Architecture diagram creation
- Dependency visualization
- Real-time collaboration on diagrams
