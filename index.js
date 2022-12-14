import inquirer from 'inquirer';
import fs from 'fs'

import Manager from "./lib/manager.js";
import Engineer from "./lib/engineer.js";
import Intern from "./lib/intern.js";

import generateTeam from "./src/template.js"

let staffArray = [];

const startQuestionPrompt = async () => {
    const userResponse = await inquirer.prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("Please enter your name.");
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is your ID number?",
        name: "id",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("Please enter a valid ID number.");
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("Please enter a valid email address.");
          }
          return true;
        },
      },
      {
        type: "list",
        message: "What is your new role on the team?",
        name: "role",
        choices: ["manager", "engineer", "intern"],
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
        when: ({ role }) => role == "manager",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("Please enter a valid office number.");
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is your username?",
        name: "username",
        when: ({ role }) => role == "engineer",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("Please enter a valid username.");
          }
          return true;
        },
      },
      {
        type: "input",
        message: "What is the name of your school?",
        name: "school",
        when: ({ role }) => role == "intern",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("Please enter a valid school name.");
          }
          return true;
        },
      },
    ]);

    if (userResponse.role == "manager") {
      let newManager = new Manager(
        userResponse.name,
        userResponse.id,
        userResponse.email,
        userResponse.officeNumber,
        userResponse.role
      );
      staffArray.push(newManager);
    } else if (userResponse.role == "engineer") {
      let newEngineer = new Engineer(
        userResponse.name,
        userResponse.id,
        userResponse.email,
        userResponse.username,
        userResponse.role
      );
      staffArray.push(newEngineer);
    } else {
      let newIntern = new Intern(
        userResponse.name,
        userResponse.id,
        userResponse.email,
        userResponse.school,
        userResponse.role
      );
      staffArray.push(newIntern);
    }
  };

  async function initQuestions() {
    await startQuestionPrompt();
  
    const nextStep = await inquirer.prompt([
      {
        name: "newMember",
        type: "list",
        choices: ["Add new team member", "Create team"],
        message: "What action would you like to do next?",
      },
    ]);
  
    if (nextStep.newMember === "Add new team member") {
      return initQuestions();
    } else {
      return createTeam();
    }
  }

  function createTeam() {
    fs.writeFileSync("./dist/index.html", generateTeam(staffArray), "utf-8");
  }
  
  initQuestions();