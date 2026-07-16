# Data Positioning File Operators Tool

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![npm version](https://img.shields.io/npm/v/@dpuse/dpuse-tool-file-operators.svg)](https://www.npmjs.com/package/@dpuse/dpuse-tool-file-operators)

<!-- OPENING_START -->

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![DPUse version](https://img.shields.io/github/v/release/dpuse/dpuse-tool-file-operators?color=f6821f&label=DPUse)](https://github.com/dpuse/dpuse-tool-file-operators/releases/latest)
[![CI](https://github.com/dpuse/dpuse-tool-file-operators/actions/workflows/ci.yml/badge.svg)](https://github.com/dpuse/dpuse-tool-file-operators/actions/workflows/ci.yml)
[![CodeQL](https://github.com/dpuse/dpuse-tool-file-operators/actions/workflows/codeql.yml/badge.svg)](https://github.com/dpuse/dpuse-tool-file-operators/actions/workflows/codeql.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=dpuse_dpuse-tool-file-operators&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=dpuse_dpuse-tool-file-operators)

[Documentation](https://www.dpuse.app) · [Report a Vulnerability](https://github.com/dpuse/dpuse-tool-file-operators/security/advisories/new) · [Open an Issue](https://github.com/dpuse/dpuse-tool-file-operators/issues)

## About DPUse

DPUse (Data Positioning & Use) is an in-browser application that positions your data for use through three core activities: sourcing, contextualising, and publishing. **Sourcing** uses a library of [Connectors](https://www.dpuse.app) to establish [Connections](https://www.dpuse.app) to applications, databases, file stores, and curated datasets; these connections are subsequently used to configure structured [Data Views](https://www.dpuse.app) from the underlying sources. **Contextualising** extracts chronological events from those [Data Views](https://www.dpuse.app) and maps them into comprehensive [Context Models](https://www.dpuse.app). This provides the DPUse Engine with the structural framework required to generate deterministic transactions, facts, or observations. **Publishing** employs a library of [Presenters](https://www.dpuse.app) to render standard [Presentations](https://www.dpuse.app) immediately using the contextualised data; additionally, [Cookbooks](https://www.dpuse.app) of [Recipes](https://www.dpuse.app) allow you to build Data Apps using your preferred tools.

## Introduction

...

<!-- OPENING_END -->

<!-- USAGE_START -->

This connector is automatically uploaded to the DPUse Engine cloud once released and becomes instantly available to all new browser app instances, with existing instances notified of the update.

You may view or clone this repository for your own purposes, such as building a new, similar connector, though there is currently no process to accept third-party connectors into DPUse at this stage. Cloned or forked code is unsupported and isn't guaranteed to remain compatible with the DPUse Engine as it evolves.

```bash
git clone https://github.com/dpuse/dpuse-tool-file-operators.git
cd dpuse-tool-file-operators
npm install
```

_Requires [Node.js](https://nodejs.org/) 23.11 or later, [npm](https://www.npmjs.com/) 11 or later, and [TypeScript](https://www.typescriptlang.org/) 6.0.3 or later._

<!-- USAGE_END -->

<!-- DEPENDENCY_LICENSES_START -->

License data is collected automatically on each release using [license-checker](https://github.com/RSeidelsohn/license-checker-rseidelsohn). The following table lists all production dependencies. These dependencies (including transitive ones) have been checked and confirmed to use BSD-3-Clause or MIT — all permissive, commercially-friendly licenses. Users of the uploaded library are covered by these checks; developers cloning this repository should independently verify development dependencies.

| Dependency                                                             | Version | License(s)   | Document                                                              |
| :--------------------------------------------------------------------- | :-----: | :----------- | :-------------------------------------------------------------------- |
| [@borewit/text-codec](https://github.com/Borewit/text-codec)           |  0.2.2  | MIT          | [LICENSE](licenses/downloads/@borewit/text-codec@0.2.2-LICENSE.txt)   |
| [@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)           | 0.3.743 | MIT          | [LICENSE](licenses/downloads/@dpuse/dpuse-shared@0.3.743-LICENSE.txt) |
| [@tokenizer/inflate](https://github.com/Borewit/tokenizer-inflate)     |  0.4.1  | MIT          | [LICENSE](licenses/downloads/@tokenizer/inflate@0.4.1-LICENSE.txt)    |
| [@tokenizer/token](https://github.com/Borewit/tokenizer-token)         |  0.3.0  | MIT          | [LICENSE](licenses/downloads/@tokenizer/token@0.3.0-LICENSE.txt)      |
| [chardet](https://github.com/runk/node-chardet)                        |  2.2.0  | MIT          | [LICENSE](licenses/downloads/chardet@2.2.0-LICENSE.txt)               |
| [debug](https://github.com/debug-js/debug)                             |  4.4.3  | MIT          | [LICENSE](licenses/downloads/debug@4.4.3-LICENSE.txt)                 |
| [file-type](https://github.com/sindresorhus/file-type)                 | 22.0.1  | MIT          | [LICENSE](licenses/downloads/file-type@22.0.1-LICENSE.txt)            |
| [ieee754](https://github.com/feross/ieee754)                           |  1.2.1  | BSD-3-Clause | [LICENSE](licenses/downloads/ieee754@1.2.1-LICENSE.txt)               |
| [ms](https://github.com/vercel/ms)                                     |  2.1.3  | MIT          | [LICENSE](licenses/downloads/ms@2.1.3-LICENSE.txt)                    |
| [strtok3](https://github.com/Borewit/strtok3)                          | 10.3.5  | MIT          | [LICENSE](licenses/downloads/strtok3@10.3.5-LICENSE.txt)              |
| [token-types](https://github.com/Borewit/token-types)                  |  6.1.2  | MIT          | [LICENSE](licenses/downloads/token-types@6.1.2-LICENSE.txt)           |
| [uint8array-extras](https://github.com/sindresorhus/uint8array-extras) |  1.5.0  | MIT          | [LICENSE](licenses/downloads/uint8array-extras@1.5.0-LICENSE.txt)     |

<!-- DEPENDENCY_LICENSES_END -->

<!-- DEPENDENCY_TREE_START -->

The dependency tree below lists every package in this project — direct and transitive — along with its installed version, release date, and update status. Packages flagged ❗ have a newer version available; ⚠️ indicates a package that hasn't been updated in the last 6 months or longer. Neither flag necessarily indicates a problem: we let new releases stabilise before upgrading, and some packages are simply mature and stable, requiring no active development.

- **[@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)** 0.3.743 — this month: 2026-07-14
- **[chardet](https://github.com/runk/node-chardet)** 2.2.0 — this month: 2026-06-20
- **[file-type](https://github.com/sindresorhus/file-type)** 22.0.1 — 3 months ago: 2026-04-09
    - **[@tokenizer/inflate](https://github.com/Borewit/tokenizer-inflate)** 0.4.1 — 7 months ago: 2025-11-18 ⚠️
        - **[debug](https://github.com/debug-js/debug)** 4.4.3 — 10 months ago: 2025-09-13 ⚠️
            - **[ms](https://github.com/vercel/ms)** 2.1.3 — 67 months ago: 2020-12-08 ⚠️
        - **[token-types](https://github.com/Borewit/token-types)** 6.1.2 — 6 months ago: 2026-01-01
    - **[strtok3](https://github.com/Borewit/strtok3)** 10.3.5 — 3 months ago: 2026-03-21
        - **[@tokenizer/token](https://github.com/Borewit/tokenizer-token)** 0.3.0 — 60 months ago: 2021-07-12 ⚠️
    - **[token-types](https://github.com/Borewit/token-types)** 6.1.2 — 6 months ago: 2026-01-01
        - **[@borewit/text-codec](https://github.com/Borewit/text-codec)** 0.2.2 — 4 months ago: 2026-03-11
        - **[@tokenizer/token](https://github.com/Borewit/tokenizer-token)** 0.3.0 — 60 months ago: 2021-07-12 ⚠️
        - **[ieee754](https://github.com/feross/ieee754)** 1.2.1 — 68 months ago: 2020-10-27 ⚠️
    - **[uint8array-extras](https://github.com/sindresorhus/uint8array-extras)** 1.5.0 — 10 months ago: 2025-08-22 ⚠️

<!-- DEPENDENCY_TREE_END -->

<!-- BUNDLE_START -->

The Bundle Analysis Report is generated automatically on each release using [Sonda](https://sonda.dev/), which analyses final source maps to reveal the actual effects of tree-shaking and minification rather than relying on pre-build estimates.

_Note: Sonda's Vite reports currently exclude CSS files, since Vite does not generate source maps for CSS._

| Chunk/Module/File                                                                    | Composition                  |
| :----------------------------------------------------------------------------------- | :--------------------------- |
| dist/dpuse-tool-file-operators.es.js                                                 | 163.6 kB · brotli 29.0 kB    |
| &nbsp;&nbsp;&nbsp;&nbsp;chardet                                                      | `██████░░░░░░░░░░░░░░` 29.5% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/encoding/sbcs.js                 | `████░░░░░░░░░░░░░░░░` 20.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/encoding/mbcs.js                 | `█░░░░░░░░░░░░░░░░░░░` 4.3%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/index.js                         | `░░░░░░░░░░░░░░░░░░░░` 2.0%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/encoding/iso2022.js              | `░░░░░░░░░░░░░░░░░░░░` 1.1%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/encoding/unicode.js              | `░░░░░░░░░░░░░░░░░░░░` 0.9%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/encoding/utf8.js                 | `░░░░░░░░░░░░░░░░░░░░` 0.5%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/encoding/ascii.js                | `░░░░░░░░░░░░░░░░░░░░` 0.2%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/utils.js                         | `░░░░░░░░░░░░░░░░░░░░` 0.1%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/match.js                         | `░░░░░░░░░░░░░░░░░░░░` 0.1%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/fs/browser.js                    | `░░░░░░░░░░░░░░░░░░░░` 0.1%  |
| &nbsp;&nbsp;&nbsp;&nbsp;file-type                                                    | `██████░░░░░░░░░░░░░░` 27.5% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source/index.js                      | `███░░░░░░░░░░░░░░░░░` 15.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source/detectors/zip.js              | `█░░░░░░░░░░░░░░░░░░░` 6.5%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source/supported.js                  | `█░░░░░░░░░░░░░░░░░░░` 2.9%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source/detectors/asf.js              | `░░░░░░░░░░░░░░░░░░░░` 0.8%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source/detectors/ebml.js             | `░░░░░░░░░░░░░░░░░░░░` 0.7%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source/detectors/png.js              | `░░░░░░░░░░░░░░░░░░░░` 0.6%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source/parser.js                     | `░░░░░░░░░░░░░░░░░░░░` 0.5%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source/tokens.js                     | `░░░░░░░░░░░░░░░░░░░░` 0.4%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]                                  | `████░░░░░░░░░░░░░░░░` 20.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;strtok3                                                      | `█░░░░░░░░░░░░░░░░░░░` 4.3%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/ReadStreamTokenizer.js           | `░░░░░░░░░░░░░░░░░░░░` 0.9%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/AbstractTokenizer.js             | `░░░░░░░░░░░░░░░░░░░░` 0.9%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/stream/AbstractStreamReader.js   | `░░░░░░░░░░░░░░░░░░░░` 0.6%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/stream/WebStreamDefaultReader.js | `░░░░░░░░░░░░░░░░░░░░` 0.5%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/BlobTokenizer.js                 | `░░░░░░░░░░░░░░░░░░░░` 0.4%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/BufferTokenizer.js               | `░░░░░░░░░░░░░░░░░░░░` 0.4%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/stream/WebStreamByobReader.js    | `░░░░░░░░░░░░░░░░░░░░` 0.2%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/core.js                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/stream/Errors.js                 | `░░░░░░░░░░░░░░░░░░░░` 0.1%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/stream/WebStreamReaderFactory.js | `░░░░░░░░░░░░░░░░░░░░` 0.1%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/stream/WebStreamReader.js        | `░░░░░░░░░░░░░░░░░░░░` 0.1%  |
| &nbsp;&nbsp;&nbsp;&nbsp;@dpuse/dpuse-shared                                          | `█░░░░░░░░░░░░░░░░░░░` 4.3%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dist/dpuse-shared-encoding.es.js     | `█░░░░░░░░░░░░░░░░░░░` 3.6%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dist/dpuse-shared-errors.es.js       | `░░░░░░░░░░░░░░░░░░░░` 0.6%  |
| &nbsp;&nbsp;&nbsp;&nbsp;@tokenizer/inflate                                           | `█░░░░░░░░░░░░░░░░░░░` 4.0%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/ZipHandler.js                    | `█░░░░░░░░░░░░░░░░░░░` 3.0%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/ZipToken.js                      | `░░░░░░░░░░░░░░░░░░░░` 0.7%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/GzipHandler.js                   | `░░░░░░░░░░░░░░░░░░░░` 0.2%  |
| &nbsp;&nbsp;&nbsp;&nbsp;debug                                                        | `█░░░░░░░░░░░░░░░░░░░` 3.1%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/browser.js                       | `░░░░░░░░░░░░░░░░░░░░` 1.6%  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/common.js                        | `░░░░░░░░░░░░░░░░░░░░` 1.5%  |
| &nbsp;&nbsp;&nbsp;&nbsp;src → index.ts                                               | `█░░░░░░░░░░░░░░░░░░░` 2.7%  |
| &nbsp;&nbsp;&nbsp;&nbsp;@borewit/text-codec → lib/index.js                           | `░░░░░░░░░░░░░░░░░░░░` 2.1%  |
| &nbsp;&nbsp;&nbsp;&nbsp;ms → index.js                                                | `░░░░░░░░░░░░░░░░░░░░` 1.0%  |
| &nbsp;&nbsp;&nbsp;&nbsp;token-types → lib/index.js                                   | `░░░░░░░░░░░░░░░░░░░░` 0.6%  |
| &nbsp;&nbsp;&nbsp;&nbsp;uint8array-extras → index.js                                 | `░░░░░░░░░░░░░░░░░░░░` 0.6%  |

<!-- BUNDLE_END -->

<!-- GOVERNANCE_START -->

## Security & Quality

### CodeQL

[CodeQL](https://github.com/dpuse/dpuse-tool-file-operators/security/code-scanning) static analysis runs on every push to `main` and on a weekly schedule, scanning TypeScript, JavaScript, Rust, and GitHub Actions workflow files for security vulnerabilities and coding errors.

### SonarCloud

[SonarCloud](https://sonarcloud.io/summary/new_code?id=dpuse_dpuse-tool-file-operators) performs continuous code quality and security analysis on every push, detecting bugs, code smells, and security vulnerabilities in the TypeScript source.

### Vulnerability Scanning

Two complementary tools continuously monitor dependencies for known vulnerabilities:

- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) runs on every push to `main` via the CI workflow, failing the build if any high or critical severity vulnerabilities are detected.
- [GitHub Dependabot](https://docs.github.com/en/code-security/dependabot) automatically raises pull requests to update vulnerable dependencies, drawing on the GitHub Advisory Database which combines NVD and npm-specific advisories.

### Supply Chain Security

[Socket.dev](https://socket.dev) monitors all dependencies for supply chain risk — detecting malicious packages, dependency confusion, typosquatting, and suspicious behaviour that may not yet have a CVE.

### Reporting Vulnerabilities

Please do not open public GitHub issues for security vulnerabilities. Use [GitHub private vulnerability reporting](https://github.com/dpuse/dpuse-tool-file-operators/security/advisories/new) instead. See [SECURITY.md](./SECURITY.md) for the full disclosure policy, contact details, and expected response times.

### OpenSSF 🚧

[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/dpuse/dpuse-tool-file-operators/badge)](https://scorecard.dev/viewer/?uri=github.com/dpuse/dpuse-tool-file-operators)

This project is working towards the [OpenSSF Best Practices](https://www.bestpractices.dev) Passing badge, a self-certification covering security policy, vulnerability reporting, build processes, code quality, and more. Currently the [OpenSSF Scorecard](https://scorecard.dev/viewer/?uri=github.com/dpuse/dpuse-tool-file-operators) provides an independent automated assessment of the project's security practices and is an ongoing area of improvement.

## Contributing

This repository is maintained solely by its owner and does not, at present, accept external contributions into the canonical repo. Its source is published openly under the MIT License — every DPUse project is fully open source except DPUse Engine, which remains closed and proprietary.

For security vulnerabilities, see [Reporting Vulnerabilities](#reporting-vulnerabilities). For bugs, inconsistencies, or other feedback, [open a GitHub issue](https://github.com/dpuse/dpuse-tool-file-operators/issues) — feedback is read, but responses and fixes are at the maintainer's discretion.

## License

This project is licensed under the MIT License, permitting free use, modification, and distribution.

[MIT](./LICENSE) © 2026-present Jonathan Terrell

<!-- GOVERNANCE_END -->
