console.log('moire circles');

let x = 0

function setup() {
  createCanvas(1280, 720);
  noFill();
}

function draw() {
  background(0);
  push();
  translate(width/2, height/2);
  for (let i = 0; i < 650; i += 25) {
    
    stroke(255)
    strokeWeight(4)
    ellipse(0, 0, i, i)

  }

 pop();

 push();
  for (let i = 0; i < 650; i += 25) {

    stroke('red')
    strokeWeight(3)
    ellipse( x, 360, 600 - i, 600 - i)
  }
  if (x > width) {
    x = 0
  } else {
    x = x + 0.5;
  }

  pop(); 
}

//credit: https://www.youtube.com/watch?v=62SbexSgQIw