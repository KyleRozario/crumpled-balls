
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1500,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin( 1200,250,30,130);
	dustbin2 = new Dustbin(950,250,30,130);
	dustbin3 = new Dustbin(1075,334,235,40);

	ground = new Ground(750,363,1500,20);

	ball = new Paper(450,200,10);

	keyPressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  drawSprites();

}

function keyPressed() {
 if (keyCode === UP_ARROW){
	 Matter.Body.applyForce(ball.body,ball.body.position,{x:13,y:-20});

}

}
	 


