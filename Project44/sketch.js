const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Engine = Matter.Engine;

var body = Body;
var engine = Engine;
var world = World;

var bunny,ground,image;


function preload(){
    img = loadImage("images.jpg");
}


function setup(){
	engine = Engine.create();
	world = engine.world;

    canvas = createCanvas(800,800);
    bunny = new Bunny(500,710,100);
    ground = new Ground(50,740,1800,10);
    lion = new Lion(100,680,50,50);

    Engine.run(engine);
}

function draw(){
    console.log(bunny.y);
    background(img);
    bunny.display();
    ground.display();
    lion.display();
   bunny.movement();

}
