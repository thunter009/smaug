---
title: "franken_whisper: Whisper + speaker diarization in a browser tab"
type: article
date_added: 2026-10-25
source: "https://franken-whisper.com/"
author: "@doodlestein"
tags: [rust, wasm, speech-to-text, diarization, local-first]
via: "Twitter bookmark from @doodlestein"
---

Pure-Rust rebuild of OpenAI Whisper plus NVIDIA Streaming Sortformer diarizer. Same code ships as the `fw` CLI and as WebAssembly, so transcription with speaker labels runs entirely on CPU in the page.

## Key Features
- Whisper large-v3-turbo (809M params) plus Sortformer (123M), four speakers.
- No PyTorch, Python, FFI or subprocess; audio never leaves the tab (CSP connect-src 'self').
- About 1.3 GB weights, SHA-256 pinned and re-verified.

## Links
- https://franken-whisper.com/
