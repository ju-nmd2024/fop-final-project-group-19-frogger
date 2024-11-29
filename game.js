let img1;
let img2;
let gameState = "park";
let gameLives = 3;

function setup() {
  img1 = loadImage("startscreen.png");
  img2 = loadImage("endscreen.png");
  createCanvas(800, 600);
}

function character(x, y) {}

function startScreen() {
  image(img1, 0, 0);
}

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

function parkInfo() {
  strokeWeight(5);
  stroke(0, 0, 0);
  fill(0, 0, 0, 150);
  rect(100, 50, 600, 350);

  rect(330, 450, 140, 50);

  let infoText = "Hey you!";

  noStroke();
  fill(255, 255, 255);
  textSize(20);
  textFont("Courier New");

  text(infoText, 150, 150);
}

function streetScreen() {
  push();
  background(50, 50, 50);

  noStroke();
  fill(100, 100, 100);
  rect(0, 0, 800, 100);
  rect(0, 500, 800, 100);
  rect(0, 260, 800, 80);

  fill(220, 220, 220, 200);
  rect(0, 105, 800, 5);
  rect(0, 175, 800, 5);
  rect(0, 250, 800, 5);

  rect(0, 490, 800, 5);
  rect(0, 420, 800, 5);
  rect(0, 345, 800, 5);

  fill(145, 167, 186, 150);
  ellipse(60, 215, 200, 50);
  ellipse(170, 220, 150, 50);
  ellipse(350, 215, 200, 60);
  ellipse(350, 215, 100, 50);
  ellipse(500, 210, 150, 50);
  ellipse(700, 210, 200, 50);
  ellipse(710, 210, 90, 40);
  ellipse(590, 230, 40, 20);
  pop();
}

function wallScreen() {
  push();
  background(135, 60, 27);

  noStroke();
  fill(92, 40, 17);
  rect(0, 0, 800, 100);
  rect(0, 500, 800, 100);
  rect(0, 260, 800, 80);

  fill(166, 106, 80);
  rect(0, 105, 800, 5);
  rect(0, 175, 800, 5);
  rect(0, 250, 800, 5);

  rect(0, 490, 800, 5);
  rect(0, 420, 800, 5);
  rect(0, 345, 800, 5);
  pop();

  fill(166, 106, 80);
  strokeWeight(6);
  stroke(166, 106, 80);
  line(200, 110, 200, 175);
  line(400, 110, 400, 175);
  line(600, 110, 600, 175);
  line(100, 250, 100, 180);
  line(300, 250, 300, 180);
  line(500, 250, 500, 180);
  line(700, 250, 700, 180);

  line(200, 350, 200, 420);
  line(400, 350, 400, 420);
  line(600, 350, 600, 420);
  line(100, 350, 100, 420);
}

class Carfunction {
  constructor(x, y, r, g, b, speed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.speed = speed;
  }

  update() {
    if (gameState === "park") {
      this.speed = 4;
    } else if (gameState === "parkInfo") {
      this.speed = 4;
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

class Car extends Carfunction {
  constructor(x, y, r, g, b, speed) {
    super(x, y, r, g, b, speed);
  }
  draw() {
    push();
    translate(0, 0);
    fill(this.r - 50, this.g - 50, this.b - 50);
    noStroke();
    rect(this.x, this.y, 100, 50);
    fill(this.r, this.g, this.b);
    rect(this.x + 20, this.y + 5, 60, 40);
    pop();
  }
}

const car1a = new Car(10, 435, 255, 255, 0);

let cars = [car1a];

function draw() {
  if (gameState === "start") {
    startScreen();
  } else if (gameState === "park") {
    parkScreen();

    for (let i = 0; i < 3; i++) {
      cars[i].draw();
      cars[i].update();
    }

    character(100, 100);
  } else if (gameState === "street") {
    streetScreen();

    for (let i = 0; i < 3; i++) {
      cars[i].draw();
      cars[i].update();
    }
  } else if (gameState === "wall") {
    wallScreen();

    for (let i = 0; i < 3; i++) {
      cars[i].draw();
      cars[i].update();
    }
  } else if (gameState === "end") {
    background(115, 65, 125);
  }
}

function mouseClicked() {
  if (
    gameState === "parkInfo" &&
    mouseX > 345 &&
    mouseX < 475 &&
    mouseY > 445 &&
    mouseY < 500
  ) {
    gameState = "park";
  }
}
