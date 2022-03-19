var spaceImg, space;
var ufoImg, ufo, ufoGroup;
var ship, shipImg;
var gameState = "play"


function preload(){
  spaceImg = loadImage("space.png");
  ufoImg = loadImage("enemy.png");
  shipImg = loadImage("player.png");
}

function setup() {
  createCanvas(600,600);

  space = createSprite(300,300);
  space.addImage("space",spaceImg);
  space.velocityY = 3;
  space.scale = 8;

  ufoGroup = new Group();
  
  ship = createSprite(200,200,50,50);
  ship.scale = 0.3;
  ship.addImage("ship", shipImg);
}


function draw() {
  background("black");
 if(space.y > 400){
      space.y = 300
    } 
  
ship = World.mouse;

      
      spawnUfos();

  
  if(ufo.isTounching(ship)){
      ship.velocityY = 0;
      ship.destroy;
      gameState = "end"
}
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }


function spawnUfos()
 {

  if (frameCount % 240 === 0) {
    var ufo = createSprite(200, -50);
    
    //adicione a função aleatória
    ufo.x = Math.round(random(100,500));

    ufo.addImage(ufoImg);
    
    ufo.velocityY = 3;

    ufo.depth = ghost.depth;
    ship.depth - ship.depth + 1;

    ufo.lifetime = 800;
     
    ufoGroup.add(ufo);
    
  }
}

