
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, height, 1200, 20);
	paper = new Paper(100, 200, 50);
	rightRect = new Dustbin(685, 600, 10, 50);
	leftRect = new Dustbin(515, 550, 10, 50);
	baseRect = new Dustbin(1080, 400, 10, 200);
	baseRect = new Dustbin(900, 400, 10, 200);
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	rightRect.display();
	leftRect.display();
	//baseRect.display();
	ground.display();
	paper.display();
	baseRect.addPic();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 500, y: -600 });
	}
}



