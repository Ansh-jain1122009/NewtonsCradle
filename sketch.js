const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball,ball2,ball3,ball4,ball5;
var con; 
var rope1,rope2,rope3,rope4,rope5; 
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

  rope1=new rope(ball,roof,-80,0)
  rope2=new rope(ball2,roof,-80,0)
  rope3=new rope(ball3,roof,-80,0)
  rope4=new rope(ball4,roof,-80,0)
  rope5=new rope(ball5,roof,-80,0)

	var roof_options={
		isStatic:true			
	}

	var ball_options={
		restitution:0.95,
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
	ball = Bodies.circle(300,300,20,ball_options);
	World.add(world,ball);
	ball2 = Bodies.circle(350,300,20,ball_options);
	World.add(world,ball2);
	ball3 = Bodies.circle(400,300,20,ball_options);
	World.add(world,ball3);
	ball4= Bodies.circle(450,300,20,ball_options);
	World.add(world,ball4);
	ball5 = Bodies.circle(500,300,20,ball_options);
	World.add(world,ball5);

  constructor(body1,body2,pointA,pointB)
  {
    this.pointA=pointA;
	this.pointB=pointB;

	var options={
    bodyA:body1,
	bodyB:body2,
	pointB:{x:this.pointA,y:this.pointB}
	}

	con = Matter.Constraint.create({
		pointA:{x:200,y:200},
		bodyB:ball,
		length:100,
		stiffness:0.1 
	   })
	   World.add(world,con);



  }	
}	

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  ellipse(ball4.position.x,ball4.position.y,20);
  ellipse(ball5.position.x,ball5.position.y,20);

  if(keyDown("UP_ARROW")){
    vforce();
  }
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
 function vforce(){

	Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0});
	
}