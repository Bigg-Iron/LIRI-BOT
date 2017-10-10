// Template strings are neat!
console.log(`Nooode...

`);

// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    },


  ])


  .then(function (inquirerResponse) {
    // if the inquirerRepsonse confirms, we display the response
    if (inquirerResponse.confirm) {
      console.log(`Welcome ${inquirerResponse.username}!`);
    } else {
      console.log(`Something broke...`);

    }

  });