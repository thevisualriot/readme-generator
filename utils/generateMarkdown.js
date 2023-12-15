// function to generate markdown for README
function generateMarkdown(data) {

  let licenseIcon;
  let licenseDescription;
  let installationText;
  let testText;

  // console.log(answers.license);

  switch(data.license){
    case "Apache License 2.0":
      licenseIcon =  "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      licenseDescription = "This repository adheres to the **Apache License 2.0**, offering permissive terms. Users are granted extensive permissions, enabling unrestricted utilization, modification, and distribution, accompanied by a provision for patent rights from contributors.";
      break
    case "Boost":
      licenseIcon = " [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      licenseDescription = "Compliant with the **Boost Software License**, this repository permits unencumbered utilization, modification, and distribution. The license's permissive nature renders it suitable for a spectrum of applications, including both personal and commercial endeavors.";
      break;
    case "Creative Commons":
      licenseIcon = " [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
      licenseDescription = "This repository houses creative works governed by **Creative Commons** licenses. Visitors are encouraged to review the specific license to discern the permissible actions pertaining to usage, sharing, and derivative works of the content.";
      break;
    case "GNU GPL v3":
      licenseIcon = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      licenseDescription = "Aligned with the **GNU General Public License version 3**, this repository upholds strong copyleft principles. Users enjoy the liberty to utilize, modify, and distribute the code, contingent on the commitment to maintaining any derivative works as open source.";
      break;
    case "MIT":
      licenseIcon = " [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      licenseDescription = "In adherence to the **MIT License**, this repository extends unmitigated freedom for usage, modification, and distribution. The license's simplicity and flexibility make it an appealing choice for various projects.";
      break;
    case "None":
      licenseIcon = " [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      licenseDescription = "This repository operates **without a specific license**. While you can peruse the source code, it is crucial to acknowledge the absence of a designated license. Consequently, traditional copyright laws apply, and users are advised to exercise caution and seek clarification from the project maintainers regarding permissible actions and usage terms.";
      break;
    default:
      licenseIcon = " [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      licenseDescription = "This repository operates **without a specific license**. While you can peruse the source code, it is crucial to acknowledge the absence of a designated license. Consequently, traditional copyright laws apply, and users are advised to exercise caution and seek clarification from the project maintainers regarding permissible actions and usage terms.";
      break;
  }

  switch(data.installation){
    case "nmp installation required":
      installationText = "To set up this project, ensure you have Node.js installed. Then, in your terminal, run: `npm install`. This command will fetch and install the necessary dependencies, getting you ready to dive into the project seamlessly."
      break;
    default:
      installationText = data.installation;
      break;
  }

  switch(data.tests){
    case "npm run test":
      testText = "To execute the testing suite, use: `npm run test`. This command will run the project's tests, allowing you to assess its functionality and ensure everything is in order.";
      break;
    default:
      testText = data.tests;
      break;
  }

  return `
  ${licenseIcon}
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${installationText}
  ## Usage
  ${data.usage}
  ## License
  ${licenseDescription}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${testText}
  ## Questions
  In case of any further question contact me at ${data.email} or visit my github account [@${data.username}](https://www.github.com/${data.username})
  
  </br></br></br>
  
  ---
  <span style="color: #899499;">*Created with <a href="https://github.com/thevisualriot/readme-generator" style="color: #ffa500;">Readme Generator</a> by <a href="https://www.github.com/thevisualriot" style="color: #ffa500;">The Visual Riot</a>.*</span>

  
  `;
}





module.exports = generateMarkdown;
