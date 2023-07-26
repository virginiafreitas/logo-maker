// all the test for SVG (not yet teach)
const {Triangle, Square, Circle} = require ('./shapes.js')
//from readme: 
const shape = new Triangle();
shape.setColor("blue");
exportAllDeclaration(shape.render()).toEqual(
    '<polygon points= "150, 18 244, 182 56, 182" fill="blue" />'
);



// we need at least 3 tests
// whats the general format for a test file, as learned in class
// import the required files
    // test suite
    // contains multiple tests
        // each shape needs a test - triangle, circle, square
        // const shape = new Triangle ();
           // shape.setColor...Circle.apply.