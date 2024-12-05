let img1;
let img2;
let img3;
let img4;

let gameState = "win";
let gameLives = 3;
let catX = 400;
let catY = 550;

function setup() {
  img1 = loadImage("startscreen.png");
  img2 = loadImage("endscreen.png");
  img3 = loadImage("verysadcat.png");
  img4 = loadImage("endscreen.png");
  createCanvas(800, 600);
}
// cat
function character(x, y) {
  //cat
  push();
  noStroke();
  fill(222, 205, 177);
  ellipse(x, y, 45);
  ellipse(x, y - 30, 30, 25);
  triangle(x - 20, y - 45, x - 15, y - 30, x - 10, y - 40);
  triangle(x + 20, y - 45, x + 10, y - 40, x + 15, y - 30);
  beginShape();
  vertex(x + 5, y + 20);
  bezierVertex(x + 5, y + 45, x - 50, y + 25, x - 50, y - 10);
  endShape();
  pop();
}
//image for start screen
function startScreen() {
  image(img1, 0, 50);
  fill(0, 0, 0);
  rect(500, 400, 200, 80);
  fill(255, 255, 255);
  textSize(40);
  text("START", 540, 450);
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
  line(100, 425, 100, 490);
  line(300, 425, 300, 490);
  line(500, 425, 500, 490);
  line(700, 425, 700, 490);
}

//dead screen
function deadScreen() {
  push();
  noStroke();
  fill(255, 255, 255);
  rect(300, 450, 200, 80);

  fill(0, 0, 0);
  textSize(40);
  text("Try again!", 310, 500);

  textSize(20);
  fill(255, 255, 255);
  text("You lost a life                      lives remain", 200, 100);

  text(gameLives, 410, 100);
  pop();
}
//kill screen
function killScreen() {
  image(img3, 0, 0);
  fill(255, 255, 255);
  textSize(40);
  text("You died", 310, 100);

  fill(255, 255, 255);
  rect(300, 450, 200, 80);
  fill(0, 0, 0);
  textSize(40);
  text("Try again!", 310, 500);
}

function winScreen() {
  image(img4, 0, 50);
  noStroke();
  fill(255, 255, 255);
  textSize(30);
  text("You win!", 340, 530);
  fill(0, 0, 0);
  rect(600, 470, 150, 60);
  fill(255, 255, 255);
  textSize(20);
  text("Play again", 625, 505);
}

//method for car like obscales moving forwards
class carMethodForward {
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

    if (catY === this.y + 35 && catX > this.x && catX < this.x + 100) {
      gameState = "end";
      gameLives = gameLives - 1;
    }
  }
}
//method for car like obstacles moving backwards
class carMethodBack {
  constructor(x, y, r, g, b, speed, addSpeed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.speed = speed;
    this.addSpeed = addSpeed;
  }
  // checks gamestate
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
    //moves the obstacle
    if (this.x >= -180) {
      this.x = this.x - (this.speed + this.addSpeed);
    } else if (this.x < -180) {
      this.x = 800 + 100;
    }
    //checks for collision
    if (catY === this.y + 35 && catX > this.x && catX < this.x + 100) {
      gameState = "end";
      gameLives = gameLives - 1;
    }
  }
}

//method for logg type obstacles
class loggMethodForward {
  constructor(x, y, r, g, b, speed, addSpeed) {
    this.loggX = x;
    this.loggY = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.speed = speed;
    this.addSpeed = addSpeed;
  }

  update() {
    // checks gamestate
    if (gameState === "park") {
      this.speed = 4;
    } else if (gameState === "parkInfo") {
      this.speed = 4;
    } else if (gameState === "street") {
      this.speed = 6;
    } else if (gameState === "wall") {
      this.speed = 8;
    }

    // moves obstacle
    if (this.loggX <= 800) {
      this.loggX = this.loggX + (this.speed + this.addSpeed);
    } else if (this.loggX > 800) {
      this.loggX = -180;
    }

    // // checks for collision
    // if (catY === this.loggY + 40) {
    //   if (catX > this.loggX && catX < this.loggX + 180) {
    //     console.log("log");
    //     catX = catX + this.speed;
    //   } else {
    //     console.log("water");
    //     gameLives = gameLives - 1;
    //     catY = 550;
    //   }
    // }
  }

