let maxShapes;
let colours = ["cyan", "magenta", "yellow"]
let xPosArray
let yPosArray
let coloursArray
let pointsArray
let radiusArray
let margin;
let pointsMax = 14;
let pointsMin = 3;
let radiusMax;
let radiusMin = 5;
let rotationSlowness = 50.0

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupUp()

  blendMode(MULTIPLY);
}

function draw() {
  clear()
  background(255);
  for (let i = 0; i < maxShapes; i++) {
    push();
    translate(xPosArray[i], yPosArray[i]);
    rotate(frameCount / (rotationSlowness + i));
    polygon(0, 0, radiusArray[i], pointsArray[i], coloursArray[i]);
    pop();
  }

}

function polygon(x, y, radius, npoints, colour) {
  let angle = TWO_PI / npoints;
  fill(colour);
  noStroke();
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function setupUp() {
  
margin = width/5 - (width/13);
  xPosArray = []
  yPosArray = []
  coloursArray = []
  pointsArray = []
  radiusArray = []
  maxShapes = width / 5;
  radiusMax = width > height ? height / 10 : width / 10;
  for (let i = 0; i < maxShapes; i++) {
    xPosArray.push(random(width - (margin * 2)) + margin)
    yPosArray.push(random(height - (margin * 2)) + margin)
    coloursArray.push(colours[Math.floor(random(3))])
    pointsArray.push(Math.floor(random(pointsMax)) + pointsMin)
    radiusArray.push(random(radiusMax) + radiusMin)
  }
}

function windowResized() {
  setupUp()
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas('CMYK', 'png')
}
function mousePressed() {
  setupUp()
}
