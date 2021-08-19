class Roof{
	constructor(body1,body2,pointA,pointB)
	{
		this.pointA=pointA
		this.pointB=pointB

		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA,y:this.pointB}
		}
	
	this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);

	} 
	display() {
		let pos = this.body.position;
	
		push();
		rectMode(CENTER);
		stroke(255);
		fill(127);
		rect(pos.x, pos.y, this.w, this.h);
		pop();
	  }
}
