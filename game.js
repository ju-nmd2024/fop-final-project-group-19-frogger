function setup() {
  createCanvas(800, 600);
}

let gameState = "street";
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
  ellipse(60, 220, 200, 50);
  ellipse(170, 390, 150, 50);
  ellipse(350, 385, 200, 60);
  ellipse(350, 385, 100, 50);
  ellipse(500, 380, 150, 50);
  pop();
}

class Car {
  constructor(x, y, r, g, b, speed) {
    this.x = x;
    this.y = y;
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
    rect(this.x, this.y, 100, 50);
    fill(this.r, this.g, this.b);
    rect(this.x + 20, this.y + 5, 60, 40);
    pop();
  }
  update() {
    if (gameState === "park") {
      this.speed = 4;
    } else if (gameState === "street") {
      this.speed = 0;
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

/*class CarBack extends Car {
  constructor(x, y, r, g, b, speed){
    super(x, y, r, g , b, speed);
  }

  update(){
    if (gameState === "park") {
      this.speed = 4;
    }  else if (gameState === "street") {
      this.speed = 6;
    } else if (gameState === "wall") {
      this.speed = 8;
    }

    if (this.x <= 800) {
      this.x = this.x - this.speed;
    } else if (this.x > 800) {
      this.x = 800 + 100;
    }
  }
}
*/
class CarBack {
  constructor(x, y, r, g, b, speed) {
    this.x = x;
    this.y = y;
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
    rect(this.x, this.y, 100, 50);
    fill(this.r, this.g, this.b);
    rect(this.x + 20, this.y + 5, 60, 40);
    pop();
  }
  update() {
    if (gameState === "park") {
      this.speed = 4;
    } else if (gameState === "street") {
      this.speed = 6;
    } else if (gameState === "wall") {
      this.speed = 8;
    }

    if (this.x > -100) {
      this.x = this.x - this.speed;
    } else if (this.x <= -100) {
      this.x = 800 + 100;
    }
  }
}

const car1a = new Car(0, 435, 255, 0, 255, 1);
const car1b = new Car(200, 435, 0, 255, 255, 1);
const car1c = new Car(400, 435, 255, 255, 0, 1);

const car2b = new CarBack(300, 355, 255, 255, 255, 1);

let cars = [car1a, car1b, car1c];

function draw() {
  if (gameState === "start") {
    background(227, 152, 173);
  } else if (gameState === "park") {
    parkScreen();
    car1a.draw();
    car1a.update();

    car1b.draw();
    car1b.update();

    car1c.draw();
    car1c.update();

    car2b.draw();
    car2b.update();
  } else if (gameState === "street") {
    streetScreen();

    car1a.draw();
    car1a.update();

    car1b.draw();
    car1b.update();

    car1c.draw();
    car1c.update();
  } else if (gameState === "wall") {
    background(186, 94, 63);
    car1a.draw();
    car1a.update();

    car1b.draw();
    car1b.update();

    car1c.draw();
    car1c.update();
  } else if (gameState === "end") {
    background(115, 65, 125);
  }
}
