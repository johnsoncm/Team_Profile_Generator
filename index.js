// Packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');

//User prompts go here

const questions = [
    {
        type: 'list',
        name: 'type',
        message: 'What would you like to build?',
        choices: ['Manager' , 'Engineer' , 'Intern'],
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

inquirer
    .prompt(questions)
    