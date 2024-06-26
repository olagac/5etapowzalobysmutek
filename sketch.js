let wesoly;
let portfel;
let smutny; 
let wesolyVisible = true; 
let portfely = 150;
let animacja = false;
let tx = 1920 /2 - 300;
let ty = 1080/2 - 300;
let myfont;
let strzalka;
let chapter = 0;

function preload() {
  wesoly = loadImage('mis.png');
  portfel = loadImage('portfel.png');
  smutny = loadImage('mis1.png');
  myfont = loadFont('PixelifySans-VariableFont_wght.ttf');
  strzalka = loadImage('strzalka.png');
}

function setup() {
  createCanvas(1920, 1080);
  textFont(myfont);
  textSize(40)
}

function draw() {
  background(33, 158, 188);
  textAlign(CENTER, CENTER);
  fill(0);
  text('Buy the teddy bear', 1920 / 2, 200)
   if(portfely > 500){
   image(strzalka, 1500, 800);
  }

 translate(1920 /2 - 300, 1080/2 - 300);
  
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
  
 if (chapter == 0) { //ekran przed misiem
    background(0);
    fill(33, 158, 188);
    text('level 4 Depression',1920/ 2 - tx - 150, 1080 /2 - ty, 300);
    
  }
  
 
}

function mouseReleased() {
  
  chapter++;
  
  if (mouseX - tx > 0 && mouseX - tx < portfel.width && mouseY - ty > 0 && mouseY - ty < portfel.height && chapter > 1) {
    //portfelVisible = false; 
   wesolyVisible = false; 
    animacja = true;
  }
  
  if(mouseX  > 1500 && mouseX < 1500 + strzalka.width && mouseY > 800 && mouseY < 800 + strzalka.height){ //kliknięcie strzałki dalej
    window.open('https://ri-shoe.github.io/Projektowanie-CD/', '_self');
   }
  
}
