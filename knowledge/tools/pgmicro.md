---
title: "pgmicro"
type: tool
date_added: 2026-10-25
source: "https://github.com/glommer/pgmicro"
tags: [postgres, sqlite, turso, rust, database]
via: "Twitter bookmark from @fire"
---

pgmicro is an in-process reimplementation of PostgreSQL backed by a SQLite-compatible storage engine. It parses SQL with PostgreSQL's own parser and compiles directly to SQLite-style bytecode on a modern Rust engine (Turso). The experiment graduated: it merged into Turso and Postgres support is now developed in-tree, so the repo is kept as historical reference. ~1.2k stars.

## Key Features

- Real Postgres parser, no SQL-to-SQLite text translation
- Compiles to Turso AST then bytecode, executing natively like SQLite
- Single-file, fully local, no concurrency limitation
- Relies on Turso features such as MVCC and a strict type system
- Envisioned uses: Durable-Objects-style primitives with Postgres interface, ephemeral local agent databases

## Links

- GitHub: https://github.com/glommer/pgmicro
- Original Tweet: https://x.com/fire/status/2037271016444223884
- Announcement: https://x.com/glcst/status/2037254698898432278
