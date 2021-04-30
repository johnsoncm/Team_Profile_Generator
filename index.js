// Packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const objectMap = require('./src/page.template.js');
const Intern = require('./lib/Intern.js')
// const newArray = [];
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee.js');

const employees = [];


function init(){
    startHtml();
    addMember();
}

function addMember(){
    inquirer.prompt([{
        message: "Enter team member's name:",
        name: "name"
    },
    {
        type: "list",
        message: "select team member's role:",
        choices: ["Engineer", "Intern", "Manager"],
        name: "role"
    },
    {
        message: "Enter team member's id:",
        name: "id"
    },
    {
        message: "Enter team members email address:",
        name: "email"
    }])
    .then(function({name, role, id, email}){
        let roleInfo = "";
        if (role === "Engineer"){
            roleInfo = "Github username";
        }else if (role === "Intern"){
            roleInfo = "school name";

        }else{
            roleInfo = "Office Number"
        }
        inquirer.prompt([{
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo"
        },
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["yes", "no"],
            name: "moreMembers"
        }])
        .then(function({roleInfo, moreMembers}){
            let newMember;
            if (role === "Engineer"){
                newMember = new Engineer(name, id, email, roleInfo);
            }else if (role === "Intern"){
                newMember = new Intern(name, id, email, roleInfo);
            }else{
                newMember = new Manager (name, id, email, roleInfo);
            }
            employees.push(newMember);
            addCardsHtml(newMember)
            .then(function(){
                if(moreMembers === "yes"){
                    addMember();
                }else {
                    endHtml();
                }
            });
        });
    });
}




function startHtml(){
    const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        <link rel="stylesheet" type="text/css" href="style.css" />
        <title>My Team</title>
        <style>

        body {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
        }
        .header{
            background-color: rgb(227, 98, 59);
            width: 100%;
        }
        
        .header-text{
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            text-align: center;
            padding-top: 50px;
            padding-bottom: 50px;
        
        }
        
         .card{
            margin: 10px;
            
        }

        .card-body{
            background-color:rgb(52, 235, 235)
        }

        .list-group-item{
            padding: 15px;
        }

        .card-body{
            text-align: center;
        }

        

        </style>
    
    
    </head>
    
    <body>
      <!------Header goes here------>  
    <div class="header">
        <h1 class="header-text">
            My Team
        </h1>
    </div>`
    fs.writeFile("./dist/team.html" , html, function(err){
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}


function addCardsHtml(member){
    return new Promise(function(resolve, reject){
        const name = member.getName();
        const role = member.getRole();
        const email = member.getEmail();
        const id = member.getId();
        let data = "";
        if (role === "Engineer"){
            const github = member.getGithub();
            data = ` <div id="cards-align">
    
            <div class="card" style="width: 18rem;">
              <div class="card-body">
         
                <h5 class="card-title">${name}</h5>
                <p class="card-text">Engineer</p>
                <span>
                <i class="fas fa-glasses"></i>
                 </span>
               
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">Github: <a href="https://www.github.com/${github}" target="_blank">${github}</a></li>
              </ul>
            </div>
            </div>`
        } else if (role === "Intern"){
            const school = member.getSchool();
            data = ` <div id="cards-align">
    
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">Intern</p>
                <span>
                <i class="fas fa-graduation-cap"></i>
                </span>
              </div>
              <ul class="list-group list-group-flush">
              
              <li class="list-group-item">ID: ${id}</li>  
              <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
              </ul>
            </div>
            </div>`
        }else {
            const officeNumber = member.getOfficeNumber();
            data = ` <div id="cards-align">
    
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">Manager</p>
                <span>
                <i class="fas fa-coffee"></i>
                </span>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">Office Phone #: ${officeNumber}</li>
              </ul>
            </div>
            </div>`
        }
        console.log("adding team member");
        fs.appendFile("./dist/team.html" , data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}


function endHtml(){
    const html = `</div>
    </div>
    <body>
    </html>`;

    fs.appendFile("./dist/team.html" , html, function (err){
        if (err){
            console.log(err);
        };
    });
    console.log("end");
}

init();











//User prompts go here

// const mainQuestions = [
//     {
//         type: 'list',
//         name: 'type',
//         message: 'What would you like to build?',
//         choices: ['Manager', 'Engineer', 'Intern', 'Build Team'],
//     },
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is your name?',
//     },

//     {
//         type: 'input',
//         name: 'id',
//         message: 'What is your employee id?',
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'What is your email address?',
//     },


// ];

// // ONLY MANAGER
// const managerQuestion = [
//         {
//         type: 'input',
//         name: 'office',
//         message: 'What is your office number?',

//     },
// ];

//     // //ONLY ENGINEER

//     const engineerQuestion = [
//         { type: 'input',
//         name: 'github',
//         message: 'What is your github profile name?',

//         }
//     ];
   
//         //ONLY INTERN
//            const internQuestion = [
//             {
//                 type: 'input',
//                 name: 'school',
//                 message: 'What school do you attend?',
//             }
//         ];

//         // READY TO BUILD TEAM

//         const teamBuildQuestion = [
//             {
//                 type: 'list',
//                 name: 'team',
//                 message: 'Are you ready to build your team page?',
//                 choices: ["Yes", "No"],
//             }
//         ];
    



// // function writeToFile() {
// // }



//     inquirer
//         .prompt(mainQuestions)
//         .then((data) => {
//             if (data.type === "Intern"){
//                 inquirer
//                 .prompt(internQuestion)
               
//             } else if (data.type === "Manager"){
//                 inquirer
//                 .prompt(managerQuestion)
//             } else if (data.type === "Engineer"){
//                 inquirer
//                 .prompt(engineerQuestion)
//                 //this isn't quite how to do this for building the team page
//             } else if (data.type === "Build Team")
//             inquirer
//             .prompt(teamBuildQuestion);
//         });


 
//             //if data.type 
//             //instead of data pass a newArray
//             //renderHtml(newArray) change renderhtml to renderIntern and make a write to file with
//             //each catagory
//             //loop through render function
//             // console.log("data" ,  data)
//             // fs.writeFileSync('team.html', objectMap.renderHtml(data.type, data.name, data.title, data.id, data.email, data.office),
//                 // console.log("successfully generated html file!"),
//                 // (err) =>
//                 //     err ? console.log(err) :
//                 //     console.log('Successfully generated a html file')
    
    
                    
   

// function internArray (data){
//         if(data.type === "Intern"){
//                 newArray.push(new Intern(data.name, data.id, data.email, data.school));
//                 console.log("new array" , newArray);
//         } else("error")
//     }


//     // function init() {
//     //     console.log("Answer the prompts to generate a team profile!")
//     //     writeToFile();
//     // }

//     // init();