// Import the shape classes to be tested from the shapes.js file
const { Triangle, Circle, Square } = require('./shapes.js');

// Test suite for the Triangle class
describe('Triangle', () => {
  // Test case: Check if the render method generates the correct SVG content for a triangle with the provided fill color
  it('should render the SVG content for a triangle with the provided fill color', () => {
    // Create a new Triangle object
    const triangle = new Triangle();
    // Set the fill color of the triangle to 'blue'
    triangle.setColor('blue');
    // Define the expected SVG content for a blue triangle
    const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
    // Assert that the rendered SVG content matches the expected SVG content
    expect(triangle.render()).toEqual(expectedSVG);
  });
});

// same tests for circle and square

describe('Circle', () => {
  it('should render the SVG content for a circle with the provided fill color', () => {
    const circle = new Circle();
    circle.setColor('red');
    const expectedSVG = '<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="80" fill="red"/>  ';
    expect(circle.render()).toEqual(expectedSVG);
  });
});

describe('Square', () => {
  it('should render the SVG content for a square with the provided fill color', () => {
    const square = new Square();
    square.setColor('green');
    const expectedSVG = '<rect x="90" y="40" width="120" height="120" fill="green" />';
    expect(square.render()).toEqual(expectedSVG);
  });
});

