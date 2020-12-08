var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 80);
  movingRect=createSprite(200, 200, 80, 50);
  fixedRect.shapeColor="pink";
  movingRect.shapeColor="pink";
  fixedRect.debug=true;
  movingRect.debug=true;
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2)
  {
    fixedRect.shapeColor="Yellow";
    movingRect.shapeColor="Yellow";
  }
  else{
    fixedRect.shapeColor="pink";
  movingRect.shapeColor="pink";
  }
  drawSprites();
}