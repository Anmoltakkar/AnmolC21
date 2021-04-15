var fixedRect, movingRect,rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX = -3;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = 4;
  rect1 = createSprite(200,600,50,20)
  rect1.debug = true;
  rect2 = createSprite(1000,400,70,40)
  rect2.debug = true;
  rect1.shapeColor = "blue"
  rect2.shapeColor = "yellow"
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if (isTouching(rect1, movingRect)) {

    movingRect.shapeColor = "red";
    rect1.shapeColor = "red";

  }
  else {
    movingRect.shapeColor = "blue";
    rect1.shapeColor = "blue";
  }

  /*if(isTouching(rect2, movingRect)){
    movingRect.shapeColor = "red";
    rect2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "blue";
    rect2.shapeColor = "blue";
  }*/
  bounceOff(fixedRect,movingRect);
  drawSprites();
}




