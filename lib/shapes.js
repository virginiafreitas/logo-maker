// Define a base Shape class
class Shape {
  constructor () {
    this.fillColor = "";
  }
  
  setColor(fillColor) {
    this.fillColor = fillColor;
  }
}

// Custom Triangle class that extends the base Shape class
class Triangle extends Shape {
    // Render method to generate the SVG content for a triangle
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}" />`
    }
}

// Custom Circle class that extends the base Shape class
class Circle extends Shape {
    // Render method to generate the SVG content for a circle
    render() {
        return `<circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="80" fill="${this.fillColor}"/>  `
    }
}

// Custom Square class that extends the base Shape class
class Square extends Shape {
    // Render method to generate the SVG content for a square
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.fillColor}" />`
    }
}

// Export the custom shape classes to be used in the index.js file as an object
module.exports = {Triangle, Circle, Square}








