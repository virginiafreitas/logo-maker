//imported packages
const inquirer = require('inquirer'); // Library for interactive prompts
const fs = require('fs'); // File system module for reading and writing files

//imported the module from shape.js
const { Triangle, Square, Circle } = require('./lib/shapes.js') // Import custom shape classes corresponding to the object 

const path = require('path'); // Path module for working with file paths
const filename = "logo.svg"; // Name of the output SVG file

// Array of questions to prompt the user for logo details (shape, text, shape color and text color) as an object
const questions = [
  {
    type: 'input',
    message: 'Provide a text of up to 3 characters to be in your logo:',
    name: 'text',
    validate: function(response) {
      if (response.length > 3) {
        console.log("\n-> Please input text with 3 characters maximum.")
        return;
      }
      return true;
    }
  },
  {
    type: 'input',
    message: 'Provide the color for the text in your logo:',
    name: 'fontcolor',
  },
  {
    type: 'list',
    message: 'Provide the shape you want the logo to be:',
    name: 'shape',
    choices: ["circle", "triangle", "square"]
  },
  {
    type: 'input',
    message: 'Provide the color you want the shape of the logo to be:',
    name: 'shapecolor',
  }
];