  check(x, y) {
    if (y === this.loggY + 40) {
      if (x > this.loggX && x < this.loggX + 180) {
        return true;
      }
    }
    return false;
  }
}

//design for cars on screen 1 and two moving forwards
class CarForward extends carMethodForward {
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
class CarBackward extends carMethodBack {
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
class LoggForward extends loggMethodForward {
  constructor(x, y, r, g, b, speed, addSpeed) {
    super(x, y, r, g, b, speed, addSpeed);
  }
  draw() {
    push();
    translate(0, 0);
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.loggX, this.loggY, 180, 60, 20);
    fill(this.r + 20, this.g + 20, this.b + 20);
    rect(this.loggX + 5, this.loggY + 5, 20, 50, 20);
    pop();
  }
}
// design for leaf
class LeafForward extends loggMethodForward {
  constructor(x, y, r, g, b, speed, addSpeed) {
    super(x, y, r, g, b, speed, addSpeed);
  }
  draw() {
    push();
    translate(0, 0);
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.loggX, this.loggY, 180, 50, 50);

    fill(this.r - 20, this.g - 20, this.b - 20);
    ellipse(this.loggX + 40, this.loggY + 20, 30);
    ellipse(this.loggX + 80, this.loggY + 30, 25);
    ellipse(this.loggX + 120, this.loggY + 25, 20);
    ellipse(this.loggX + 160, this.loggY + 20, 10);
    pop();
  }
}

// design for rat
class RatForwards extends carMethodBack {
  constructor(x, y, r, g, b, speed, addSpeed) {
    super(x, y, r, g, b, speed, addSpeed);
  }
  draw() {
    push();
    translate(0, 0);
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, 100, 50, 30);
    ellipse(this.x + 30, this.y + 5, 25);
    ellipse(this.x + 30, this.y + 45, 25);
    fill(0, 0, 0);
    ellipse(this.x + 10, this.y + 15, 8);
    ellipse(this.x + 10, this.y + 35, 8);
    pop();

    push();
    translate(0, 0);
    fill(this.r, this.g, this.b);
    line(this.x + 100, this.y + 25, this.x + 80, this.y - 30);
    pop();
  }
}

// design for rat
class RatBackwards extends carMethodForward {
  constructor(x, y, r, g, b, speed, addSpeed) {
    super(x, y, r, g, b, speed, addSpeed);
  }

  draw() {
    push();
    translate(0, 0);
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, 100, 50, 30);
    ellipse(this.x + 70, this.y + 5, 25);
    ellipse(this.x + 70, this.y + 45, 25);
    fill(0, 0, 0);
    ellipse(this.x + 80, this.y + 15, 8);
    ellipse(this.x + 80, this.y + 35, 8);
    pop();

    push();
    translate(0, 0);
    fill(this.r, this.g, this.b);
    line(this.x, this.y + 25, this.x - 20, this.y - 5);
    pop();
  }
}

//obstacles objects
//level one
const car1a = new CarForward(100, 435, 255, 255, 0, 0, 0);
const car1b = new CarForward(300, 435, 0, 255, 255, 0, 0);
const car1c = new CarForward(600, 435, 255, 0, 255, 0, 0);
const car1d = new CarForward(700, 355, 255, 255, 255, 0, 1);
const car1e = new CarForward(0, 355, 255, 255, 100, 0, 1);
const car1f = new CarForward(400, 355, 0, 0, 100, 0, 1);

