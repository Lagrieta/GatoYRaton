var rectaenMovimiento;
var rectaFija;

function setup() {
  createCanvas(1200,800);

  rectaenMovimiento = createSprite(200,200,50,80);
  rectaenMovimiento = loadImage("Image/Cat1.png");
  rectaenMovimiento.debug = true;
  rectaFija = createSprite(400,200,80,30);
  rectaFija = loadImage("Image/BolaDeEstambre.png");
  rectaFija.debug = true;
}

function draw() {
  background(255,255,255);  

  rectaenMovimiento.x = World.mouseX;
  rectaenMovimiento.y = World.mouseY;

  if (rectaenMovimiento.x - rectaFija.x < rectaFija.width/2 + rectaenMovimiento.width/2 && rectaFija.x - rectaenMovimiento.x < rectaFija.width/2 + rectaenMovimiento.width/2){
    rectaenMovimiento.shapeColor = "red";
    rectaFija.shapeColor = "red";
  } else {
    rectaenMovimiento.shapeColor = "green";
    rectaFija.shapeColor = "green";
  }

  drawSprites();
}