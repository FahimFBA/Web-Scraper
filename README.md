# ScrapeLite Guardian

ScrapeLite Guardian is a lightweight Node.js scraper for collecting article titles and links from The Guardian's international news page.

## Features

- Fetches Guardian International HTML with `axios`.
- Parses article data with `cheerio`.
- Starts a small Express server on port `8000`.
- Uses `nodemon` for local development reloads.

## Requirements

- Node.js `20.18.1` or newer
- npm

## Installation

```bash
git clone https://github.com/FahimFBA/scrapelite-guardian.git
cd scrapelite-guardian
npm install
```

## Usage

```bash
npm start
```

The scraper runs when the app starts and prints the collected articles to the terminal.

## Release Process

Releases are driven by `CHANGELOG.md`.

1. Update `package.json` with the new version.
2. Add a new topmost version section to `CHANGELOG.md`.
3. Push the changes to `main`.

The GitHub Action reads the newest changelog version, verifies it matches `package.json`, creates the matching `vX.Y.Z` tag, and publishes a GitHub release using that changelog section as the release notes.

## Project Structure

```text
.
|-- .github/workflows/release.yml
|-- scripts/extract-latest-changelog.js
|-- CHANGELOG.md
|-- index.js
|-- package.json
`-- package-lock.json
```

## Notes

The Guardian changes its frontend markup over time. If the scraper starts returning no articles, update the selector in `index.js`.
