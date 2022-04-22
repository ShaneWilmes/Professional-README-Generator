// TODO: Include packages needed for this application
const inquirer = require('inquirer');  // imports inquirer package or package-lock.json I installed npm i inquirer
const fs = require('fs');  // imports file system

// TODO: Create an array of questions for user input
const generateREADME =

inquirer
    .prompt([
        {
            type: 'input',
            userName: 'userName',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            email: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            projectName: 'projectName',
            message: 'What is the name of your project?',

        },
        {
            type: 'input',
            description: 'description',
            message: 'Give a brief description of your project',
        },
        {
            type: 'list',
            message: 'What kind of license should your project have?',
            licenseType: 'licenseType',
            choices: ['ISC', 'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],

        },
        // {
        //     message: 'What command should be run to install dependencies?',
        //     default: 'npm i',
        // },

    ]);

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
