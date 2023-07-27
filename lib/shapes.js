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

