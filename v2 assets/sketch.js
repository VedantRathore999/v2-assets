var ground,ground_image
var trex,trex_image1,trex_image2,trex_image3
var l

function preload(){
ground_image=loadImage("ground2.png")
trex_image1=loadImage("trex1.png")
trex_image2=loadImage("trex3.png")
trex_image3=loadImage("trex4.png")
}

function setup(){
  
createCanvas(600,250)
ground=createSprite(300,220,600,20)
ground.addImage("g1",ground_image)
ground.velocityX=-3
trex=createSprite(50,210,1,1)
trex.addAnimation("tAnimation",trex_image1,trex_image2,trex_image3)
trex.scale=0.4
l=createSprite(300,221,600,1)
}
function draw(){
background("grey")
if(ground.x===-60){
ground.x=300
}
trex.velocityY=trex.velocityY+0.8
if(keyDown("space")&&trex.y>=190){
trex.velocityY=-9
}
trex.collide(l);
drawSprites();
}
//if(language.option.upgrade){
  //toolMaker.location.x=0.3
//}&&constructor.location.x.makeChanges 









