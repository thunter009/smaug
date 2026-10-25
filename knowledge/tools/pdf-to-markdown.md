---
title: "pdf-to-markdown - Nutrient's local PDF to Markdown CLI"
type: tool
date_added: 2026-10-25
source: "https://github.com/PSPDFKit/pdf-to-markdown"
tags: [pdf, markdown, cli, document-conversion, agent-skills]
via: "Twitter bookmark from @jdrhyne"
---

Standalone CLI wrapper from PSPDFKit (Nutrient) that converts PDFs to Markdown on the local machine. Nutrient released it as a closed-source tool that runs without uploads. The npm package bundles pdf-to-markdown, pdf-to-text, and query commands that share one binary.

## Key Features

- Local conversion to Markdown with headings, lists, tables, and reading order
- pdf-to-text for layout-preserving plain text
- query command that returns the most relevant line ranges from an extracted file
- Optional `--vision` mode for scanned or image-only documents (needs a Nutrient account or license key)
- `--enable-image-export` saves images next to the Markdown output
- Install with `npm install -g @pspdfkit/pdf-to-markdown` (Node 18+)

## Links

- Repo: https://github.com/PSPDFKit/pdf-to-markdown
- Original Tweet: https://x.com/jdrhyne/status/2039750398307934458
