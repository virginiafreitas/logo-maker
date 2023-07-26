const inquirer = require('inquirer');
const fs = require('fs');
const filename = "logo.svg";


// the main cards and usually get things imported here
//0. import packages; import the module from shape.js
 const shape = require('./lib/shapes.js') // correstpond to the object 
 const path = require('path')


//  const Triangle = shape.Triangle
//  const Circle = shape.Circle
//  const Square = shape.Square
         // a better way to do this importing only one piece of the model object would be:
         // const {Triangle} = require ('./lib/shapes.js') 
         // const {Square} = require ('./lib/shapes.js')
         // const {Circle} = require ('./lib/shapes.js')
         //or
         //const {Triangle, Square, Circle} = require ('./lib/shapes.js')
         
//1. create an array prompt the users for shape, text, shape color and text color as an object
//2. create the SVG
    //2.1
    //2.9 write the file 





const questions = [
    {
    type: 'input',
    message: 'Provide a text of up to 3 characters to be in your logo:',
    name: 'text',
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

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)}

    function init(){
        inquirer
        .prompt(questions)
        .then((response) => {
          console.log(response)
          writeToFile('logo.svg', shapes({...response}))
        });
      }
    
    init();