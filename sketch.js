const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,530,70,70);
    box2 = new Box(920,530,70,70);
    log1 = new Log(810,470,300, PI/2);
    enemy = new Pig(810,550);

    box3 = new Box(700,450,70,70);
    box4 = new Box(920,450,70,70);
    log2 =  new Log(810,400,300, PI/2);
    enemy2 = new Pig3(810,450);

    box5= new Box(700,370,70,70);
    box6 = new Box(920,373,70,70);
    log3 = new Log(810,330,300, PI/2);
    enemy3 = new Pig2(810,340);

    box7 = new Box(810,290,70,70);
    log4 = new Log2(760,260,150, PI/7);
    log5 = new Log2(870,260,150, -PI/7);
    
    bird = new Me(200,50);
    slingshot = new SlingShot(bird.body,{x:200, y:420});
}

function draw(){
    if(backgroundImg)
     background(backgroundImg);
    
    noStroke();
    textFont("Dubai")
    textSize(35)
    fill("white")
    text("Score:  " + score, 880, 50)

    strokeWeight("8");
    textFont("Dubai");
    textSize(35);
    fill("red");
    text("The Angry Cousins",875,90)
    
    Engine.update(engine);
    ground.display();
    bird.display();
    slingshot.display();    

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    enemy.display();
    enemy.score();
    enemy2.display();
    enemy2.score();
    enemy3.display();
    enemy3.score();

    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bird.body);
       bird.trajectory=[];  
       Matter.Body.setPosition(bird.body,{x:200, y:420});
    }
}

