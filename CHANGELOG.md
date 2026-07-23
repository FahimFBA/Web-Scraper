# Changelog

All notable changes to this project will be documented in this file.

## [1.0.2] - 2026-07-23

### Security

- Bumped `axios` to 1.18.1, fixing 5 Dependabot alerts: HTTP/2 streamed uploads bypassing `maxBodyLength`, an inherited proxy config leak after interceptor cloning, a `maxDepth` bypass in the form serializer, a `NO_PROXY` bypass for `0.0.0.0` local addresses, and a prototype-pollution issue letting auth subfields inject Basic auth.
- Bumped `body-parser` to 2.3.0, fixing a DoS alert where an invalid `limit` value silently disabled request size enforcement.
- Bumped `brace-expansion` to 5.0.8, fixing a high-severity DoS alert from exponential-time expansion of consecutive non-expanding `{}` groups.

## [1.0.1] - 2026-06-23

### Fixed

- Updated transitive dependencies to resolve npm audit vulnerabilities.
- Updated the Guardian article selectors to handle current page markup.
- Normalized article URLs and removed duplicate scraped links.

## [1.0.0] - 2026-06-13

### Changed

- Renamed the project to ScrapeLite Guardian.
- Updated package metadata to use the `scrapelite-guardian` repository.
- Upgraded dependencies and resolved known npm audit vulnerabilities.
- Added a changelog-driven GitHub release workflow.
