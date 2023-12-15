const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    "What is the name of your project?",
    "Provide a description of what your project does.",
    "Describe the installation process of your project.",
    "Provide an example to illustrate how your project is used.",
    "Is there anything necessary to know for the project's usage?",
    "Specify the license under which your project is released.",
    "State if you are open to contributions and specify any requirements.",
    "How can users test the functionality of your project?",
    "Indicate where users can go for help or support related to your project."
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log(data);
    });
}


const runQuestion = () =>
        inquirer.prompt([
            {
                type: "input",
                name: "username",
                message: questions[0]
            },
            {
                type: "input",
                name: "title",
                message: questions[1],
            },
            {
                type: "input",
                name: "description",
                message: questions[2],
            },
            {
                type: "input",
                name: "installation",
                message: questions[3],
            },
            {
                type: "input",
                name: "usage",
                message: questions[4],
            },
            {
                type: "input",
                name: "license",
                message: questions[5],
            },
            {
                type: "input",
                name: "contribution",
                message: questions[6],
            },
            {
                type: "input",
                name: "testing",
                message: questions[7],
            },
            {
                type: "input",
                name: "questions",
                message: questions[8],
            }
        ]);
        


// function to initialize program
function init() {
    runQuestion()
    .then((answers) => writeToFile("newReadme.md", generateMarkdown(answers)))
    .then(() => console.log("Readme generated!"))
    .catch((err) => console.log(err));
};
    

// function call to initialize program
init();
