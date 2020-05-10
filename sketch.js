const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;
const Constraint=Matter.Constraint;
var world,engine,canvas;
function setup(){
    canvas=createCanvas(1200,400);
    engine=Engine.create();
    world=engine.world;
    var package_options={
        isStatic:true,
        density:1,
        restitution:0
    }
    var ball_options={
        density:1,
        restitution:0.5
    }
    packageBody=Bodies.rectangle(600,20,220,40,package_options);
    ballBody=Bodies.circle(600,180,70,ball_options);
    var options={
        bodyA:packageBody,
        bodyB:ballBody,
        stiffness:0.004,
        length:100
    }
    var chain=Constraint.create(options);
    World.add(world,packageBody);
    World.add(world,ballBody);
    World.add(world,chain);
}
function draw(){
    background(0);
    Engine.update(engine);
    text("Press space bar to randomly oscillate the pendulum from left to right",10,20);
    rectMode(CENTER);
    fill("red");
    rect(packageBody.position.x,packageBody.position.y,220,40);
    ellipseMode(RADIUS);
    fill("blue")
    ellipse(ballBody.position.x,ballBody.position.y,70,70);
    strokeWeight(4);
    stroke("white");
    line(packageBody.position.x,packageBody.position.y,ballBody.position.x,ballBody.position.y);
}
function keyPressed(){
    if(keyCode===32){
        ballBody.position.x=mouseX;
        ballBody.position.y=mouseY;
    }
    else if (keyCode==ENTER){
        ballBody.position.x=600;
    }
}
