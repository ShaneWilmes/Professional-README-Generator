// // TODO: Create a function to initialize app
function init (err) {
// TODO: Include packages needed for this application
const inquirer = require('inquirer');  // imports inquirer package or package-lock.json I installed npm i inquirer
const fs = require('fs');  // imports file system
const generate = require('./generateMarkdown');  // imports generateMarkdown.js
const path = require('path');
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
            choices: ['ISC', 'MIT', 'APACHE 2.0', 'BSD', 'None'],
        },
        {
            type: 'input',
            name: 'npmi',
            message: 'What command should be run to install dependencies?',
            default: 'npm i'
        },
        {
            type: 'input',
            name: 'npmTest',
            message: 'What command should be run tests?',
            default: 'npm test'

        },
        {
            type: 'input',
            name: 'usingRepo',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?'
        },
        
    ])

// // TODO: Create a function to write README file
.then((data) => {
    fs.writeFileSync(path.join (process.cwd(), "README.md"), generate(data))
    err ? console.log(err) : console.log('Successfully create README.md!')
  });

    
}

// // Function call to initialize app
init();

