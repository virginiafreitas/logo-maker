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

// Function to write data to a file, in this case adding info to the SVG file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// Function to initialize the logo creation process
function init() {
  inquirer

  .prompt(questions) // Prompt the user with the questions array

  .then((response) => {
    console.log("Generated logo.svg.") // Log the confirmation that the logo was created after user responded to all the questions
    let shape;
    if (response.shape === "circle") {
          shape = new Circle() // Create a new Circle object
        } else if (response.shape === "square") {
          shape = new Square() // Create a new Square object
        } else {
          shape = new Triangle() // Create a new Triangle object
        }
    shape.setColor(response.shapecolor) // Set the shape's color based on user input
    // Generate an SVG content using the selected shape and user input
    return `        
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.fontcolor}">${response.text}</text>
    </svg>
    `
  }
  )

  .then(data => {
    writeToFile('logo.svg', data) // Write the SVG data to the 'logo.svg' file
  })

};

