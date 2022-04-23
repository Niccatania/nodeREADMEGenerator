const inquirer= require("inquirer");
const fs= require("fs");
const { type } = require("os");

const generateREADME = (data) =>
  `
# ${data.Title}


  ![License: ${data.License}](https://img.shields.io/badge/License-${data.License}-blue.svg)

  ##### Table of Contents  

  [Description](#Description)

  [Usage](#Usage)  

  [Contributors](#Contributors) 

  [Tests](#Tests)  

  [License](#License) 

  [Questions](#Questions)  
  
  [Description](#Description) 
  


## Description:
${data.Description}
## Installation:
${data.Installation}
## Usage:
${data.Usage}
## Contributors:
${data.Contributors}
## Tests:
${data.Tests}
## License
This project uses the ${data.License} license.
## Questions
If you have any questions please contact me through github or email.
Github: https://github.com/${data.gitUser}

Email: ${data.email}
 `;

inquirer
  .prompt([
    {
      type: "input",
      name: "Title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "Description",
      message: "Project Description:",
    },
    {
      type: "input",
      name: "Installation",
      message: "Installation:",
    },
    {
      type: "input",
      name: "Usage",
      message: "Usage:",
    },
    {
      type: "input",
      name: "Contributors",
      message: "Please list the contributors.:",
    },
    {
      type: "input",
      name: "Tests",
      message: "Any Tests?:",
    },
    {
    type: "list",
    name: "License",
    message: "Which license will you use?",
    choices: [
        {
          name: "MIT",
        },
        {
          name: "GPLv2",
        },
        {
          name: "Apache",
        },
      ]

    },
 
  {
    type: "input",
    name: "gitUser",
    message: "What is your Github username?:",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?:",
  },
])
  .then((answers) => {
    const htmlPageContent = generateREADME(answers);

    fs.writeFile("README.md", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });
