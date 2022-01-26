//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMD = require('./src/generateMarkdown.js');


//function to initialize app
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
            choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause', 'BSD 2-clause']
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
//function to generate README.md file with fs
const writeRM = data => {
    fs.writeFile('./output/README.md', data, err => {
        if (err) throw new Error(err);
        console.log('Your README.md file has been created! You can find it in the output folder.');
    })
}
// Function call to initialize app
init()
    .then(answers => {
        return genMD(answers);
    })
    .then(data => {
        return writeRM(data);
    }).catch(err => {
        console.log(err);
    });
