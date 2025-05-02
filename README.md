# Web Scraper

A simple Node.js application to scrape article titles and URLs from The Guardian's international news section.

## Description

This project uses `axios` to fetch the HTML content from `https://www.theguardian.com/international` and `cheerio` to parse the HTML and extract relevant article information (specifically, titles and URLs based on the CSS selector `.dcr-5rptw1`).

Currently, the scraped data is logged to the console when the application starts. An Express server is initialized on port 8000 but does not yet serve any data or provide API endpoints.

## Prerequisites

- Node.js and npm (or yarn) installed on your system.

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/FahimFBA/Web-Scraper.git
    cd Web-Scraper
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

## Usage

To run the scraper, use the following command:

```bash
npm start
```

This will start the application using `nodemon`, which automatically restarts the server on file changes. The scraped article titles and URLs will be printed to your terminal console.

## Future Enhancements (Potential)

- Implement API endpoints using Express to serve the scraped data.
- Add error handling for network requests and parsing.
- Make the target URL and CSS selectors configurable.
- Store the scraped data in a database or file.