const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var Ball

var BTN1, BTN2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  BTN1 = createImg("right.png");
  BTN1.position(220,30);
  BTN1.size(50,50);
  
BTN1.mouseClicked(hForce);

BTN2 = createImg("up.png");
BTN2.position(20,30);
BTN2.size(50,50);

BTN2.mouseClicked(vForce);

  Ball_options = {
    restitution: 1
  }
 Ball = Bodies.circle(200,100,20, Ball_options);
 World.add(world,Ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();

ellipse(Ball.position.x, Ball.position.y,20);

  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}


function hForce(){
  Matter.Body.applyForce(Ball,{x:0, y:0}, {x:0.05, y:0});
}

function vForce(){
  Matter.Body.applyForce(Ball,{x:0, y:0}, {x:0, y:-0.05});
}