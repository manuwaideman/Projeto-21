const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var bola;
var barra1;
var barra2;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

    ground = new Ground(width/2,670,width,20);
	barra1 = new Ground(520,600,20,100);
	barra2 = new Ground(615,600,20,100);


  var bola_options = {
	isStatic: false,
	restitution: 0.3,
	friction: 0,
	density: 1.2
  }

    Engine.run(engine);

	bola = Bodies.circle(220,180,15,bola_options);
	World.add(world,bola);

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.show();
  barra1.show();
  barra2.show();
  ellipse(bola.position.x,bola.position.y,15);

  Engine.update(engine);
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bola,{x:0, y:0},{x:2, y:-2})
	}
}

