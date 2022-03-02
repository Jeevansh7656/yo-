var bg, bgImg
var bottomGround
var topGround;
var obstaclesGroup;
var fish_1,fish_2,fish_3,fish_4,fish_5,boy,boyImg

function preload(){
bgImg = loadImage("assets/real ocean.jpg");
fish_1=loadImage("assets/fish1.png");
fish_2=loadImage("assets/fish2.jpg");
//fish_3=loadImage("assets/fish3.png");
fish_4=loadImage("assets/fish4.jpg");
fish_5=loadImage("assets/fish5.png");
boy=loadImage("assets/boy2.jpg");

}

function setup(){

//background image
bg = createSprite(100,150,1800,1500);
bg.addImage(bgImg);
player=createSprite(350,65,10,10);
player.addImage(boy)
player.scale = 0.5

//creating top and bottom grounds
//bottomGround = createSprite(200,390,800,20);
//bottomGround.visible = false;

//topGround = createSprite(200,10,800,20);
//topGround.visible = false;
      
    
fishes1 = createSprite(8,200,20,50);
fishes1.addImage("fishesaqua",fish_1);
fishes1.scale = 0.08;
fishes1.velocityX=3;

fishes2 = createSprite(400,260,20,50);
fishes2.addImage("fishesaqua",fish_2);
fishes2.scale = 0.05;
fishes2.velocityX=-3;

fishes4 = createSprite(400,350,20,50);
fishes4.addImage("fishesaqua",fish_4);
fishes4.scale = 0.04;
fishes4.velocityX=-3;

fishes5 = createSprite(350,300,20,50);
fishes5.addImage("fishesaqua",fish_5);
fishes5.scale = 0.3;
fishes5.velocityX=-3;
obstaclesGroup=createGroup();




}

function draw() {
  
  background(0);
        if(keyIsDown(LEFT_ARROW)){
          player.position.x=player.position.x-5;
        }

        if(keyIsDown(DOWN_ARROW)){
          player.position.y=player.position.y+5;
        }


         spawnObstacles();                                               
          
          
        drawSprites();


        
}


function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(400,165,10,40);
    obstacle.velocityX = -6;
    
     //generate random obstacles
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: obstacle.addImage(fish_1);
               break;
       case 2: obstacle.addImage(fish_2);
               break;
       case 3: obstacle.addImage(fish_4);
               break;
       case 4: obstacle.addImage(fish_5);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale=0.04;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 }