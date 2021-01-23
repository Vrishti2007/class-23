class Ground{
    constructor(x,y,width,height){
    
    var option = {
   
        isStatic: true

    }

    //Physics object creation
    this.body = Bodies.rectangle (x,y,width,height,option)
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
        fill ("yellow")
        rect( 0,0 , this.width,this.height   )
    
        pop ();
    }
    
    }