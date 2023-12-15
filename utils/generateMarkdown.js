// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Content

  ## Description
  ## Installation
  ## Usage
  ## License
  ## Contributing
  ## Tests
  ## Questions
  
  `;
}





module.exports = generateMarkdown;
