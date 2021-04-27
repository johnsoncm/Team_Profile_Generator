// Packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const objectMap = require('./src/page.template.js');

//User prompts go here

const questions = [
    {
        type: 'list',
        name: 'type',
        message: 'What would you like to build?',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your title?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is your office number?',

    },

]

function writeToFile() {



    inquirer
        .prompt(questions)
        .then((data) => {
            console.log("data" ,  data)
            fs.writeFileSync('team.html', objectMap.renderHtml(data.type, data.name, data.title, data.id, data.email, data.office),
                console.log("successfully generated html file!"),
                (err) =>
                    err ? console.log(err) :
                    console.log('Successfully generated a html file')
    
    
                    
        )});

    }


    function init() {
        console.log("Answer the prompts to generate a team profile!")
        writeToFile();
    }

    init();