let myRobot;
let myVijand;
let img;
let gameoverSound;
let timeData;

var ballx = 400;
var bally = 400;
var ballSize = 40;
var score= 0;
var gamestate = "L1";
var startTime;

function preload(){
  img = loadImage("bijlagen/achtergrond.jpg");
  soundFormats('mp3');
  gameoverSound = loadSound('bijlagen/gameover.mp3');
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER);
    textSize(20);
    startTime = millis();
    myRobot = new robot();
    myRobot.yPos = 200;
    myRobot.xPos = 200;
    myRobot.robotSize = 1;
    myRobot.hairColor = color(0);
    myRobot.bodyColor = color(255,128,0);
    myVijand = new vijand();
    myVijand.ballx = 400;
    myVijand.bally = 400;
    myVijand.ballSize = 1;
    myVijand.bodyColor = color(210,128,0);
    loadJSON('http://worldtimeapi.org/api/ip',gotTimeData);
  }
function draw() {
  background(0);
  image (img,0,0, width, height,0,0,img.width,img.height,FILL, CENTER);
  myRobot.display();
  if( gamestate== "L1"){
    level1();
  }  
  if( gamestate== "L2"){
    level2();
  }  
   if( gamestate== "L3"){
    level3();
   }
   if( gamestate== "L4"){
    level4();
   }
   if( gamestate== "L5"){
    level5();
   }
   if( gamestate== "L6"){
    level6();
   }
   if( gamestate== "L7"){
    level7();
   }
   if( gamestate== "over"){
    gameover();
  }
  var elapsedTime = millis() - startTime; // Calculate elapsed time
  
  if (elapsedTime > 33000) { // Check if 50 seconds have passed
    gamestate = "over"; // Set gamestate to "over"
    gameover();
    gameoverSound.play();// waarom moet er nog gedrukt worden
  }
  if (elapsedTime > 35500){
    gamestate = "over";
    gameover();
    gameoverSound.stop();
  }
  fill(255,0,0)
  text("Score: "+ score, width/2, 40)
  text("Score: "+ score, width/2, 40)
  if(timeData){
    let currentTime=new Date(timeData.datetime); // waarom stopt het programma wanneer de tijd is geladen
    let timeString= currentTime.toLocaleTimeString();
    textSize(24);loadJSON('http://worldtimeapi.org/api/ip',gotTimeData);
    text('Tijd: '+timeString,width-width/8, 20);
  }
  else{
    textSize(24);
    text('Loading...',width-width/5,125)
  }
}

function level1(){
  fill(255,0,0)
  text("Level 1", width/2, height -50);
  var distToBall = dist(myVijand.ballx,myVijand.bally,mouseX, mouseY);
  if(distToBall < (myVijand.ballSize*40)/2){
    myVijand.ballx = random(0,windowWidth); 
    myVijand.bally = random(0,windowHeight);
    score = score + 1;
  }
  
  if( score> (5) ) {
    gamestate= "L2";
  }
  stroke(250, 0, 0)
          line (myRobot.xPos+170,myRobot.yPos+130,mouseX,mouseY);
          line (myRobot.xPos+240,myRobot.yPos+130,mouseX,mouseY);
  fill (200,100,50)
  stroke(0)
  myVijand.display();
} // end of level 1

function level2(){
  fill(255,0,0)
  text("Level 2", width/2, height -50);
  myVijand.ballSize = 0.9;
  var distToBall = dist(myVijand.ballx,myVijand.bally,mouseX, mouseY);
  if(distToBall < (myVijand.ballSize*40*0.95)/2){
    myVijand.ballx = random(0,windowWidth); 
    myVijand.bally = random(0,windowHeight);
    score = score + 1;
  }
  
  if( score> 10) {
    gamestate= "L3";
  } 
  stroke(250, 0, 0)
            line (myRobot.xPos+170,myRobot.yPos+130,mouseX,mouseY);
            line (myRobot.xPos+240,myRobot.yPos+130,mouseX,mouseY);
  fill (200,100,50)
  stroke(0)
  myVijand.display();
}

