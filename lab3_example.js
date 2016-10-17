function setup() {
  createCanvas(350, 500);
}
var clicked1 = false;
//var epy = -100;
//var clicked2 = flase;
var emx = 0;
var emy = 0;
var counter = 2;
//var scl = 0.5;
//var mpx = width/2-30;
//var mpy = height/2-20+135;

function fork(fPX, fPY, fMX, fMY, tx){
  push();
  translate(fPX,fPY);//(width/2, 2/3*height)
  fill(37,124,255);
  stroke(37,124,255);
  strokeWeight(5);
  strokeJoin(ROUND); 
  quad(-10, 0, -15, height-fPY, 15, height-fPY, 10, 0);//handle
  strokeWeight(10);
  quad(-10, 10, -40, -50, 40, -50, 10, 10);
  rect(-39, -70, 78, 25)
  strokeWeight(5);
  //for(var i=0; i<4, i++){
  triangle(tx, -70, tx+10, -500/3-70, tx+20, -70);
  //  tx = tx + 20;
  //}
  //tx = -40;
  triangle(tx+20, -65, tx+10+20, -500/3-70, tx+20+20, -65);
  triangle(tx+40, -65, tx+10+40, -500/3-70, tx+20+40, -65);
  triangle(tx+60, -65, tx+10+60, -500/3-70, tx+20+60, -65);
  pop();
}

function earbuds(ePX,ePY,eMX,eMY){
  push();
  translate(ePX,ePY);//(width/2, height/2)
  fill(255, 230, 30);
  stroke(255, 230, 30);
  strokeWeight(10);
  strokeJoin(ROUND); 
  //1st layer cables
  curve(40+eMX, -40, -40, 0, 40, 20, 80+eMX, -20);
  curve(40+eMX, -40, -40, -20, 40, 10, 80+eMX, -20);
  curve(40+eMX, -40, -40, -60, 40, -10, 80+eMX, -20);
  //2nd layer cables
  //fill(255, 240, 37);
  stroke(255, 240, 37);
  curve(-30+eMX, -40, -40, -65, 40, -65, 30+eMX, -40);
  curve(-30+eMX, -40, -40, -80, 40, -80, 30+eMX, -40);
  curve(-30+eMX, -40, -40, -95, 40, -95, 30+eMX, -40);
  curve(-60+eMX, -80, -40, -30, 40, -40, -100+eMX, -60);
  curve(-60+eMX, -80, -40, -45, 40, -55, -100+eMX, -60);
  curve(-60+eMX, -80, -40, -15, 40, -30, -100+eMX, -60);
  curve(-30+eMX, -40, -40, 30, 40, 30, 30+eMX, -40);
  //3rd layer cables
  //fill(255, 250, 45);
  stroke(255, 250, 45);
  curve(40+eMX, -40, -40, -70, 40, 5, 80+eMX, -20);
  curve(-150+eMX, -50, -40, 25, 40, -55, -150+eMX, -50);
  curve(-80+eMX, -40, -45, 15, 45, -70, -150+eMX, -50);
  //plug
  stroke(255, 230, 30);
  line(40, 35, 40, 100);
  stroke(255,241,170);
  strokeWeight(12);
  line(40, 100, 40, 110)
  stroke(0);
  strokeWeight(9);
  line(40, 130, 40, 145);
  stroke(255,241,203);
  strokeWeight(15);
  line(40, 110, 40, 125);
  stroke(0);
  strokeWeight(7);
  line(40, 145, 40, 155);
  //earsPlug1
  strokeWeight(10);
  stroke(255, 230, 30);
  line(-40, 35, -40, 100);
  strokeWeight(12);
  stroke(255,241,170);
  line(-40, 100, -40, 110);
  stroke(255,241,203);
  strokeWeight(15);
  line(-40, 110, -40, 125);
  strokeWeight(5);
  ellipse(-30, 135, 30);
  pop();
}

function music(mPX, mPY, scl){
   translate(mPX, mPY);//(width/2-30, height/2-20+135)
   scale(0.7);
   stroke(0);
   strokeWeight(5);
   line(0, 0, 20, -10);
   line(0, 0, 0, 20);
   line(20, -10, 20, 10);
   line(0, 20, -5, 25);
   line(20, 10, 15, 15);
}

function mousePressed(){
  if (mouseX > (width/2 - 40) && mouseX < (width/2 + 40) && mouseY > (height/2-20-500/3-70) && mouseY < (height/2-20+10)){
    clicked1 = true;
    counter ++;
    //if (((mouseX-(width/2-30))^2+(mouseY-(height/2-20+135))^2)-(15)^2 < 0){
    //clicked2 = true;
    //}
  }
}

function draw() {
  background(255, 120, 37);
  fork(width/2, 2/3*height, 0, 0, -40);
  //if (fPY > 2/3*height){
   // fPY--;
  //}
  if (clicked1){
    earbuds(width/2, height/2-20, emx, emy);
    
    if (counter%2 == 0){
        if (emx < 100){
      emx++;
      }
        if (emy < 100){
      emy++;
      }
      //music(width/2-30, height/2-20+135);
    }
  }
  
  //if (clicked2){
    
  //}
}
