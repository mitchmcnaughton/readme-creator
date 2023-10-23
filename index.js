// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
async function collectUserInput(){
    const questions = [{
        type: 'input',
        name: 'title',
        message: 'Enter your repository title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your  application repository description:',
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'Enter your installation instructions for your application:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter a short description about the usage of your application?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter who contributed to the github project:',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions for your application?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter the license you want to use?',
    },



    ];
    
    return await inquirer.prompt(questions);
}


// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

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

    const licenseText =  `
## License
${renderLicenseBadge(license)}
This project is licensed under the [${license} License](${renderLicenseLink(license)}).
  `;
}



// TODO: Create a function to write README file
function writeToFile(data) {
return `# ${data.title}

## Description
    ${data.description}
    
## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
## Installation
    ${data.installation}
    
## Usage
    ${data.usage}
    
## Contributing
    ${data.contributing}
    
## Tests
    ${data.tests}
    
## Questions
    If you have any questions, please feel free to reach out to me at [${data.email}](mailto:${data.email}). You can also find more of my work on [GitHub](https://github.com/${data.github}).`
}

// TODO: Create a function to initialize app
 async function init() {
    try {
        const userData = await collectUserInput();
        const readmeContent= writeToFile(userData);
        
        fs.writeFileSync('README.md', readmeContent)
        console.log('README file has been generated successfully!');
        
    } catch (error) {
        console.error('Error:', error);
    }
}


init();
