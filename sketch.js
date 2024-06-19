let wesoly;
let portfel;
let smutny; 
let wesolyVisible = true; 
let portfely = 150;
let animacja = false;

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
  if(animacja){
    image(portfel, 50, portfely);
    portfely+=3;
  }else{
    image(portfel, 50, portfely)
  }

 
}

function mouseReleased() {
  
  if (mouseX > 0 && mouseX < portfel.width && mouseY > 0 && mouseY < portfel.height) {
    //portfelVisible = false; 
   wesolyVisible = false; 
    animacja = true;
  }
}
