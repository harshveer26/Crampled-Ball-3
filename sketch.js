const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, binSide1, binSide2, binSide3;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(150,270,150);
	ground = new Ground(800,690,1600,30);
	binSide1 = new BinSide1(1225,500,20,320);
	binSide2 = new BinSide2(905,500,20,320);
	binSide3 = new BinSide3(1065,500,300,320);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  Engine.update(engine);  
 

  paper.display();
  ground.display();
  //binSide1.display();
  //binSide2.display();
  binSide3.display();

}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Body.applyForce(paper.body, paper.body.position,{x:1030,y:-1030});
	}
}




