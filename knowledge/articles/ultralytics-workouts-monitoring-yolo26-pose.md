---
title: "Workout Monitoring with Ultralytics YOLO26 Pose"
type: article
date_added: 2026-10-25
source: "https://docs.ultralytics.com/guides/workouts-monitoring"
author: "Ultralytics"
tags: [computer-vision, yolo, pose-estimation, fitness]
via: "Twitter bookmark from @muhammdrizwanmr"
---

Ultralytics guide for tracking exercise reps (leg press, bench press, leg extension and similar) from video using YOLO26 pose estimation, runnable from the CLI or in a couple of lines of Python. The tweet author notes it runs on CPU, and that exporting the model to TorchScript or ONNX improves CPU performance.

## Key Takeaways

- Pose keypoints drive rep counting for gym exercises
- No high-end GPU required; export to TorchScript/ONNX for CPU speed
- Two-line Python or one CLI command to start

## Links

- [Guide](https://docs.ultralytics.com/guides/workouts-monitoring)
- [Original Tweet](https://x.com/muhammdrizwanmr/status/2096467935044747282)
