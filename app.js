const inquirer = require('inquirer');

const generatePage = require("./src/page-template.js");

const {writeFile, copyFile} = require("./utils/generate-site.js");

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


const mockData = {
    name: 'Lernantino',
    github: 'lernantino',
    confirmAbout: true,
    about:
        'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
    projects: [
        {
            name: 'Run Buddy',
            description:
                'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
            languages: ['HTML', 'CSS'],
            link: 'https://github.com/lernantino/run-buddy',
            feature: true,
            confirmAddProject: true
        },
        {
            name: 'Taskinator',
            description:
                'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
            languages: ['JavaScript', 'HTML', 'CSS'],
            link: 'https://github.com/lernantino/taskinator',
            feature: true,
            confirmAddProject: true
        },
        {
            name: 'Taskmaster Pro',
            description:
                'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
            languages: ['JavaScript', 'jQuery', 'CSS', 'HTML', 'Bootstrap'],
            link: 'https://github.com/lernantino/taskmaster-pro',
            feature: false,
            confirmAddProject: true
        },
        {
            name: 'Robot Gladiators',
            description:
                'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque.',
            languages: ['JavaScript'],
            link: 'https://github.com/lernantino/robot-gladiators',
            feature: false,
            confirmAddProject: false
        }
    ]
};


promptUser()
    .then(promptProject)
    .then(portfolioData => {
        return generatePage(portfolioData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });


