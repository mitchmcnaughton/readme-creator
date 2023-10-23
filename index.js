//installing required libs
const inquirer = require('inquirer');
const fs = require('fs');

// all the license badges from github
const licenseBadges = {
    'AFL-3.0': '![AFL-3.0](https://img.shields.io/badge/License-AFL--3.0-blue.svg)',
    'Apache-2.0': '![Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-blue.svg)',
    'Artistic-2.0': '![Artistic-2.0](https://img.shields.io/badge/License-Artistic--2.0-blue.svg)',
    'BSL-1.0': '![BSL-1.0](https://img.shields.io/badge/License-BSL--1.0-blue.svg)',
    'BSD-2-Clause': '![BSD-2-Clause](https://img.shields.io/badge/License-BSD--2--Clause-blue.svg)',
    'BSD-3-Clause': '![BSD-3-Clause](https://img.shields.io/badge/License-BSD--3--Clause-blue.svg)',
    'BSD-3-Clause-Clear': '![BSD-3-Clause-Clear](https://img.shields.io/badge/License-BSD--3--Clause--Clear-blue.svg)',
    'BSD-4-Clause': '![BSD-4-Clause](https://img.shields.io/badge/License-BSD--4--Clause-blue.svg)',
    '0BSD': '![0BSD](https://img.shields.io/badge/License-0BSD-blue.svg)',
    'CC': '![CC](https://img.shields.io/badge/License-CC-blue.svg)',
    'CC0-1.0': '[![CC0-1.0](https://img.shields.io/badge/License-CC0--1.0-blue.svg)',
    'CC-BY-4.0': '![CC-BY-4.0](https://img.shields.io/badge/License-CC--BY--4.0-blue.svg)',
    'CC-BY-SA-4.0': '![CC-BY-SA-4.0](https://img.shields.io/badge/License-CC--BY--SA--4.0-blue.svg)',
    'WTFPL': '![WTFPL](https://img.shields.io/badge/License-WTFPL-blue.svg)',
    'ECL-2.0': '![ECL-2.0](https://img.shields.io/badge/License-ECL--2.0-blue.svg)',
    'EPL-1.0': '![ EPL-1.0](https://img.shields.io/badge/License-EPL--1.0-blue.svg)',
    'EPL-2.0': '![EPL-2.0](https://img.shields.io/badge/lLicense-EPL--2.0-blue.svg)',
    'EUPL-1.1': '![EUPL-1.1](https://img.shields.io/badge/License-EUPL--1.1-blue.svg)',
    'AGPL-3.0': '![AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-blue.svg)',
    'GPL': '![GPL](https://img.shields.io/badge/License-GPL-blue.svg)',
    'GPL-2.0': '![GPL-2.0](https://img.shields.io/badge/License-GPL--2.0-blue.svg)',
    'GPL-3.0': '![GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg)',
    'LGPL': '![LGPL](https://img.shields.io/badge/License-LGPL-blue.svg)',
    'LGPL-2.1': '![LGPL-2.1](https://img.shields.io/badge/License-LGPL--2.1-blue.svg)',
    'LGPL-3.0': '![LGPL-3.0](https://img.shields.io/badge/License-LGPL--3.0-blue.svg)',
    'ISC': '![ISC](https://img.shields.io/badge/License-ISC-blue.svg)',
    'LPPL-1.3c': '![LPPL-1.3c](https://img.shields.io/badge/License-LPPL--1.3c-blue.svg)',
    'MS-PL': '![MS-PL](https://img.shields.io/badge/License-MS--PL-blue.svg)',
    'MIT': '![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'MPL-2.0': '![MPL-2.0](https://img.shields.io/badge/License-MPL--2.0-blue.svg)',
    'OSL-3.0': '![OSL-3.0](https://img.shields.io/badge/License-OSL--3.0-blue.svg)',
    'PostgreSQL': '![PostgreSQL](https://img.shields.io/badge/License-PostgreSQL-blue.svg)',
    'OFL-1.1': '![OFL-1.1](https://img.shields.io/badge/License-OFL--1.1-blue.svg)',
    'NCSA': '![NCSA](https://img.shields.io/badge/License-NCSA-blue.svg)',
    'Unlicense': '![Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)',
    'Zlib': '![Zlib](https://img.shields.io/badge/License-Zlib-blue.svg)',
    'No License': '', 
    };

    //function to collect user input and write the readme file
async function collectUserInputWriteFile() {
    //prompt questions
    try {
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
        name: 'installation',
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
        type: 'list',
        name: 'license',
        message: 'Select a license for your project:',
        //converting the badges array
        choices: Object.keys(licenseBadges),
        
    },
      
    ];

    const answers = await inquirer.prompt(questions);

    // Get the license badge for the selected license
    const selectedLicense = answers.license;
    const licenseBadge = licenseBadges[selectedLicense];

    // Generate the README file
    const readmeContent = 
    `# ${answers.title}

## Description
     ${answers.description}
        
## Table of Contents ${licenseBadge}
   -[Installation](#installation)
   - [Usage](#usage)
   - [License](#license)
   - [Contributing](#contributing)
   - [Tests](#tests)
   - [Questions](#questions) 
        
## Installation
     ${answers.installation}
        
## Usage
    ${answers.usage}
        
## Contributing
    ${answers.contribution}
        
## Tests
    ${answers.test}
    
## License
    This application is covered under the ${answers.license} license
        
## Questions
    If you have any questions, please feel free to reach out to me at ${answers.email}. To see my other work visit (https://github.com/${answers.username}).`;

    // write the readme content from above into a new fileS
    fs.writeFileSync('README.md', readmeContent, 'utf8');
    console.log('README.md has been generated.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

collectUserInputWriteFile();