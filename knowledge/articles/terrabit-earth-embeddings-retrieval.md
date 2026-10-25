---
title: "Compressing Earth Embeddings pt. 2: TerraBit Zero-Backend Retrieval"
type: article
author: "Isaac Corley and Caleb Robinson"
date_added: 2026-10-25
source: "https://geospatialml.com/posts/terrabit/"
tags: [geospatial, embeddings, duckdb-wasm, geoparquet, compression]
via: "Twitter bookmark from @isaaccorley_"
---

Part 2 of a series on compressing Earth embeddings. The article presents TerraBit, a browser-only retrieval demo over satellite image embeddings.

## Key Takeaways

- The team binarized global Clay v1.5 Sentinel-2 embeddings, cutting storage from 183GB to 7GB.
- The demo runs with no server or database. It uses DuckDB-WASM, partitioned GeoParquet on S3, and an in-memory index.
- Search uses brute-force Hamming distance over the binarized vectors.
- The post compares Google's TurboQuant. The tweet says TurboQuant int4 is a solid choice for this task.
- Note: the bookmark capture of the article body is mostly page script. These takeaways come from the bookmark page title and the author's tweet.

## Links

- Original Tweet: https://x.com/isaaccorley_/status/2041534526690648481
