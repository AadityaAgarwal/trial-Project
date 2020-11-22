const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];

var divisionHeight=300;
var score =0;
var turns=0;
var particles;
var gameState="play";
var b1,b2,b3,b4;
var a1,a2,a3;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
ground = new Ground(width/2,height,width,20);


b1= createSprite(140,450,80,20);
b1.shapeColor="yellow";

b2=createSprite(420,450,80,20);
b2.shapeColor="yellow";

b3=createSprite(660,450,80,20);
b3.shapeColor="yellow";

a1=Bodies.circle(140,0,20);
World.add(world,a1);

a2=Bodies.circle(420,0,20);
World.add(world,a2);

a3=Bodies.circle(660,0,20);
World.add(world,a3); 

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    } 
    
}
 


function draw() {
  background("black");
  ellipseMode(RADIUS);
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  var pos=particles.position;

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }  
   
   if(mousePressedOver(b1)){
     turns=turns+1;
     fill(random(0,255));
     ellipse(a1.position.x,a1.position.y,20,20);
     Matter.Body.setStatic(a1,false);
   }
    
   if(mousePressedOver(b2)){
    turns=turns+1;
    fill(random(0,255));
    ellipse(a2.position.x,a2.position.y,20,20);
    Matter.Body.setStatic(a2,false);
  }
   
  if(mousePressedOver(b3)){
    turns=turns+1;
    fill(random(0,255));
    ellipse(a3.position.x,a3.position.y,20,20);
    Matter.Body.setStatic(a3,false);
  }
  
  
   //if(pos.x<=300 && pos.y>=500){
     //score= score+ 500;
   //}
   //else if(pos.x>300 && pos.x<540 && pos.y>500){
    // score=score+200;
   //}
   //else {
     //score= score+100;
   //}

   if(turns===5){
     gameState="end";
   }

   if(gameState==="end"){
     fill("white");
     textSize(50);
     text("Game Over!!",400,400);
   }
  fill("white");
  textSize(20);
  text("Score: "+score,20,50);

  text("500", 20,500);
  text("500", 100,500);  
  text("500", 180,500);
  text("500", 260,500);

  text("200", 340,500);
  text("200", 420,500);
  text("200", 500,500);
  
  text("100", 580,500);
  text("100", 660,500);
  text("100", 740,500);

  fill("red");
  text("CLick the yellow boxes to spawn the balls",0,200);

  drawSprites();
}
