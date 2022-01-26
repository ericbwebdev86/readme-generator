//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  ![Github license](https://img.shields.io/badge/license-${data.license}-green.svg)


  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Credits](#credits)
  5. [Test](#test)
  6. [Contact](#contact)
  7. [License](#license)
  

  ## Description
  ${data.desc}


  ## Installation
  ${data.install}
  

  ## Usage
  ${data.use}


  ## Credits
  ${data.credits}
  

  ## Test
  ${data.test}


  ## Contact
  Email: ${data.email}   
  Github: https://github.com/${data.github} 


  ## License
  ${data.license} license is a short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
`;
}
//export module
module.exports = generateMarkdown;
