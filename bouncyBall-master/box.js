class Box{
constructor(x,y,width,height){


//Physics object creation
this.body = Bodies.rectangle (x,y,width,height)
World.add(world,this.body)
this.width = width;
this.height = height;


}

display(){
   var angle = this.body.angle;
    push ();
    translate (this.body.position.x , this.body.position.y)
    rotate (angle)
    rectMode(CENTER)
    fill ("red")
    rect( 0,0 , this.width,this.height   )

    pop ();
}

}