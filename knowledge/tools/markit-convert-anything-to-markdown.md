---
title: "markit - convert PDFs, Office docs and more to markdown (Rust)"
type: tool
date_added: 2026-10-25
source: "https://github.com/shift-labs-ai/markit"
tags: [markdown, pdf, document-conversion, rust, cli, agent-skills]
via: "Twitter bookmark from @micLivs"
---

markit converts PDF, DOCX, PPTX, XLSX, HTML, EPUB, Jupyter, RSS, images, audio and URLs to markdown, as a CLI and Node library. v0.3.0 handles badly malformed PDFs and is faster. Install: `npm install -g @shiftlabs/markit`; skill: `npx skills add Michaelliv/markit`.

## Key Features

- Built-in Rust engine for PDF and DOCX; broad format list
- Benchmarks (README): olmOCR-bench 45.0% vs liteparse 38.8%; text recovered 100% on a 40-PDF "shitty-pdf-bench" (semiconductor manuals, scans, malformed files)
- Reported 3,612 pages/s on a 16-document non-OCR subset
- `--json` and `-q` output for agents; `markit onboard` adds instructions to CLAUDE.md
- Test PDFs in the tweet are NXP, TI, Intel, Infineon, Microchip manuals

## Links

- [GitHub](https://github.com/shift-labs-ai/markit)
- [Release v0.3.0](https://github.com/shift-labs-ai/markit/releases/tag/v0.3.0)
- [Original Tweet](https://x.com/micLivs/status/2037659231550099822)
