const fs = require('fs');
const generatePage = require("./src/page-template.js");

const profileDataArgs = process.argv.slice(2); //, process.argv.length

const [yourName, github] = profileDataArgs;

fs.writeFile("./index.html", generatePage(yourName, github), err=>{
    if(err) throw new Error(err);

    console.log("Portfolio complete!");
});

