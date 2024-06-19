let wesoly;
let portfel;
let smutny;
let portfelVisible = true; 
let wesolyVisible = true; 

function preload() {
  wesoly = loadImage('mis.png');
  portfel = loadImage('portfel.png');
  smutny = loadImage('mis1.png');
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  
  if (wesolyVisible) {
    image(wesoly, 0, 0);
  } else {
    image(smutny, 0, 0);
  }

  
  if (portfelVisible) {
    image(portfel, 50, 150);
  }
}

function mouseReleased() {
  
  if (portfelVisible && mouseX > 0 && mouseX < portfel.width && mouseY > 0 && mouseY < portfel.height) {
    portfelVisible = false; 
   wesolyVisible = false; 
  }
}
