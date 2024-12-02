let img1;
let img2;
let gameState = "park";
let gameLives = 3;
let catX = 400;
let catY = 550;

function setup() {
  img1 = loadImage("startscreen.png");
  img2 = loadImage("endscreen.png");
  createCanvas(800, 600);
}

function character(x,y){
    //cat
    push();
    noStroke();
    fill(222, 205, 177);
    ellipse(x, y, 45);
    ellipse(x , y-30, 30, 25);
    triangle(x-20, y-45, x-15, y-30, x-10, y- 40);
    triangle(x+20, y-45, x+10, y-40, x+15, y-30);
    beginShape();
    vertex(x+5, y+20);
    bezierVertex(x+5, y+45, x-50, y+25, x-50, y-10);
    endShape();
    pop();
}
//image for start screen
function startScreen() {
  image(img1, 0, 0);
}
//background for first game screen
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
//text bubble for first game screen
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
//background for second game screen
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
//background for third game screen
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
//method for obscales moving forwards
class Carfunction {
  constructor(x, y, r, g, b, speed, addSpeed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.speed = speed;
    this.addSpeed = addSpeed;
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
      this.x = this.x + (this.speed + this.addSpeed);
    } else if (this.x > 800) {
      this.x = 0 - 100;
    }
  }
}
//method for obstacles moving backwards
class CarfunctionBack {
  constructor(x, y, r, g, b, speed, addSpeed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.speed = speed;
    this.addSpeed = addSpeed;
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

    if (this.x >= -180) {
      this.x = this.x - (this.speed + this.addSpeed);
    } else if (this.x < -180) {
      this.x = 800 + 100;
    }
  }
}
//design for cars on screen 1 and two moving forwards
class Car extends Carfunction {
  constructor(x, y, r, g, b, speed, addSpeed) {
    super(x, y, r, g, b, speed, addSpeed);
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
//design for cars on screen 1 and 2 moving backwards
class CarBack extends CarfunctionBack {
  constructor(x, y, r, g, b, speed, addSpeed) {
    super(x, y, r, g, b, speed, addSpeed);
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

// design for loggs
class LoggForward extends CarfunctionBack {
  constructor(x, y, r, g, b, speed, addSpeed) {
    super(x, y, r, g, b, speed, addSpeed);
  }
  draw() {
    push();
    translate(0, 0);
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, 180, 60, 20);
    fill(this.r + 20, this.g + 20, this.b + 20);
    rect(this.x + 5, this.y + 5, 20, 50, 20);
    pop();
  }
}

//car objects
const car1a = new Car(100, 435, 255, 255, 0, 0, 0);
const car1b = new Car(300, 435, 0, 255, 255, 0, 0);
const car1c = new Car(600, 435, 255, 0, 255, 0, 0);
const car1d = new Car(700, 355, 255, 255, 255, 0, 1);
const car1e = new Car(0, 355, 255, 255, 100, 0, 1);
const car1f = new Car(450, 355, 0, 0, 100, 0, 1);

const car2a = new CarBack(200, 115, 200, 200, 200, 0, 2);
const car2b = new CarBack(700, 115, 250, 250, 200, 0, 2);
const logg1a = new LoggForward(100, 190, 102, 61, 46, 0, 0);
const logg1b = new LoggForward(400, 190, 102, 61, 46, 0, 0);
const logg1c = new LoggForward(700, 190, 102, 61, 46, 0, 0);
//car arrays
let carsForward = [car1a, car1b, car1c, car1d, car1e, car1f];
let carsBackward = [car2a, car2b];
let loggForward = [logg1a, logg1b, logg1c];

function draw() {
  if (gameState === "start") {
    startScreen();
  } else if (gameState === "park") {
    parkScreen();

    for (let i = 0; i < 6; i++) {
      carsForward[i].draw();
      carsForward[i].update();
    }

    for (let i = 0; i < 2; i++) {
      carsBackward[i].draw();
      carsBackward[i].update();
    }
    for (let i = 0; i < 3; i++) {
      loggForward[i].draw();
      loggForward[i].update();
    }
    character(catX, catY);

  } else if (gameState === "street") {
    streetScreen();

    for (let i = 0; i < 3; i++) {
      carsForward[i].draw();
      carsForward[i].update();
    }
  } else if (gameState === "wall") {
    wallScreen();

    for (let i = 0; i < 3; i++) {
      carsForward[i].draw();
      carsForward[i].update();
    }
  } else if (gameState === "end") {
    background(115, 65, 125);
  }
}

function keyPressed(){
  if (keyCode === UP_ARROW && catY>80){
    catY = catY - 80;
  }
  else if(keyCode === DOWN_ARROW && catY<540){
    catY = catY + 80;
  }
  if (keyCode === LEFT_ARROW && catX > 90) {
    catX = catX - 80;
  }
  else if (keyCode === RIGHT_ARROW && catX < 710){
    catX = catX + 80;
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
