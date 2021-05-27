const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;






var bg1,bg2,flake1,flake2;
var bgImage1,bgImage2,flakeImage1,flakeImage2;
var boy,boyImage;




function preload(){

bgImage1 = loadImage("snow1.jpg");
bgImage2 = loadImage("snow2.jpg");
flakeImage1 = loadImage("snow4.webp");
flakeImage2 = loadImage("snow5.webp");
boyImage = loadImage("boy.png");
}

function setup() {
  createCanvas(800,400);
  boy = createSprite(200, 340, 50, 50);
  boy.addImage(boyImage);
  boy.scale= 0.2;

  

 

}

function draw() {
  background(bgImage2);  
  


  boy.display(); 

  
}