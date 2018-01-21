class Circle {
    constructor(clr, size, x, y) {
        this.color = clr;
        this.size = size;
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("Is this working?");

        let canvas = document.getElementById('myCanvas');
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
        context.fillStyle = this.color;
        context.fill();
        context.stroke();
    }
}

let circle1 = new Circle("purple", 20, 0, 0);
let circle2 = new Circle("blue", 20, 50, 50);


circle1.draw();
circle2.draw();
