function setup() {
  createCanvas(720, 400);
}

function draw(){
background(0)
  fill(225);
  noStroke();
 beginShape();
    circle(360, 180, 40);
    square(340, 180, 40, 2);
  endShape();
    stroke(0);
    noFill();
    curve(355, 160, 350, 180, 360, 180, 360, 160 );
    curve(348, 150, 348, 170, 352, 170, 352, 150 );
    curve(358, 150, 358, 170, 362, 170, 362, 150 );
}
