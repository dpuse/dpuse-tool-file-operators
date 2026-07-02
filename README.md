# Data Positioning File Operators Tool

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![npm version](https://img.shields.io/npm/v/@dpuse/dpuse-tool-file-operators.svg)](https://www.npmjs.com/package/@dpuse/dpuse-tool-file-operators)

<!-- DEPENDENCY_LICENSES_START -->

| Dependency                                                             | Version | License(s)   | Document                                                              |
| :--------------------------------------------------------------------- | :-----: | :----------- | :-------------------------------------------------------------------- |
| [@borewit/text-codec](https://github.com/Borewit/text-codec)           |  0.2.2  | MIT          | [LICENSE](licenses/downloads/@borewit/text-codec@0.2.2-LICENSE.txt)   |
| [@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)           | 0.3.720 | MIT          | [LICENSE](licenses/downloads/@dpuse/dpuse-shared@0.3.720-LICENSE.txt) |
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

- **[@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)** 0.3.720 — this month: 2026-06-30
- **[chardet](https://github.com/runk/node-chardet)** 2.2.0 — this month: 2026-06-20
- **[file-type](https://github.com/sindresorhus/file-type)** 22.0.1 — 2 months ago: 2026-04-09
    - **[@tokenizer/inflate](https://github.com/Borewit/tokenizer-inflate)** 0.4.1 — 7 months ago: 2025-11-18 ⚠️
        - **[debug](https://github.com/debug-js/debug)** 4.4.3 — 9 months ago: 2025-09-13 ⚠️
            - **[ms](https://github.com/vercel/ms)** 2.1.3 — 66 months ago: 2020-12-08 ⚠️
        - **[token-types](https://github.com/Borewit/token-types)** 6.1.2 — 5 months ago: 2026-01-01
    - **[strtok3](https://github.com/Borewit/strtok3)** 10.3.5 — 3 months ago: 2026-03-21
        - **[@tokenizer/token](https://github.com/Borewit/tokenizer-token)** 0.3.0 — 59 months ago: 2021-07-12 ⚠️
    - **[token-types](https://github.com/Borewit/token-types)** 6.1.2 — 5 months ago: 2026-01-01
        - **[@borewit/text-codec](https://github.com/Borewit/text-codec)** 0.2.2 — 3 months ago: 2026-03-11
        - **[@tokenizer/token](https://github.com/Borewit/tokenizer-token)** 0.3.0 — 59 months ago: 2021-07-12 ⚠️
        - **[ieee754](https://github.com/feross/ieee754)** 1.2.1 — 68 months ago: 2020-10-27 ⚠️
    - **[uint8array-extras](https://github.com/sindresorhus/uint8array-extras)** 1.5.0 — 10 months ago: 2025-08-22 ⚠️

<!-- DEPENDENCY_TREE_END -->

<!-- BUNDLE_START -->

|Chunk/Module/File|Composition|
|:------ |:-----------|
| dist/dpuse-tool-file-operators.es.js | 163.6 kB · brotli 28.9 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;chardet | `██████░░░░░░░░░░░░░░` 29.5% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/encoding/sbcs.js | `████░░░░░░░░░░░░░░░░` 20.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/encoding/mbcs.js | `█░░░░░░░░░░░░░░░░░░░` 4.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/index.js | `░░░░░░░░░░░░░░░░░░░░` 2.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/encoding/iso2022.js | `░░░░░░░░░░░░░░░░░░░░` 1.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/encoding/unicode.js | `░░░░░░░░░░░░░░░░░░░░` 0.9% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/encoding/utf8.js | `░░░░░░░░░░░░░░░░░░░░` 0.5% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/encoding/ascii.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/utils.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/match.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/fs/browser.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;file-type | `██████░░░░░░░░░░░░░░` 27.5% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source/index.js | `███░░░░░░░░░░░░░░░░░` 15.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source/detectors/zip.js | `█░░░░░░░░░░░░░░░░░░░` 6.5% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source/supported.js | `█░░░░░░░░░░░░░░░░░░░` 2.9% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source/detectors/asf.js | `░░░░░░░░░░░░░░░░░░░░` 0.8% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source/detectors/ebml.js | `░░░░░░░░░░░░░░░░░░░░` 0.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source/detectors/png.js | `░░░░░░░░░░░░░░░░░░░░` 0.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source/parser.js | `░░░░░░░░░░░░░░░░░░░░` 0.5% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;source/tokens.js | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `█████░░░░░░░░░░░░░░░` 23.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;strtok3 | `█░░░░░░░░░░░░░░░░░░░` 4.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/ReadStreamTokenizer.js | `░░░░░░░░░░░░░░░░░░░░` 0.9% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/AbstractTokenizer.js | `░░░░░░░░░░░░░░░░░░░░` 0.9% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/stream/AbstractStreamReader.js | `░░░░░░░░░░░░░░░░░░░░` 0.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/stream/WebStreamDefaultReader.js | `░░░░░░░░░░░░░░░░░░░░` 0.5% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/BlobTokenizer.js | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/BufferTokenizer.js | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/stream/WebStreamByobReader.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/core.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/stream/Errors.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/stream/WebStreamReaderFactory.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/stream/WebStreamReader.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;@dpuse/dpuse-shared | `█░░░░░░░░░░░░░░░░░░░` 4.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dist/dpuse-shared-encoding.es.js | `█░░░░░░░░░░░░░░░░░░░` 3.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dist/dpuse-shared-errors.es.js | `░░░░░░░░░░░░░░░░░░░░` 0.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;@tokenizer/inflate | `█░░░░░░░░░░░░░░░░░░░` 3.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/ZipHandler.js | `█░░░░░░░░░░░░░░░░░░░` 3.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/GzipHandler.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lib/ZipToken.js | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;debug | `█░░░░░░░░░░░░░░░░░░░` 3.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/browser.js | `░░░░░░░░░░░░░░░░░░░░` 1.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/common.js | `░░░░░░░░░░░░░░░░░░░░` 1.5% |
| &nbsp;&nbsp;&nbsp;&nbsp;src → index.ts | `█░░░░░░░░░░░░░░░░░░░` 2.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;ms → index.js | `░░░░░░░░░░░░░░░░░░░░` 1.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;token-types → lib/index.js | `░░░░░░░░░░░░░░░░░░░░` 0.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;uint8array-extras → index.js | `░░░░░░░░░░░░░░░░░░░░` 0.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;@borewit/text-codec → lib/index.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |

<!-- BUNDLE_END -->
