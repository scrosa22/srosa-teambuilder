const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/template.js");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        message: "What is your office phone number?",
        name: "officeNumber",
        when: ({ role }) => role == "Manager",
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
        when: ({ role }) => role == "Engineer",
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
        when: ({ role }) => role == "Intern",
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("Please enter a valid school name.");
          }
          return true;
        },
      },
    ]);
    if (userResponse.role === "Manager") {
      let newManager = new Manager(
        userResponse.name,
        userResponse.id,
        userResponse.email,
        userResponse.officeNumber
      );
      staffArray.push(newManager);
    } else if (basicAnswers.role === "Engineer") {
      let newEngineer = new Engineer(
        userResponse.name,
        userResponse.id,
        userResponse.email,
        userResponse.username
      );
      staffArray.push(newEngineer);
    } else {
      let newIntern = new Intern(
        userResponse.name,
        userResponse.id,
        userResponse.email,
        userResponse.school
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
        message: "What would you like to do next?",
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