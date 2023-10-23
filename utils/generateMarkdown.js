// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const license = data.license;
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)',
    GPL: '[![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',

    // Add more licenses and their badge URLs as needed
  };

  return licenseBadges[license] || '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    Apache: 'https://www.apache.org/licenses/LICENSE-2.0',
    GPL: 'https://www.gnu.org/licenses/gpl-3.0',
    // Add more licenses and their links as needed
  };

  return licenseLinks[license] || '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
## License
${renderLicenseBadge(license)}
This project is licensed under the [${license} License](${renderLicenseLink(license)}).
  `;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;