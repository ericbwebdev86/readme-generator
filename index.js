// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application



const inquirer = require('inquirer');
const fs = require('fs');
const genMD = require('./src/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'desc',
            message: 'Tell us about your project. (Required)',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'How do you install your app? (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please provide installation instructions for you app.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'use',
            message: 'What is the usage of your app? (Required)',
            validate: useInput => {
                if (useInput) {
                    return true;
                } else {
                    console.log('Please enter your app usage!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Enter the GitHub usernames of any contributors. (Optional)'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter information on app tests (Optional)'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select applicable licenses. (Optional)',
            choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'BSD 2-clause', 'LGPLv3', 'AGPLv3']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Your GitHub username is required.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Your email address is required.');
                    return false;
                }
            }
        }
    ])
};

// Function call to initialize app
init().then(answers => console.log(answers));
