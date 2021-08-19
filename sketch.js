const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var bob_options ={
		restitution: 0.95,
	  }


	var roof_options={
		isStatic:true			
	}

	rope1= new rope(bob1,roof,-80,0);
	rope2= new rope(bob2,roof,-80,0);
	rope3= new rope(bob3,roof,-80,0);
	rope4= new rope(bob4,roof,-80,0);
	rope5= new rope(bob5,roof,-80,0);

	bob1 = Bodies.circle(300,200,20,bob_options);
	World.add(world,bob1);
	bob2 = Bodies.circle(350,200,20,bob_options);
	World.add(world,bob2);
	bob3 = Bodies.circle(400,200,20,bob_options);
	World.add(world,bob3);
	bob4 = Bodies.circle(450,200,20,bob_options);
	World.add(world,bob4);
	bob5 = Bodies.circle(500,200,20,bob_options);
	World.add(world,bob5);


	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,20);
  ellipse(bob2.position.x,bob2.position.y,20);
  ellipse(bob3.position.x,bob3.position.y,20);
  ellipse(bob4.position.x,bob4.position.y,20);
  ellipse(bob5.position.x,bob5.position.y,20);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() { 
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(ball,ball.position,{x:-85,y:85}); 
	} }
