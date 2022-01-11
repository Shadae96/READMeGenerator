// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseType = data.license[0];
  let licenseBadge = '' 

  if (licenseType === 'MIT') {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };

  if (licenseType === 'Apache') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  };

  if (licenseType === 'BSD 3-Clause License') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  };

  return licenseBadge

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README


function generateMarkdown(data) {
  return `# title ${data.title}
  
  ## Descritpion
  ${data.description}
  ## Table of Contents
  * [ Description](#description)
  * [ Installation](#installation)
  * [ Usage](#usage)
  * [ License](#license)
  * [ Contributing](#contributing)
  * [ Tests](#tests)
  * [ Questions](#questions)
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributions
  ${data.contributions}
  ## Testing
  ${data.testing}
  ## Questions
  ${data.questions}
  ## Email
  ${data.email}`

}

module.exports = generateMarkdown;