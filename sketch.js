const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0;
var turns=5;
var particles;
var ball1,ball2,ball3,ball4,ball5;
var r1;
//var gameState="play";
//var b1,b2,b3,b4;
//var a1,a2,a3;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
ground = new Ground(width/2,height,width,20);

ball1= Bodies.circle(140,10,10);
World.add(world,ball1);

ball2=Bodies.circle(random(0,800),10,10);
World.add(world,ball2);

ball3=Bodies.circle(random(0,800),10,10);
World.add(world,ball3);

ball4=Bodies.circle(random(0,800),10,10);
World.add(world,ball4);

ball5=Bodies.circle(random(0,800),10,10);
World.add(world,ball5);

r1=createSprite(140,450,200,20);
r1.shapeColor="yellow";
//World.add(world,r1);

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

  //console.log(ball1.position.y);
 //text("Score : "+score,20,30);
  Engine.update(engine);

  var c= color(random(0,255),random(0,255),random(0,255));

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

    fill(c);
    ellipse(ball1.position.x,ball1.position.y,10,10);
   // ellipse(ball2.position.x,ball2.position.y,10,10);
   // ellipse(ball3.position.x,ball3.position.y,10,10);
    //ellipse(ball4.position.x,ball4.position.y,10,10);
    //ellipse(ball5.position.x,ball5.position.y,10,10);
 
    //if( ball1.position.y>=780){
      //score=score+1;
    //}
    //else if(ball1.position.x>=301 && ball1.position.x<=540 && ball1.position.y>760 ){
      //score++;
   // }

    //else{
      //score++;
    //}
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();

   
  }
//fill("yellow");
  //rect(r1.position.x,r1.position.y,100,20);

  if(isTouching(ball1,r1)){
    score=score+1;
  }

  fill("white")
  strokeWeight(20);
  text("Score: "+score,50,100);

  text("500",20,500);
  text("500",100,500);
  text("500",180,500);
  text("500",260,500);

  text("200",340,500);
  text("200",420,500);
  text("200",500,500);

  text("100",580,500);
  text("100",660,500);
  text("100",740,500);

  drawSprites();
}

function isTouching(a,b){

  if(a.position.y- b.y< a.radius+ b.height/2 && b.y-a.position.y<a.radius+ b.height/2){
    return true
  }
  else{
    return false
  }
}