Page Speed Auditor
===================

A small solo project to audit webpage performance using a simple CLI that fetches a URL and reports basic timing metrics and opportunities (first paint proxy, total bytes, number of requests). The goal is to iterate like a real weekend project with small commits.

Planned features:
- Minimal HTTP fetch and timing
- HTML parse for assets (css/js/img)
- Heuristics-based suggestions
- JSON and table outputs
- Config and ignore rules

No build or runtime required for this repo; code is intentionally lightweight and self-contained.

Dev Setup
---------
- Use Node version from `.nvmrc`.
- Install deps: `npm i` (only needed for `node-fetch`).

Notes
-----
- Network calls are live; be mindful of rate limiting when testing.
- Results are heuristic and meant for quick direction, not lab-grade precision.
