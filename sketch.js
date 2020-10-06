var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
 movingRect =  createSprite(100, 200, 50, 50);
 fixedRect = createSprite(700, 200, 50, 50);

 movingRect.debug = true;
 fixedRect.debug = true;

 movingRect.shapeColor = "green";
 fixedRect.shapeColor = "green";

 movingRect.velocityX = 3;
 fixedRect.velocityX = -3;
}

function draw() {
  background(220);  
  //movingRect.x =mouseX;
  //movingRect.y=mouseY;   

  if(movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x <= movingRect.width/2+fixedRect.width/2 &&
    fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2 &&
    movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2 ){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    
  }else{

    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    
  }

   
 
  console.log(movingRect.x-fixedRect.x );
  console.log(movingRect.width/2+fixedRect.width/2);

  drawSprites();
}