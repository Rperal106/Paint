var table, x, y, currHeight, currWidth, currColor;

//call my table1
function preload() {
  table = loadTable('assets/Dungeon.csv', 'csv', 'header');
}

function setup(){

    createCanvas(windowWidth, windowHeight);
    background(0);

    //call the rows in my table
    x = table.getColumn("x");
    y = table.getColumn("y");
    currHeight = table.getColumn("height");
    currWidth = table.getColumn("width");
    currColor = table.getColumn("Color");
    //counter don't need another counter
    //for each because it's just going down
    //a list in this iteration.
}

function draw(){
  makeGrid();
  scale(5);
  makeRoom();
}
function makeRoom(){
  rectMode(CORNER);
  noStroke();
  for(var i=0; i < x.length; i++) {
    fill(currColor[i])
    //text(color[i], )
    rect(x[i], y[i], currWidth[i], currHeight[i]);
  }
}

function makeGrid(){
  stroke(255, 255, 255);
  for (var v = 0; v < height; v += 25) {
    line(v, 0, v, width);
  }
  for (var i = 0; i < width; i += 25) {
    line(0, i, height, i);
  }
}
// var x = [], y = [], c = [], n = 20
//
//
//   function setup(){
//
//     createCanvas(windowWidth, windowHeight);
//     background(0);
//
//     for(var i=0; i<n; i++) {
//       x[i] = random(width);
//       y[i] = random(height);
//       c[i] = color(random(255), random(255), random(255));
//     }
// }
//
// function draw(){
//   colorMode(HSB);
//   translate(30, 30);
//         drawBoard();
// }
//
// function drawBoard(i){
//    for(var i=0; i < n; i++) {
//       drawPip(x[i], y[i] , n = n - (x[i] / y[i]));
//     }
// }
//
// function drawPip(x, y, size){
//   fill((20 + y) % 255, 100, 100);
//   square(x, y, n);
// }




//FIRST ITTERATION
//   function setup(){
//
//     createCanvas(windowWidth, windowHeight);
//     background(255);
// }
//
//
// function draw(){
//   background(0);
//   colorMode(HSB);
//   var loc1 = map(mouseX, 100, width, 0, 255)
//   var loc2 = map(mouseY, 100, height, 0, 255)
//   for (let i= 0; i < 100; i = i + 20){
//
//     drawBoard();
//
//   frameRate(24);
//   }
// }
//
// function drawBoard(i){
//   for (let i= 0; i < 300; i = i + 25){
//     drawPal(10, 10, 50, i+5);
//   drawPip(20, i , 20);
//   drawPip(45, i , 20);
//   }
// }
//
// function drawPip(x, y, size){
//   fill((20 + y) % 255, 100, 100);
//   square(x, y, size);
// }
//
// function drawPal(x, y, s, s2){
//   for (let i= 0; i < 300; i = i + 25){
//     rectMode(CORNER);
//
//     rect(x, y, s, s2);
//   }
// }
