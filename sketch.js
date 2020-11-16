const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObject,groundObject	
var world;
var backImg;

function preload(){
	backImg = loadImage("bg.png");
}
function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(100,370,70);
	groundObject=new ground(width/2,385,width,20);
	dustbinObj=new dustbin(680,380);
	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(backImg);
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
}
function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:90,y:-140});
  	}
}