const car1g = new CarBackward(200, 115, 200, 200, 200, 0, 2);
const car1h = new CarBackward(700, 115, 250, 250, 200, 0, 2);
const logg1a = new LoggForward(100, 190, 102, 61, 46, 0, 0);
const logg1b = new LoggForward(400, 190, 102, 61, 46, 0, 0);
const logg1c = new LoggForward(700, 190, 102, 61, 46, 0, 0);

//level two
// car line 1
const car2a = new CarBackward(150, 435, 50, 50, 50, 0, 0);
const car2b = new CarBackward(300, 435, 150, 150, 150, 0, 0);
const car2c = new CarBackward(560, 435, 50, 100, 100, 0, 0);
const car2d = new CarBackward(800, 435, 163, 106, 90, 0, 0);
// car line 2
const car2e = new CarForward(700, 355, 181, 161, 60, 0, 0);
const car2f = new CarForward(450, 355, 50, 100, 100, 0, 0);
const car2g = new CarForward(100, 355, 50, 50, 50, 0, 0);
// car line 3
const car2h = new CarBackward(100, 115, 163, 106, 90, 0, 1);
const car2i = new CarBackward(350, 115, 181, 161, 60, 0, 1);
const car2j = new CarBackward(700, 115, 50, 100, 100, 0, 1);

// leaves
const leaf2a = new LeafForward(230, 190, 171, 107, 34, 0, 0);
const leaf2b = new LeafForward(500, 190, 171, 107, 34, 0, 0);
const leaf2c = new LeafForward(0, 190, 171, 107, 34, 0, 0);

// level three
const rat3a = new RatForwards(50, 435, 50, 50, 50, 0, 1);
const rat3b = new RatForwards(250, 435, 50, 50, 50, 0, 1);
const rat3c = new RatForwards(480, 435, 50, 50, 50, 0, 1);
const rat3d = new RatForwards(650, 435, 50, 50, 50, 0, 1);
const rat3e = new RatForwards(800, 435, 50, 50, 50, 0, 1);

const rat3f = new RatBackwards(5, 355, 50, 50, 50, 0, 0);
const rat3g = new RatBackwards(150, 355, 50, 50, 50, 0, 0);
const rat3h = new RatBackwards(500, 355, 50, 50, 50, 0, 0);
const rat3i = new RatBackwards(600, 355, 50, 50, 50, 0, 0);
const rat3j = new RatBackwards(700, 355, 50, 50, 50, 0, 0);

const rat3k = new RatForwards(20, 190, 50, 50, 50, 0, 0);
const rat3l = new RatForwards(200, 190, 50, 50, 50, 0, 0);
const rat3m = new RatForwards(480, 190, 50, 50, 50, 0, 0);
const rat3n = new RatForwards(600, 190, 50, 50, 50, 0, 0);
const rat3o = new RatForwards(750, 190, 50, 50, 50, 0, 0);

const rat3p = new RatForwards(120, 115, 50, 50, 50, 0, 1);
const rat3q = new RatForwards(290, 115, 50, 50, 50, 0, 1);
const rat3r = new RatForwards(400, 115, 50, 50, 50, 0, 1);
const rat3s = new RatForwards(650, 115, 50, 50, 50, 0, 1);
const rat3t = new RatForwards(790, 115, 50, 50, 50, 0, 1);

//obscales arrays
// array level one
let carsForward = [car1a, car1b, car1c, car1d, car1e, car1f, car1g, car1h];
let loggForward = [logg1a, logg1b, logg1c];

//array level two
let carsBackward2 = [
  car2a,
  car2b,
  car2c,
  car2d,
  car2e,
  car2f,
  car2g,
  car2h,
  car2i,
  car2j,
];
let LeavesForward = [leaf2a, leaf2b, leaf2c];

