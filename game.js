function setup() {
  createCanvas(800, 600);
}

let speed = 5;
let gameState = "park";

function parkScreen() {
  background(66, 184, 61);
  // Grass
  push();
  fill(47, 138, 43);
  noStroke();
  rect(0, 0, 800, 100);
  rect(0, 500, 800, 100);
  rect(0, 260, 800, 80);
  pop();

  //water
  push();
  noStroke();
  fill(129, 218, 240);
  rect(0, 180, 800, 80);
  pop();

  //path
  push();
  noStroke();
  fill(97, 92, 88, 200);
  rect(0, 110, 800, 60);

  rect(0, 350, 800, 60);

  rect(0, 430, 800, 60);

  fill(97, 92, 88, 200);
  rect(0, 115, 800, 50);
  rect(0, 355, 800, 50);
  rect(0, 435, 800, 50);

  pop();
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
  if (gameState === "start") {
    background(227, 152, 173);
  } else if (gameState === "park") {
    parkScreen();

    //firstCar.draw();
    //secondCar.draw();
    //thirdCar.draw();
  } else if (gameState === "street") {
    background(50, 50, 50);
  } else if (gameState === "brickWall") {
    background(186, 94, 63);
  } else if (gameState === "end") {
    background(115, 65, 125);
  }
}