function level3(){
  fill(255,0,0)
  myVijand.ballSize = 0.8;
  var distToBall = dist(myVijand.ballx,myVijand.bally,mouseX, mouseY);
  if(distToBall < (myVijand.ballSize*40)/2){
    myVijand.ballx = random(0,windowWidth); 
    myVijand.bally = random(0,windowHeight);
    score = score + 1;
  }
  
  if( score> 15) {
    gamestate= "L4";
  }
  stroke(250, 0, 0)
            line (myRobot.xPos+170,myRobot.yPos+130,mouseX,mouseY);
            line (myRobot.xPos+240,myRobot.yPos+130,mouseX,mouseY);
  fill (200,100,50)
  stroke(0)
  myVijand.display();
}

function level4(){
  fill(255,0,0)
  myVijand.ballSize = 0.7;
  text("Level 4", width/2, height -50);
  var distToBall = dist(myVijand.ballx,myVijand.bally,mouseX, mouseY);
  if(distToBall < (myVijand.ballSize*40)/2){
    myVijand.ballx = random(0,windowWidth); 
    myVijand.bally = random(0,windowHeight);
    score = score + 1;
  }
  
  if( score> 25) {
    gamestate= "L5";
  }
  stroke(250, 0, 0)
            line (myRobot.xPos+170,myRobot.yPos+130,mouseX,mouseY);
            line (myRobot.xPos+240,myRobot.yPos+130,mouseX,mouseY);
  fill (200,100,50)
  stroke(0)
  myVijand.display();
}

function level5(){
  fill(255,0,0)
  myVijand.ballSize = 0.6;
  text("Level 5", width/2, height -50);
  var distToBall = dist(myVijand.ballx,myVijand.bally,mouseX, mouseY);
  if(distToBall < (myVijand.ballSize*40)/2){
    myVijand.ballx = random(0,windowWidth); 
    myVijand.bally = random(0,windowHeight);
    score = score + 1;
  }
  
  if( score> 35) {
    gamestate= "L6";
  }
  stroke(250, 0, 0)
            line (myRobot.xPos+170,myRobot.yPos+130,mouseX,mouseY);
            line (myRobot.xPos+240,myRobot.yPos+130,mouseX,mouseY);
  fill (200,100,50)
  stroke(0)
  myVijand.display();
}

function level6(){
  fill(255,0,0)
  myVijand.ballSize = 0.55;
  text("Level 6", width/2, height -50);
  var distToBall = dist(myVijand.ballx,myVijand.bally,mouseX, mouseY);
  if(distToBall < (myVijand.ballSize*40)/2){
    myVijand.ballx = random(0,windowWidth); 
    myVijand.bally = random(0,windowHeight);
    score = score + 1;
  }
  
  if( score> 45) {
    gamestate= "L7";
  }
  stroke(250, 0, 0)
            line (myRobot.xPos+170,myRobot.yPos+130,mouseX,mouseY);
            line (myRobot.xPos+240,myRobot.yPos+130,mouseX,mouseY);
  fill (200,100,50)
  stroke(0)
  myVijand.display();
}

function level7(){
  fill(255,0,0)
  myVijand.ballSize = 0.5;
  text("Level 7", width/2, height -50);
  var distToBall = dist(myVijand.ballx,myVijand.bally,mouseX, mouseY);
  if(distToBall < (myVijand.ballSize*40)/2){
    myVijand.ballx = random(0,windowWidth); 
    myVijand.bally = random(0,windowHeight);
    score = score + 1;
  }
  
  if( score> 60) {
    gamestate= "over";
  }
  stroke(250, 0, 0)
            line (myRobot.xPos+170,myRobot.yPos+130,mouseX,mouseY);
            line (myRobot.xPos+240,myRobot.yPos+130,mouseX,mouseY);
  fill (200,100,50)
  stroke(0)
  myVijand.display();
}
    
function gameover(){
  fill(255,0,0)
  textSize(50)
  text ("GAME OVER",width/2, height/2)
  }
  function gotTimeData(data) {
    timeData = data;
    }