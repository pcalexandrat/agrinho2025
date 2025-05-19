function setup() {
  createCanvas(150, 150);
}

function draw() {
  background('#4F48FA');
  fill('red');
  noStroke(); //sem borda
  circle(67, 67, 20);
  circle(83, 67, 20);
  triangle(91, 73, 75, 95, 59, 73);
 
}