// array level three
let ratForward = [
  rat3a,
  rat3b,
  rat3c,
  rat3d,
  rat3e,
  rat3f,
  rat3g,
  rat3h,
  rat3i,
  rat3j,
  rat3k,
  rat3l,
  rat3m,
  rat3n,
  rat3o,
  rat3p,
  rat3q,
  rat3r,
  rat3s,
  rat3t,
];

function draw() {
  // start

  if (gameLives === 0) {
    gameState = "dead";
  }

  if (gameState === "start") {
    startScreen();
    // park
  } else if (gameState === "park") {
    parkScreen();

    for (let i = 0; i < carsForward.length; i++) {
      carsForward[i].draw();
      carsForward[i].update();
    }

    let catIsonlogg = false;
    for (let i = 0; i < loggForward.length; i++) {
      loggForward[i].draw();
      loggForward[i].update();

      let tempCatisonlogg = loggForward[i].check(catX, catY);
      if (tempCatisonlogg === true) {
        catIsonlogg = true;
        catX = catX + loggForward[i].speed;
      }
    }
    if (catIsonlogg === false && catY === loggForward[0].loggY + 40) {
      gameLives = gameLives - 1;
      gameState = "end";
    }
    character(catX, catY);

    // street
  } else if (gameState === "street") {
    streetScreen();

    let catIsonlogg = false;
    for (let i = 0; i < carsBackward2.length; i++) {
      carsBackward2[i].draw();
      carsBackward2[i].update();
    }

    for (let i = 0; i < LeavesForward.length; i++) {
      LeavesForward[i].draw();
      LeavesForward[i].update();
      let tempCatisonlogg = LeavesForward[i].check(catX, catY);
      if (tempCatisonlogg === true) {
        catIsonlogg = true;
        catX = catX + LeavesForward[i].speed;
      }
    }
    if (catIsonlogg === false && catY === LeavesForward[0].loggY + 40) {
      gameLives = gameLives - 1;
      gameState = "end";
    }

    character(catX, catY);

    // wall
  } else if (gameState === "wall") {
    wallScreen();

    for (let i = 0; i < ratForward.length; i++) {
      ratForward[i].draw();
      ratForward[i].update();
    }

    character(catX, catY);
    // end
  } else if (gameState === "end") {
    image(img3, 0, 0);
    deadScreen();
  } else if (gameState === "dead") {
    killScreen();
  } else if (gameState === "win") {
    winScreen();
  }
}
function keyPressed() {
  if (keyCode === UP_ARROW && catY > 80) {
    catY = catY - 80;
  } else if (keyCode === DOWN_ARROW && catY < 540) {
    catY = catY + 80;
  } else if (keyCode === LEFT_ARROW && catX > 90) {
    catX = catX - 80;
  } else if (keyCode === RIGHT_ARROW && catX < 710) {
    catX = catX + 80;
  }

  if (catY <= 70 && gameState === "park") {
    gameState = "street";
    catX = 400;
    catY = 550;
  } else if (catY <= 70 && gameState === "street") {
    gameState = "wall";
    catX = 400;
    catY = 550;
  } else if (catY <= 70 && gameState === "wall") {
    gameState = "win";
  }
}

function mouseClicked() {
  if (
    gameState === "start" &&
    mouseX > 500 &&
    mouseX < 700 &&
    mouseY > 400 &&
    mouseY < 480
  ) {
    gameState = "park";
  } else if (
    gameState === "end" &&
    mouseX > 300 &&
    mouseX < 500 &&
    mouseY > 450 &&
    mouseY < 530
  ) {
    gameState = "park";
    catX = 400;
    catY = 550;
  } else if (
    gameState === "end" &&
    mouseX > 300 &&
    mouseX < 500 &&
    mouseY > 450 &&
    mouseY < 530
  ) {
    gameState = "start";
  } else if (
    gameState === "win" &&
    mouseX > 600 &&
    mouseX < 750 &&
    mouseY > 475 &&
    mouseY < 530
  ) {
    gameState = "start";
  }
}
