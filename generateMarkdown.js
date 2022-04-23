// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//ISC', 'MIT', 'APACHE 2.0', 'GPL 3.0', 'None
function renderLicenseBadge(license) {
  const licenseType = license.license[0];
  let licenseString = " ";
  if (licenseType === "ISC") {
    licenseString = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
  };
  if (licenseType === "MIT") {
    licenseString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  };
  if (licenseType === "Apache 2.0") {
    licenseString = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  };
  if (licenseType === "BSD") {
    licenseString = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`
  };
  return licenseString;  

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = license.license[0];
  let licenseString = " ";
  if (licenseLink === "ISC") {
    licenseString = `(https://opensource.org/licenses/ISC)`
  };
  if (licenseLink === "MIT") {
    licenseString = `(https://opensource.org/licenses/MIT)`
  };
  if (licenseLink === "Apache 2.0") {
    licenseString = `(https://opensource.org/licenses/Apache-2.0)`
  };
  if (licenseLink === "BSD") {
    licenseString = `(https://opensource.org/licenses/BSD-3-Clause)`
  };
  return licenseString;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // return `# ${data.title}## license${renderLicenseBadge(license)}`;
}

module.exports = generateMarkdown;
