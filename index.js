// TODO: Include packages needed for this application
const inquirer = require('inquirer');  // imports inquirer package or package-lock.json I installed npm i inquirer
const fs = require('fs');  // imports file system

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'userName',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?',

        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a brief description of your project',
        },
        {
            type: 'list',
            name: 'licenseType',
            message: 'What kind of license should your project have?',            
            choices: ['ISC', 'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            name: 'npmi',
            message: 'What command should be run to install dependencies?',
            default: 'nmp test'
        },
        {
            type: 'input',
            name: 'usingRepo',
            message: 'What does the user need to know about using the repo?',
        },
        
    ]);


    // // TODO: Create a function to write README file




// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

