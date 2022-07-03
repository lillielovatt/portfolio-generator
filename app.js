const inquirer = require('inquirer');

// const fs = require('fs');
// const generatePage = require("./src/page-template.js");

// // const profileDataArgs = process.argv.slice(2); //, process.argv.length

// // const [yourName, github] = profileDataArgs;
// const pageHTML = generatePage(aName, github);

// fs.writeFile("./index.html", pageHTML, err=>{
//     if(err) throw err;

//     console.log("Portfolio complete!");
// });

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What's your name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("You need to enter a valid name.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "What's your GitHub username? (Required)",
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log("You need to enter a valid name.");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "confirmAbout",
            message: "Would you like to enter some information about yourself for an 'About' section?",
            default: true
        },
        {
            type: "input",
            name: "about",
            message: "Tell me a little about yourself.",
            when: ({ confirmAbout }) => { //what's happening here? Why is it in ({})? And why have it show up after the input?
                //  the when method to conditionally prompt a question based on the user's input.
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
    // .then(answers => console.log(answers));
};


// project name, desc, languages used, link
const promptProject = portfolioData => {
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    };
    console.log("---------add a new project-------------");
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What's your project name? (Required)",
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log("You need to enter a valid name.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "What's your project about? (Required)",
            validate: projectDescInput => {
                if (projectDescInput) {
                    return true;
                } else {
                    console.log("You need to enter a valid name.");
                    return false;
                }
            }
        },
        {
            type: "checkbox",
            name: "languages",
            message: "What did you build this project with?",
            choices: ["JavaScript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"]
        },
        {
            type: "input",
            name: "link",
            message: "Enter the GitHub link to your project. (Required)",
            validate: projectLinkInput => {
                if (projectLinkInput) {
                    return true;
                } else {
                    console.log("You need to enter a valid name.");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "feature",
            message: "Would you like to feature this project?",
            default: false
        },
        {
            type: "confirm",
            name: "confirmAddProject",
            message: "Would you like to enter another project?",
            default: false
        }
    ]).then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
};


promptUser()
    .then(promptProject)
    .then(portfolioData => console.log(portfolioData));