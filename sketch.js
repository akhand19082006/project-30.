const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score=0;
var ground,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,rope,box23,box24,box25,box26,box27,box28,box29,box30,box32,box33,box34;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

   // base = new Ground(600,300,200,20);
ground=new Ground(510,600,230,15);
ground2=new Ground(867,300,175,15);

box = new Box (420,575,30,40);
box1 = new Box (450,575,30,40);
box2 = new Box (480,575,30,40);
box3 = new Box (510,575,30,40);
box4 = new Box (540,575,30,40);
box5 = new Box (570,575,30,40);
box6= new Box (600,575,30,40)
box7 = new Box (435,535,30,40)
box8 = new Box (465,535,30,40)
box9 = new Box (495,535,30,40)
box10 = new Box (525,535,30,40)
box11 = new Box (555,535,30,40)
box12 = new Box (585,535,30,40)
box13 = new Box (450,495,30,40)
box14 = new Box (480,495,30,40)
box15 = new Box (510,495,30,40)
box16 = new Box (540,495,30,40)
box17 = new Box (570,495,30,40)
box18 = new Box (480,455,30,40)
box19 = new Box (510,455,30,40)
box20 = new Box (540,455,30,40)
box21 = new Box (510,415,30,40)
box22 = new Box3 (200,500,70,70)
rope=new SlingShot(box22.body,{x:200,y:500})
box23 = new Box (805,280,30,40)
box24 = new Box (835,280,30,40)

box25 = new Box (865,280,30,40)
box26 = new Box (895,280,30,40)
box27 = new Box (925,280,30,40)
box28 = new Box (835,240,30,40)

box29 = new Box (865,240,30,40)

box30 = new Box (895,240,30,40)

box31 = new Box (865,200,30,40)



}

function draw(){
    background(0);

    noStroke();
    textSize(35)
    fill("red")
text("Score"+score,750,50)
    Engine.update(engine);
    strokeWeight(4);
   // base.display();

  ground.display();
  ground2.display();
  box.display();
box1.display();
box1.score();
box2.display();
box2.score();
box3.display();
box3.score();
box4.display();
box4.score();
box5.display();
box5.score();
box6.display();
box6.score();
box7.display();
box7.score();
box8.display();
box8.score();
box9.display();
box9.score();
box10.display();
box10.score();
box11.display();
box11.score();
box12.display();
box12.score();
box13.display();
box13.score();
box14.display();
box14.score();
box15.display();
box15.score();
box16.display();
box16.score();
box17.display();
box17.score();
box18.display();
box18.score();
box19.display();
box19.score();
box20.display();
box20.score();
box21.display();
box21.score();
box22.display();
box23.display();
box23.score();
rope.display();
box24.display();
box24.score();
box25.display();
box25.score();
box26.display();
box26.score();
box27.display();
box27.score();
box28.display();
box28.score();
box29.display();
box29.score();
box30.display();
box30.score();
box31.display();
box31.score();
//Matter.Bodies.polygon(1100, 700, 6, 30, )
}

function mouseDragged(){
    Matter.Body.setPosition(box22.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}
function keyPressed(){
  if(keyCode === 32){
rope.attach(box22.body)}


}
async function backgroundcolor ()
{
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON = await response.json();

var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);
    if(hour>=06 && hour<=18){
       background(255,255,255);
    
    }
    else{
      background(0);
    
    }
bg = background
  
}



