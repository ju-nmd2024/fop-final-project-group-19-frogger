function setup() {
  createCanvas(800, 600);
}

let speed = 5;

function draw() {
  background(50, 50, 50);
}

class Car {
  constructor(x, y, lenght, height) {
    this.x = x;
    this.y = y;
    this.lenght = lenght;
    this.height = height;
  }
  draw() {
    push();
    translate(0, 0);
    rect(this.x, this.y, this.lenght, this.height);
    pop();

    if (this.x <= 800) {
      this.x = this.x + 1 * speed;
    } else if (this.x > 800) {
      this.x = 0 - this.lenght;
    }
  }
}

const firstCar = new Car(50, 100, 100, 50);
const secondCar = new Car(0, 300, 100, 50);
const thirdCar = new Car(150, 300, 100, 50);

function draw() {
  clear();
  firstCar.draw();
  secondCar.draw();
  thirdCar.draw();
}
