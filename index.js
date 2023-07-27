//imported packages
const inquirer = require('inquirer'); // Library for interactive prompts
const fs = require('fs'); // File system module for reading and writing files

//imported the module from shape.js
const { Triangle, Square, Circle } = require('./lib/shapes.js') // Import custom shape classes corresponding to the object 

const path = require('path'); // Path module for working with file paths
const filename = "logo.svg"; // Name of the output SVG file

