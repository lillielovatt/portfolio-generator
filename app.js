const inquirer=require('inquirer');

// const fs = require('fs');
// const generatePage = require("./src/page-template.js");

// // const profileDataArgs = process.argv.slice(2); //, process.argv.length

// // const [yourName, github] = profileDataArgs;
// const pageHTML = generatePage(aName, github);

// fs.writeFile("./index.html", pageHTML, err=>{
//     if(err) throw err;

//     console.log("Portfolio complete!");
// });

inquirer
    .prompt([
        {
            type:"input",
            name:"name",
            message:"What's your name?"
    
        }
    ])
    .then(answers => console.log(answers));


