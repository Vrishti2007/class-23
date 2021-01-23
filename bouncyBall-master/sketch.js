const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Box(100,50,50,50);
    box2 = new Box(300,100,50,50);
    ground = new Ground(200,380,400,10)
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
   ground.display();
}