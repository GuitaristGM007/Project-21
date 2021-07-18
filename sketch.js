//declare constants for matter library
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//declare engine
let engine;
//declare world
let world;

//declare necessary variables
var ball;
var ground;
var bucket1;
var bucket2;

//call the function to setup the game
function setup() {
//create the canvas of required size
createCanvas(1300, 650);
//initialize the engine
engine = Engine.create();
//add world to engine
world = engine.world;

//create bucket1(blueprint - done)
bucket1 = new bucket(800, 550, 25, 150);
//create bucket2(blueprint - done)
bucket2 = new bucket(1000, 550, 25, 150);

//create ground(blueprint - done)
ground = new land(650, 637.5, 1300, 25);

//define the behaviour of the ball
var ball_options = {
isStatic : false,
restitution : 0.3,
frictionAir : 0,
density : 1.2
}

//create a circular body for ball
ball = Bodies.circle(300, 605, 40, ball_options);
//add the world of ball to World
World.add(world, ball);

//define ellipseMode
ellipseMode(RADIUS);
//define rectMode
rectMode(CENTER);
}

//call the function to draw the objects in the game
function draw() {
//set the color of background
background(51);
//define the ellipse
ellipse(ball.position.x, ball.position.y, 40);
//display bucket1
bucket1.display();
//display bucket2
bucket2.display();
//display ground
ground.display();
//finalise the Engine
Engine.update(engine);


//call the function to apply the force to the ball
theForce();

//call the function to draw the sprites
drawSprites();
}

//function to apply the force at a certain condition
function theForce(){
//give the condition
if (keyCode === UP_ARROW){
//write the code to apply force to the ball
Matter.body.applyForce(ball, {x : 0, y : 0}, {x : 0.2, y : -0.2});
}
}
