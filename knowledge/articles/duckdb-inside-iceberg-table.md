---
title: "What Is Inside an Iceberg Table? (DuckDB blog)"
type: article
date_added: 2026-10-25
source: "https://duckdb.org/2026/10/13/inside-iceberg-table"
tags: [duckdb, iceberg, parquet, data]
via: "Twitter bookmark from @duckdb"
---

DuckDB blog post walking the file tree of an Apache Iceberg table using plain SQL.

## Key Takeaways

- Iceberg table is a tree: JSON metadata, Avro manifest lists and manifests, Parquet data and delete files
- DuckDB reads all three formats so each layer can be inspected with SQL
- Useful for debugging slow or odd tables

## Links

- [Source](https://duckdb.org/2026/10/13/inside-iceberg-table)
- [Original tweet](https://x.com/duckdb/status/2110837648298541271)
