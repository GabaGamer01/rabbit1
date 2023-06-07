var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);



if (frameCount % 80 == 0){

  var sp = Math.round(random(1,3))

  if(sp == 1){
    ca();
  }
  else if(sp == 2){
    cl1();
  }
  else{
    cl2();
  }
}
  edges= createEdgeSprites();
  rabbit.collide(edges);
rabbit.x=World.mouseX;
  drawSprites();
  
}

function ca(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY=3;
  apple.lifetime = 150;
}

function cl1(){
  r=createSprite(random(50,350),40,10,10);
  r.addImage(redImg);
  r.scale=0.07;
  r.velocityY=3;
  r.lifetime = 150;
}

function cl2(){
  OrangeL=createSprite(random(50,350),40,10,10);
  OrangeL.addImage(orangeImg);
  OrangeL.scale=0.07;
  OrangeL.velocityY=3;
  OrangeL.lifetime = 150;
}