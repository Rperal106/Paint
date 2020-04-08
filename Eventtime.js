//array of Bouncing balls
let balls = [];
let spring = 0.05;
let r, g, b;


function preload() {
boop = loadSound('assets/dootdoot.mp3');
}

function setup() {
  createCanvas(610, 600);
  // set up drawing properties
  fill(255);
  noStroke();
  rectMode(CENTER);
  // Create objects
//  for (let i = 0; i < 200; i++) {
  //   balls.push(new Bounce());
   //}
 }
function mouseDragged() {
  let b = new Bounce(mouseX, mouseY)
  balls.push(b);
}

function draw() {
  background(r , g, b, 1);
  frame();
  // update the position
  for (let i = 0; i < balls.length; i++) {
     balls[i].move();
     balls[i].display();
    }
  if (balls.length > 10) {
      balls.splice(0,1);
   }
}

class Bounce {
  constructor() {
    this.d = random(10, 20);
    this.x = mouseX;
    this.y = mouseY;
    this.speed = 1;
    this.Xspeed = random(5, -5);
    this.Yspeed = random(5, -5);
    this.count = 0;
  }

  move() {
    let x2 = map(mouseX, 0, width, 0, 100, true);
    this.x += this.Xspeed
    this.y += this.Yspeed
    // if ball hits top or bottom
    if (this.y > height - (this.d + 10) || this.y < (this.d + 10)) {
      this.Yspeed *= -1;
      if (this.d > 2){
      this.d --;
    }else{this.d = 10}
      r = random(255);
      g = random(255);
      b = random(255);
      boop.play();
      this.count += 1;
    }
      if (this.x > width - (this.d + 10) || this.x < (this.d + 10)) {
        this.Xspeed *= -1;
        r = random(255);
        g = random(255);
        b = random(255);
        boop.play();
       this.count += 1;
      }

  }
   display() {
     stroke(225);
    ellipse(this.x, this.y, this.d*2);
}
 }
function frame(){
  rectMode(CORNER);

  push();
  noStroke();
    fill(0, 0, 0, 100);
    rect(1,0, 61, 600);
  rect(549, 0, 61, 600);
  rect(62, 0, 487, 60);
   rect(62, 540, 487, 60);
  pop();
}
