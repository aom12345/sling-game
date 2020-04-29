const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var win=0;
var play=1;
var lose=2;
var a=1;
function setup(){
    var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;
    heroo=new hero(150,200,30,40);
    ground = new Ground(350,height,700,20);
    sling=new Slingshot(heroo.body,{x:200,y:150});
    spin=new Spin(500,300,100,PI/a);
    spin1=new Spin(700,100,200,PI/5);
    ground2=new Ground(1125,height,450,20);
}

function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(4);
    heroo.display();
    sling.display();  
    ground.display();
    spin.display();
    ground2.display();
    spin1.display();
    fill("red");
    strokeWeight(0);
    rect(800,height,200,20);
    if(heroo.body.positionX=740){
    boxsave=new boxes(800,355,210,10);
    }
    if(boxsave.body){
        boxsave.display();
    }
}
function mouseDragged() {
    Matter.Body.setPosition(heroo.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {
    sling.fly();
}

