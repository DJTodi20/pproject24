
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var paper
var rect1 
var rect2
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    ground=new Ground (400,675)
    paper=new Paper(100,640)
    rect1=createSprite(650,660,200,10)
    rect1.shapeColor="white"
    rect2=createSprite(545,555,10,200)
    rect2.shapeColor="white"
    rect3=createSprite(755,555,10,200)
    rect3.shapeColor="white"
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  ground.display();
  paper.display();
 drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }}



