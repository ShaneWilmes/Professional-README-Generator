// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//ISC', 'MIT', 'APACHE 2.0', 'GPL 3.0', 'None
function renderLicenseBadge(license) {
  const licenseType = license;
  let licenseString = " ";
  if (licenseType === "ISC") {
    licenseString = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
  };
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "Apache 2.0") {
    licenseString = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  };
  if (licenseType === "BSD") {
    licenseString = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  };
  return licenseString;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "None") {
    return `8. [License](#License)
    `
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'None') {
    return `## License
${renderLicenseBadge(license)}
    `
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#installation)
  3. [Usage](#usage)  
  4. [GitHub](#gitHub)
  5. [E-mail](#e-mail)
  ${renderLicenseLink(data.licenseType)}

## Description
${data.description}

## GitHub
${data.userName}

## E-mail
${data.email}

## Installation
${data.npmi}

## Usage
${data.usingRepo}

${renderLicenseSection(data.licenseType)}
`
}

module.exports = generateMarkdown;
