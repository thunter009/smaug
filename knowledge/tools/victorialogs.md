---
title: "VictoriaLogs"
type: tool
date_added: 2026-10-25
source: "https://github.com/VictoriaMetrics/VictoriaLogs"
tags: [logging, observability, go, open-source]
via: "Twitter bookmark from @func25"
---

Open-source log database written in Go. Schemaless, zero-config, single small binary; scales from tiny setups to hundreds of CPU cores.

## Key Features
- Schemaless: no table or index mapping setup; every field searchable
- 20.7 MiB binary vs Loki 123.8 MiB, ClickHouse 727.1 MiB, Elasticsearch 1.3 GiB
- Terabytes of logs per day; vertical and horizontal scaling
- Lower CPU/memory than most logging systems
- Query, filter, group, math; live tailing
- Grafana dashboards, Prometheus-compatible
- Log-based alerts (Slack, email) and recording rules that emit metrics

## Links
- [GitHub](https://github.com/VictoriaMetrics/VictoriaLogs)
- [Original Tweet](https://x.com/func25/status/2011420689941885037)
