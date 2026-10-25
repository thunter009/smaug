---
title: "A Real DuckDB Database in S3, With Nothing Else to Run"
type: article
date_added: 2026-10-25
source: "https://dentiny.github.io/posts/duckdb-on-object-storage/"
tags: [duckdb, s3, slatedb, databases]
via: "Twitter bookmark from @siddontang"
---

duckdb_object_storage is a DuckDB community extension storing native DuckDB databases (indexes, constraints, WAL) in object storage via SlateDB and Apache OpenDAL. No table format, catalog, or coordinator.

## Key Takeaways

- ATTACH 'duckdb_objfs://analytics.db' gives an ordinary writable DuckDB backed by S3
- One writer, many readers; writer fencing lives in object storage
- Nothing to run but the bucket; no fork of DuckDB

## Links

- [Source](https://dentiny.github.io/posts/duckdb-on-object-storage/)
- [Original tweet](https://x.com/siddontang/status/2110800479651496215)
