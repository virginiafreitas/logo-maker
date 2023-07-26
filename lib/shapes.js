// create triangle, circle and square classes
class Shape {
    constructor () {
        this.fillColor = "";
        // this.textColor = textColor;
        // this.text = text;
        // this.shape = shape;
    }

    setColor(fillColor) {
        this.fillColor = fillColor;
    }
}

class Triangle extends Shape {
    // each shape class should have a render() method
    render() {
        return ``
    }
}

class Circle extends Shape {
    // each shape class should have a render() method
    render() {
        return `circle xmlns="http://www.w3.org/2000/svg" cx="150" cy="100" r="80" fill=${this.fillColor}/>  `
    }
}

class Square extends Shape {
    // each shape class should have a render() method
    render() {
        return ``
    }
}

// export triangle, circle and square classes as an object
module.exports = {Triangle: Triangle, Circle: Circle, Square: Square}
// or use module.exports = {Triangle, Circle, Square} since in this specific case they have the same spelling










  function shapes(data) {
    return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <${data.shape} cx="150" cy="100" r="80" fill="${data.shapecolor}" />
        <${data.text} x="150" y="125" font-size="60" text-anchor="middle" fill="${data.fontcolor}">SVG</text>
        </svg>
        `;
}

module.exports = shapes;


