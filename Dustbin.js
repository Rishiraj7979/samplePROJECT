class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
			//restitution:0.3,
			//friction:0.5,
            //density:1.2
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world, this.body);
        }display(){

        var pos=this.body.position;
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(255)
	    rect(this.x,this.y,this.width, this.height);
        pop();
    }
}