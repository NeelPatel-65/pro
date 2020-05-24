var bullet,tourous,cyclap,wall,thickness;
var speed,weight;




function setup() {

  createCanvas(1600,400);
 
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)

 

  bullet = createSprite(500,150,20,20);
  bullet.velocityX = speed;
 
  tourous = createSprite(500,250,20,20);
  tourous.velocityX = speed;
  
  //cyclap = createSprite(1100,40,50,50);
  //cyclap.velocityX = speed;
  
  wall = createSprite(120,200,thickness,height/2);

  
 
}

function draw() {

  background(0,0,0);  


  if (hasCollided(wall,bullet))
  {
 bullet.velocityX = 0;
 var damage = 0.5*thickness*speed*speed/(thickness*thickness*thickness);

  

  if (damage>10)
  {

  wall.shapeColour = colour(255,0,0);

  }

  if (damage<10)
  {

  wall.shapeColour = colour(0,255,0);

  }}






  
    
 






 hasCollided();

  

 
  drawSprites();
}


function hasCollided (bullet,wall){

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if (bulletRightEdge>=wallLeftEdge) {

    return true


  }
  return false;
}







