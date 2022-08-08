var bg, bgImg
var bottomGround
var topGround
var bird, birdImg
var pipeImg

function preload(){
bgImg = loadImage("assets/bg.png")
pipeImg = loadImage("assets/pipe.jpg")
birdImg = loadImage("assets/bird2.png")

}

function setup(){
createCanvas(1500,1125)

//criando canto superior e inferior
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//criando o balão     
bird = createSprite(100,200,20,50);
bird.addAnimation("bird",birdImg);
bird.scale = 0.2;



}

function draw() {
  background("white");
  image(bgImg,0,0,width-200,height-200)      
          //fazendo o balão de ar quente pular
          if(keyDown("space")) {
            bird.velocityY = -6 ;
            
          }

          //adicionando gravidade
           bird.velocityY = bird.velocityY + 2;
        spawnObstaclesTop()
        spawnObstaclesDown()
        drawSprites();
        
}

function spawnObstaclesTop(){
  if(frameCount%60===0){
    pipeTop = createSprite(1200,100,100,70)
    pipeTop.velocityX = -10
    pipeTop.addImage(pipeImg)
    pipeTop.scale = 0.6
    pipeTop.rotation += 180
    pipeTop.lifetime = 200
    pipeTop.y = Math.round(random(10,100))
  }
}
function spawnObstaclesDown(){
  if(frameCount%60===0){
    pipeDown = createSprite(1200,700,100,70)
    pipeDown.velocityX = -10
    pipeDown.addImage(pipeImg)
    pipeDown.scale = 0.6
    pipeDown.lifetime = 200
    pipeDown.y = Math.round(random(600,750))
  }
}