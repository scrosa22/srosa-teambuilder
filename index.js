const inquirer = require("inquirer");
const fs = require("fs");
const createTeam = require("./src/template.js");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let staffArray = [];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the team manager?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the name of the team manager.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the ID of the team manager?",
    validate: (idInput) => {
      if (isNaN(idInput)) {
        return "Please enter a valid ID.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the email of the team manager?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the email of the team manager.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the office number of the team manager?",
    validate: (officeNumberInput) => {
      if (isNaN(officeNumberInput)) {
        return "Please enter a valid office number.";
      }
      return true;
    },
  },
];


function init() {
    return inquirer.prompt(managerQuestions);
};

init()
    .then(data => {
        return new Manager(data);
    })
    .then(data => {
        const managerEntry = data;
        console.log(data);
        employeeList.push(managerEntry);
        console.log(employeeList);
    // })
    // .then(addEmployee)
    // .catch(err => {
    //     console.log(err);
    });