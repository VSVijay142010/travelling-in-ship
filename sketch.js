var seaImg;
var  shipImg1;
function preload(){
 sea = loadImage("sea.png");
 ship = loadAnimation("ship1.png","ship2.png");

}

function setup(){
  createCanvas(700,700);
  
 
  seaImg=createSprite(50,50);
  seaImg.addImage(sea);
  edges = createEdgeSprites();
  seaImg.scale=0.8;
  seaImg.velocityX=-2

  shipImg1=createSprite(400,400);
  shipImg1.addAnimation("running",ship);
  
  
  




 
  
  

 
 


}

function draw() {
 
  background("blue");
  if (seaImg.x<0){
    seaImg.x = seaImg.width/3;
  }
  

  drawSprites();

}