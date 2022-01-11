// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
// const prompt = inquirer;

// const prompt = (inquirer)

// TODO: Create an array of questions for user input

const questions = 
inquirer
.prompt([
{ 
    type:"input",
    name:"title",
    message:"What is the title of this project?",
   
},

{ 
    type:"input",
    name:"description",
    message:"Please describe the project",
    },

{ 
    type:"input",
    name:"installation",
    message:"How do I install this project?",
    },
{ 
    type:"input",
    name:"usage",
    message:"How do I use this project?",
    },
{ 
    type:"list",
    name:"license",
    message:"Select a License:",
    choices: [
        "MIT",
        "Apache",,
        "BSD 3-Clause License",
        "None"
    ]
    }
    ,
{ 
    type:"input",
    name:"contributors",
    message:"Who contributed to this project?",
    },
{ 
    type:"input",
    name:"test",
    message:"How do I test this project?",
    },
{ 
    type:"input",
    name:"questions",
    message:"Please provide contact info additional questions:",
    },
{ 
    type:"input",
    name:"username",
    message:"What is your github username?",
    },
 { 
    type:"input",
    name:"email",
    message:"What is your email address?",
    },

])


// // TODO: Create a function to write README file

function writeToFile(fileName, data) {
fs.writeFile(generateMarkdown, data, (err) => {
        err
          ? console.log(err)
          : console.log("GENERATED-README.md was successfully created");
      });
    }
    


// TODO: Create a function to initialize app
// function init() {
//     return inquirer.prompt(questions).then((data) => {
//         writeToFile("GENERATED-README.md", generateMarkdown(data));
//       });
// }

async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        // console.log("Your responses: ", userResponses);
    
    
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses);
        console.log(markdown);
    
        // Write markdown to file
        await writeToFile('GENERATED-README.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// // Function call to initialize app
// init();