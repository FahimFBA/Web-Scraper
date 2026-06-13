const fs = require('fs');

const changelogPath = 'CHANGELOG.md';
const changelog = fs.readFileSync(changelogPath, 'utf8').replace(/\r\n/g, '\n');
const headingPattern = /^## \[?v?(\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?)\]?(?:\s*-\s*(\d{4}-\d{2}-\d{2}))?\s*$/gm;
const firstHeading = headingPattern.exec(changelog);

if (!firstHeading) {
  throw new Error(`No version heading found in ${changelogPath}. Expected "## [1.2.3] - YYYY-MM-DD".`);
}

const nextHeading = headingPattern.exec(changelog);
const version = firstHeading[1];
const date = firstHeading[2] || '';
const tag = `v${version}`;
const bodyStart = firstHeading.index + firstHeading[0].length;
const bodyEnd = nextHeading ? nextHeading.index : changelog.length;
const body = changelog.slice(bodyStart, bodyEnd).trim();

if (!body) {
  throw new Error(`No release notes found for ${tag} in ${changelogPath}.`);
}

function setOutput(name, value) {
  if (!process.env.GITHUB_OUTPUT) {
    console.log(`${name}=${value}`);
    return;
  }

  const delimiter = `EOF_${name}_${Date.now()}`;
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `${name}<<${delimiter}\n${value}\n${delimiter}\n`);
}

setOutput('version', version);
setOutput('date', date);
setOutput('tag', tag);
setOutput('body', body);
