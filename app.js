
// here, we're grabbing the canvas from our HTML document (index.html)
// and we're telling it that we're going to be drawing 2D things on it
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext("2d");

// Here we're creating a class called Circle
// A class is like a cookie-cutter, not the cookie itself because in the class, we define "what it means to be a Circle";
// Then when we tell the computer to make a Circle, it will always know what a Circle is and what makes one up
class Circle {

    // clr, size, x, and y (below) are the inputs we're taking when we create a new circle
    // the code in the constructor is called immediately once when we create a new Circle
    constructor(clr, size, x, y) { 

        // the most confusing thing here is probably the keyword "this"
        // when we create a circle, "this" refers to that specific circle
        // so we're taking our inputs from above and assigning them to our specific circle
        this.color = clr;
        this.size = size;
        this.x = x;
        this.y = y;
    }

    // here, we give our Circle class a command called "draw" (otherwise known as a function)
    draw() {

        // this code (lines 26-42) just draws a circle
        context.beginPath();

        // the "arc" function on line 36 has 6 inputs (separated by commas), 
        // and pretty much the first 3 are useful to us
        // the first one (this.x) refers to the x (left-right position) we pass in when we create a circle
        // the second one (this.y) refers to the y (up-down position) we pass in when we create a circle
        // the third one (this.size) refers to the size we pass in when we create a circle
        context.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);

        // this.color refers to the color we pass in when we create a circle
        context.fillStyle = this.color;
        context.fill();
        context.stroke();
    }
}

// here we create a circle and pass in several values in the same order we specified on line 14
// feel free to change these values to other colors and numbers
// once again, the inputs are color, size, x (horizontal movement), y (vertical movement)
let circle1 = new Circle("purple", 20, 0, 0);
let circle2 = new Circle("blue", 20, 50, 50);

// here we use the draw function we defined on line 26
circle1.draw();
circle2.draw();
