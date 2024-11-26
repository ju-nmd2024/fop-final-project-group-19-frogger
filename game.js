function setup() {
  createCanvas(800, 600);
}

let gameState = "park";
let gameLives = 3;

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
  constructor(x, r, g, b, speed) {
    this.x = x;
    this.r = r;
    this.g = g;
    this.b = b;
    this.speed = speed;
  }
  draw() {
    push();
    translate(0, 0);
    fill(this.r - 50, this.g - 50, this.b - 50);
    noStroke();
    rect(this.x, 435, 100, 50);
    fill(this.r, this.g, this.b);
    rect(this.x + 20, 440, 60, 40);
    pop();

    if (gameState === "park") {
      this.speed = 0;
    } else if (gameState === "street") {
      this.speed = 6;
    } else if (gameState === "wall") {
      this.speed = 8;
    }

    if (this.x <= 800) {
      this.x = this.x + this.speed;
    } else if (this.x > 800) {
      this.x = 0 - 100;
    }
  }
}

const car1 = new Car(0, 255, 255, 0);
const car2 = new Car(450, 0, 255, 255);
const car3 = new Car(600, 255, 0, 255);

let cars = [car1, car2, car3];

function draw() {
  if (gameState === "start") {
    background(227, 152, 173);
  } else if (gameState === "park") {
    parkScreen();
    car1.draw();
    car2.draw();
    car3.draw();
  } else if (gameState === "street") {
    background(50, 50, 50);
    car1.draw();
    car2.draw();
    car3.draw();
  } else if (gameState === "wall") {
    background(186, 94, 63);
    car1.draw();
    car2.draw();
    car3.draw();
  } else if (gameState === "end") {
    background(115, 65, 125);
  }
}
