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

function setup() {
	createCanvas(400, 400);
	background(95,165,255);
}

var click = false;


//legs 
function birdLegs()
{
	
fill(207,147,52);
beginShape();
vertex(180, 225);
bezierVertex(180, 225, 180, 225, 180, 225);
bezierVertex(176, 226, 176, 226, 176, 226);
bezierVertex(172, 228, 172, 228, 172, 228);
bezierVertex(173, 232, 173, 232, 173, 232);
bezierVertex(175, 239, 175, 239, 175, 239);
bezierVertex(178, 250, 178, 250, 178, 250);
bezierVertex(180, 261, 180, 261, 180, 261);
bezierVertex(182, 277, 182, 277, 182, 277);
bezierVertex(190, 322, 190, 322, 190, 322);
bezierVertex(193, 327, 193, 327, 193, 327);
bezierVertex(197, 327, 197, 327, 197, 327);
bezierVertex(203, 327, 203, 327, 203, 327);
bezierVertex(209, 328, 209, 328, 209, 328);
bezierVertex(216, 329, 216, 329, 216, 329);
bezierVertex(221, 329, 221, 329, 221, 329);
bezierVertex(226, 329, 226, 329, 226, 329);
bezierVertex(229, 331, 229, 331, 229, 331);
bezierVertex(233, 336, 233, 336, 233, 336);
bezierVertex(232, 340, 232, 340, 232, 340);
bezierVertex(229, 336, 229, 336, 229, 336);
bezierVertex(227, 336, 227, 336, 227, 336);
bezierVertex(225, 336, 225, 336, 225, 336);
bezierVertex(223, 336, 223, 336, 223, 336);
bezierVertex(221, 336, 221, 336, 221, 336);
bezierVertex(219, 336, 219, 336, 219, 336);
bezierVertex(215, 335, 215, 335, 215, 335);
bezierVertex(212, 335, 212, 335, 212, 335);
bezierVertex(209, 334, 209, 334, 209, 334);
bezierVertex(204, 334, 204, 334, 204, 334);
bezierVertex(207, 335, 207, 335, 207, 335);
bezierVertex(211, 338, 211, 338, 211, 338);
bezierVertex(215, 339, 215, 339, 215, 339);
bezierVertex(217, 341, 217, 341, 217, 341);
bezierVertex(220, 343, 220, 343, 220, 343);
bezierVertex(221, 349, 221, 349, 221, 349);
bezierVertex(217, 345, 217, 345, 217, 345);
bezierVertex(216, 348, 216, 348, 216, 348);
bezierVertex(213, 347, 213, 347, 213, 347);
bezierVertex(211, 346, 211, 346, 211, 346);
bezierVertex(210, 344, 210, 344, 210, 344);
bezierVertex(207, 343, 207, 343, 207, 343);
bezierVertex(206, 342, 206, 342, 206, 342);
bezierVertex(204, 342, 204, 342, 204, 342);
bezierVertex(202, 342, 202, 342, 202, 342);
bezierVertex(199, 339, 199, 339, 199, 339);
bezierVertex(201, 343, 201, 343, 201, 343);
bezierVertex(203, 346, 203, 346, 203, 346);
bezierVertex(207, 350, 207, 350, 207, 350);
bezierVertex(209, 356, 209, 356, 209, 356);
bezierVertex(208, 359, 208, 359, 208, 359);
bezierVertex(207, 362, 207, 362, 207, 362);
bezierVertex(205, 359, 205, 359, 205, 359);
bezierVertex(203, 359, 203, 359, 203, 359);
bezierVertex(200, 357, 200, 357, 200, 357);
bezierVertex(200, 353, 200, 353, 200, 353);
bezierVertex(199, 350, 199, 350, 199, 350);
bezierVertex(196, 348, 196, 348, 196, 348);
bezierVertex(194, 344, 194, 344, 194, 344);
bezierVertex(192, 338, 192, 338, 192, 338);
bezierVertex(190, 338, 190, 338, 190, 338);
bezierVertex(186, 335, 186, 335, 186, 335);
bezierVertex(183, 330, 183, 330, 183, 330);
bezierVertex(181, 330, 181, 330, 181, 330);
bezierVertex(178, 330, 178, 330, 178, 330);
bezierVertex(174, 329, 174, 329, 174, 329);
bezierVertex(172, 329, 172, 329, 172, 329);
bezierVertex(169, 326, 169, 326, 169, 326);
bezierVertex(169, 324, 169, 324, 169, 324);
bezierVertex(167, 325, 167, 325, 167, 325);
bezierVertex(166, 328, 166, 328, 166, 328);
bezierVertex(167, 324, 167, 324, 167, 324);
bezierVertex(170, 321, 170, 321, 170, 321);
bezierVertex(172, 321, 172, 321, 172, 321);
bezierVertex(175, 322, 175, 322, 175, 322);
bezierVertex(179, 323, 179, 323, 179, 323);
bezierVertex(182, 324, 182, 324, 182, 324);
bezierVertex(185, 325, 185, 325, 185, 325);
bezierVertex(178, 287, 178, 287, 178, 287);
bezierVertex(174, 271, 174, 271, 174, 271);
bezierVertex(168, 247, 168, 247, 168, 247);
bezierVertex(164, 231, 164, 231, 164, 231);
bezierVertex(164, 223, 164, 223, 164, 223);
bezierVertex(169, 219, 169, 219, 169, 219);
bezierVertex(171, 218, 171, 218, 171, 218);
endShape(CLOSE);


fill(207,147,52);
beginShape();
curveVertex(214, 244);
bezierVertex(214, 244, 214, 244, 214, 244);
bezierVertex(217, 252, 217, 252, 217, 252);
bezierVertex(219, 259, 219, 259, 219, 259);
bezierVertex(221, 268, 221, 268, 221, 268);
bezierVertex(226, 279, 226, 279, 226, 279);
bezierVertex(231, 296, 231, 296, 231, 296);
bezierVertex(232, 298, 232, 298, 232, 298);
bezierVertex(235, 298, 235, 298, 235, 298);
bezierVertex(239, 298, 239, 298, 239, 298);
bezierVertex(244, 298, 244, 298, 244, 298);
bezierVertex(247, 299, 247, 299, 247, 299);
bezierVertex(252, 299, 252, 299, 252, 299);
bezierVertex(258, 299, 258, 299, 258, 299);
bezierVertex(263, 298, 263, 298, 263, 298);
bezierVertex(267, 298, 267, 298, 267, 298);
bezierVertex(268, 301, 268, 301, 268, 301);
bezierVertex(270, 303, 270, 303, 270, 303);
bezierVertex(270, 308, 270, 308, 270, 308);
bezierVertex(266, 304, 266, 304, 266, 304);
bezierVertex(263, 304, 263, 304, 263, 304);
bezierVertex(262, 305, 262, 305, 262, 305);
bezierVertex(260, 305, 260, 305, 260, 305);
bezierVertex(257, 304, 257, 304, 257, 304);
bezierVertex(254, 303, 254, 303, 254, 303);
bezierVertex(251, 303, 251, 303, 251, 303);
bezierVertex(247, 303, 247, 303, 247, 303);
bezierVertex(244, 303, 244, 303, 244, 303);
bezierVertex(245, 305, 245, 305, 245, 305);
bezierVertex(247, 306, 247, 306, 247, 306);
bezierVertex(251, 306, 251, 306, 251, 306);
bezierVertex(256, 309, 256, 309, 256, 309);
bezierVertex(258, 312, 258, 312, 258, 312);
bezierVertex(259, 316, 259, 316, 259, 316);
bezierVertex(256, 314, 256, 314, 256, 314);
bezierVertex(254, 315, 254, 315, 254, 315);
bezierVertex(252, 315, 252, 315, 252, 315);
bezierVertex(249, 314, 249, 314, 249, 314);
bezierVertex(246, 312, 246, 312, 246, 312);
bezierVertex(243, 311, 243, 311, 243, 311);
bezierVertex(239, 309, 239, 309, 239, 309);
bezierVertex(241, 312, 241, 312, 241, 312);
bezierVertex(243, 314, 243, 314, 243, 314);
bezierVertex(246, 317, 246, 317, 246, 317);
bezierVertex(249, 322, 249, 322, 249, 322);
bezierVertex(248, 325, 248, 325, 248, 325);
bezierVertex(248, 328, 248, 328, 248, 328);
bezierVertex(245, 325, 245, 325, 245, 325);
bezierVertex(242, 326, 242, 326, 242, 326);
bezierVertex(240, 320, 240, 320, 240, 320);
bezierVertex(237, 318, 237, 318, 237, 318);
bezierVertex(233, 314, 233, 314, 233, 314);
bezierVertex(231, 309, 231, 309, 231, 309);
bezierVertex(227, 306, 227, 306, 227, 306);
bezierVertex(224, 304, 224, 304, 224, 304);
bezierVertex(221, 302, 221, 302, 221, 302);
bezierVertex(219, 302, 219, 302, 219, 302);
bezierVertex(215, 302, 215, 302, 215, 302);
bezierVertex(212, 302, 212, 302, 212, 302);
bezierVertex(210, 300, 210, 300, 210, 300);
bezierVertex(209, 297, 209, 297, 209, 297);
bezierVertex(208, 299, 208, 299, 208, 299);
bezierVertex(214, 294, 214, 294, 214, 294);
bezierVertex(215, 295, 215, 295, 215, 295);
bezierVertex(216, 296, 216, 296, 216, 296);
bezierVertex(219, 296, 219, 296, 219, 296);
bezierVertex(222, 295, 222, 295, 222, 295);
bezierVertex(214, 268, 214, 268, 214, 268);
bezierVertex(211, 262, 211, 262, 211, 262);
bezierVertex(204, 239, 204, 239, 204, 239);
endShape(CLOSE);
}

// beak
function birdBeak (){
fill(247,126,0);
noStroke();
beginShape();
curveVertex(330, 242);
bezierVertex(330, 242, 330, 242, 330, 242);
bezierVertex(335, 254, 335, 254, 335, 254);
bezierVertex(338, 265, 338, 265, 338, 265);
bezierVertex(338, 275, 338, 275, 338, 275);
bezierVertex(338, 285, 338, 285, 338, 285);
bezierVertex(338, 296, 338, 296, 338, 296);
bezierVertex(337, 299, 337, 299, 337, 299);
bezierVertex(329, 293, 329, 293, 329, 293);
bezierVertex(324, 288, 324, 288, 324, 288);
bezierVertex(320, 282, 320, 282, 320, 282);
bezierVertex(316, 276, 316, 276, 316, 276);
bezierVertex(313, 272, 313, 272, 313, 272);
bezierVertex(310, 267, 310, 267, 310, 267);
bezierVertex(304, 265, 304, 265, 304, 265);
bezierVertex(300, 265, 300, 265, 300, 265);
bezierVertex(294, 265, 294, 265, 294, 265);
bezierVertex(287, 264, 287, 264, 287, 264);
bezierVertex(281, 263, 281, 263, 281, 263);
bezierVertex(269, 261, 269, 261, 269, 261);
bezierVertex(288, 259, 288, 259, 288, 259);
bezierVertex(300, 258, 300, 258, 300, 258);
bezierVertex(311, 254, 311, 254, 311, 254);
bezierVertex(317, 253, 317, 253, 317, 253);
bezierVertex(325, 246, 325, 246, 325, 246);
bezierVertex(326, 245, 326, 245, 326, 245);
bezierVertex(326, 245, 326, 245, 326, 245);
endShape(CLOSE);
}

// birds eye 

function birdFood()
{
fill (64,51,30);
ellipse(330,330,9,10);

fill (64,51,30);
ellipse(360,360,9,10);

fill (64,51,30);
ellipse(370,320,9,10);
}

function mousePressed()
{
	if (Math.pow(mouseX - 240,2) + Math.pow(mouseY - 190,2) - Math.pow(40,2) < 0)
		birdLegs();
		birdBeak();
		birdFood();
	
		
}


function draw() {


// body 

fill(193,205,209);
noStroke();
beginShape();
curveVertex(107, 139, 107, 139, 107, 139);
bezierVertex(122, 168, 122, 168, 122, 168);
bezierVertex(134, 185, 134, 185, 134, 185);
bezierVertex(151, 201, 151, 201, 151, 201);
bezierVertex(170, 218, 170, 218, 170, 218);
bezierVertex(185, 230, 185, 230, 185, 230);
bezierVertex(205, 240, 205, 240, 205, 240);
bezierVertex(222, 248, 222, 248, 222, 248);
bezierVertex(246, 255, 246, 255, 246, 255);
bezierVertex(269, 261, 269, 261, 269, 261);
bezierVertex(288, 262, 288, 262, 288, 262);
bezierVertex(298, 261, 298, 261, 298, 261);
bezierVertex(311, 257, 311, 257, 311, 257);
bezierVertex(321, 252, 321, 252, 321, 252);
bezierVertex(327, 246, 327, 246, 327, 246);
bezierVertex(331, 241, 331, 241, 331, 241);
bezierVertex(333, 231, 333, 231, 333, 231);
bezierVertex(334, 219, 334, 219, 334, 219);
bezierVertex(332, 208, 332, 208, 332, 208);
bezierVertex(329, 195, 329, 195, 329, 195);
bezierVertex(322, 181, 322, 181, 322, 181);
bezierVertex(311, 167, 311, 167, 311, 167);
bezierVertex(304, 159, 304, 159, 304, 159);
bezierVertex(293, 150, 293, 150, 293, 150);
bezierVertex(276, 137, 276, 137, 276, 137);
bezierVertex(251, 127, 251, 127, 251, 127);
bezierVertex(230, 120, 230, 120, 230, 120);
bezierVertex(206, 116, 206, 116, 206, 116);
bezierVertex(176, 115, 176, 115, 176, 115);
bezierVertex(143, 124, 143, 124, 143, 124);
bezierVertex(126, 129, 126, 129, 126, 129);
bezierVertex(115, 135, 115, 135, 115, 135);
endShape(CLOSE);



// thing above body

fill(99,68,47);
noStroke();
beginShape();
curveVertex(330, 240);
bezierVertex(330, 240, 330, 240, 330, 240);
bezierVertex(332, 231, 332, 231, 332, 231);
bezierVertex(332, 216, 332, 216, 332, 216);
bezierVertex(331, 207, 331, 207, 331, 207);
bezierVertex(329, 197, 329, 197, 329, 197);
bezierVertex(324, 187, 324, 187, 324, 187);
bezierVertex(319, 179, 319, 179, 319, 179);
bezierVertex(314, 170, 314, 170, 314, 170);
bezierVertex(306, 162, 306, 162, 306, 162);
bezierVertex(298, 154, 298, 154, 298, 154);
bezierVertex(286, 145, 286, 145, 286, 145);
bezierVertex(276, 139, 276, 139, 276, 139);
bezierVertex(267, 134, 267, 134, 267, 134);
bezierVertex(258, 129, 258, 129, 258, 129);
bezierVertex(244, 125, 244, 125, 244, 125);
bezierVertex(235, 122, 235, 122, 235, 122);
bezierVertex(226, 120, 226, 120, 226, 120);
bezierVertex(214, 119, 214, 119, 214, 119);
bezierVertex(202, 117, 202, 117, 202, 117);
bezierVertex(189, 118, 189, 118, 189, 118);
bezierVertex(177, 119, 177, 119, 177, 119);
bezierVertex(164, 122, 164, 122, 164, 122);
bezierVertex(153, 124, 153, 124, 153, 124);
bezierVertex(142, 128, 142, 128, 142, 128);
bezierVertex(129, 131, 129, 131, 129, 131);
bezierVertex(116, 134, 116, 134, 116, 134);
bezierVertex(109, 136, 109, 136, 109, 136);
bezierVertex(105, 137, 105, 137, 105, 137);
bezierVertex(89, 140, 89, 140, 89, 140);
bezierVertex(78, 140, 78, 140, 78, 140);
bezierVertex(64, 139, 64, 139, 64, 139);
bezierVertex(53, 137, 53, 137, 53, 137);
bezierVertex(42, 133, 42, 133, 42, 133);
bezierVertex(34, 129, 34, 129, 34, 129);
bezierVertex(28, 125, 28, 125, 28, 125);
bezierVertex(21, 119, 21, 119, 21, 119);
bezierVertex(13, 111, 13, 111, 13, 111);
bezierVertex(31, 123, 31, 123, 31, 123);
bezierVertex(41, 128, 41, 128, 41, 128);
bezierVertex(68, 134, 68, 134, 68, 134);
bezierVertex(83, 134, 83, 134, 83, 134);
bezierVertex(96, 132, 96, 132, 96, 132);
bezierVertex(103, 130, 103, 130, 103, 130);
bezierVertex(123, 122, 123, 122, 123, 122);
bezierVertex(141, 117, 141, 117, 141, 117);
bezierVertex(152, 115, 152, 115, 152, 115);
bezierVertex(161, 113, 161, 113, 161, 113);
bezierVertex(168, 111, 168, 111, 168, 111);
bezierVertex(177, 109, 177, 109, 177, 109);
bezierVertex(186, 108, 186, 108, 186, 108);
bezierVertex(196, 108, 196, 108, 196, 108);
bezierVertex(206, 108, 206, 108, 206, 108);
bezierVertex(216, 109, 216, 109, 216, 109);
bezierVertex(230, 111, 230, 111, 230, 111);
bezierVertex(242, 114, 242, 114, 242, 114);
bezierVertex(255, 118, 255, 118, 255, 118);
bezierVertex(268, 123, 268, 123, 268, 123);
bezierVertex(278, 127, 278, 127, 278, 127);
bezierVertex(288, 132, 288, 132, 288, 132);
bezierVertex(299, 141, 299, 141, 299, 141);
bezierVertex(308, 149, 308, 149, 308, 149);
bezierVertex(319, 160, 319, 160, 319, 160);
bezierVertex(327, 169, 327, 169, 327, 169);
bezierVertex(332, 180, 332, 180, 332, 180);
bezierVertex(336, 190, 336, 190, 336, 190);
bezierVertex(338, 201, 338, 201, 338, 201);
bezierVertex(339, 215, 339, 215, 339, 215);
bezierVertex(337, 225, 337, 225, 337, 225);
bezierVertex(335, 230, 335, 230, 335, 230);
endShape(CLOSE);

//hair

fill(99,68,47);
noStroke();
beginShape();
curveVertex(56, 85, 56, 85, 56, 85);
bezierVertex(64, 92, 64, 92, 64, 92);
bezierVertex(69, 96, 69, 96, 69, 96);
bezierVertex(74, 99, 74, 99, 74, 99);
bezierVertex(80, 101, 80, 101, 80, 101);
bezierVertex(90, 105, 90, 105, 90, 105);
bezierVertex(100, 108, 100, 108, 100, 108);
bezierVertex(109, 110, 109, 110, 109, 110);
bezierVertex(120, 111, 120, 111, 120, 111);
bezierVertex(130, 112, 130, 112, 130, 112);
bezierVertex(141, 114, 141, 114, 141, 114);
bezierVertex(151, 116, 151, 116, 151, 116);
bezierVertex(127, 122, 127, 122, 127, 122);
bezierVertex(108, 117, 108, 117, 108, 117);
bezierVertex(92, 114, 92, 114, 92, 114);
bezierVertex(76, 105, 76, 105, 76, 105);
bezierVertex(63, 97, 63, 97, 63, 97);
endShape(CLOSE);


fill(99,68,47);
noStroke();
beginShape();
curveVertex(101, 53, 101, 53, 101, 53);
bezierVertex(107, 63, 107, 63, 107, 63);
bezierVertex(113, 70, 113, 70, 113, 70);
bezierVertex(120, 76, 120, 76, 120, 76);
bezierVertex(133, 88, 133, 88, 133, 88);
bezierVertex(145, 94, 145, 94, 145, 94);
bezierVertex(157, 101, 157, 101, 157, 101);
bezierVertex(172, 107, 172, 107, 172, 107);
bezierVertex(180, 113, 180, 113, 180, 113);
bezierVertex(166, 115, 166, 115, 166, 115);
bezierVertex(152, 107, 152, 107, 152, 107);
bezierVertex(138, 98, 138, 98, 138, 98);
bezierVertex(126, 91, 126, 91, 126, 91);
bezierVertex(117, 80, 117, 80, 117, 80);
bezierVertex(108, 71, 108, 71, 108, 71);
endShape(CLOSE);


fill(99,68,47);
noStroke();
beginShape();
curveVertex(101, 53, 101, 53, 101, 53);
bezierVertex(107, 62, 107, 62, 107, 62);
bezierVertex(112, 69, 112, 69, 112, 69);
bezierVertex(119, 76, 119, 76, 119, 76);
bezierVertex(127, 83, 127, 83, 127, 83);
bezierVertex(136, 89, 136, 89, 136, 89);
bezierVertex(146, 95, 146, 95, 146, 95);
bezierVertex(155, 99, 155, 99, 155, 99);
bezierVertex(166, 105, 166, 105, 166, 105);
bezierVertex(173, 107, 173, 107, 173, 107);
bezierVertex(180, 111, 180, 111, 180, 111);
bezierVertex(172, 114, 172, 114, 172, 114);
bezierVertex(169, 114, 169, 114, 169, 114);
bezierVertex(162, 110, 162, 110, 162, 110);
bezierVertex(155, 108, 155, 108, 155, 108);
bezierVertex(146, 103, 146, 103, 146, 103);
bezierVertex(138, 98, 138, 98, 138, 98);
bezierVertex(131, 92, 131, 92, 131, 92);
bezierVertex(124, 87, 124, 87, 124, 87);
bezierVertex(115, 78, 115, 78, 115, 78);
bezierVertex(107, 67, 107, 67, 107, 67);
endShape(CLOSE);

fill(99,68,47);
noStroke();
beginShape();
curveVertex(144, 44, 144, 44, 144, 44);
bezierVertex(154, 61, 154, 61, 154, 61);
bezierVertex(160, 70, 160, 70, 160, 70);
bezierVertex(168, 79, 168, 79, 168, 79);
bezierVertex(178, 86, 178, 86, 178, 86);
bezierVertex(186, 92, 186, 92, 186, 92);
bezierVertex(195, 99, 195, 99, 195, 99);
bezierVertex(212, 112, 212, 112, 212, 112);
bezierVertex(200, 113, 200, 113, 200, 113);
bezierVertex(189, 104, 189, 104, 189, 104);
bezierVertex(178, 95, 178, 95, 178, 95);
bezierVertex(164, 82, 164, 82, 164, 82);
bezierVertex(156, 71, 156, 71, 156, 71);
bezierVertex(152, 64, 152, 64, 152, 64);
bezierVertex(148, 57, 148, 57, 148, 57);
endShape(CLOSE);

fill(99,68,47);
noStroke();
beginShape();
curveVertex(179, 38);
bezierVertex(179, 38, 179, 38, 179, 38);
bezierVertex(178, 38, 178, 38, 178, 38);
bezierVertex(181, 47, 181, 47, 181, 47);
bezierVertex(187, 60, 187, 60, 187, 60);
bezierVertex(193, 70, 193, 70, 193, 70);
bezierVertex(199, 77, 199, 77, 199, 77);
bezierVertex(206, 86, 206, 86, 206, 86);
bezierVertex(214, 94, 214, 94, 214, 94);
bezierVertex(222, 101, 222, 101, 222, 101);
bezierVertex(236, 113, 236, 113, 236, 113);
bezierVertex(223, 113, 223, 113, 223, 113);
bezierVertex(215, 103, 215, 103, 215, 103);
bezierVertex(206, 94, 206, 94, 206, 94);
bezierVertex(198, 85, 198, 85, 198, 85);
bezierVertex(191, 75, 191, 75, 191, 75);
bezierVertex(187, 65, 187, 65, 187, 65);
bezierVertex(183, 58, 183, 58, 183, 58);
bezierVertex(180, 48, 180, 48, 180, 48);
endShape(CLOSE);

fill(99,68,47);
noStroke();
beginShape();
curveVertex(217, 37);
bezierVertex(217, 37, 217, 37, 217, 37);
bezierVertex(218, 38, 218, 38, 218, 38);
bezierVertex(221, 49, 221, 49, 221, 49);
bezierVertex(223, 60, 223, 60, 223, 60);
bezierVertex(230, 74, 230, 74, 230, 74);
bezierVertex(235, 85, 235, 85, 235, 85);
bezierVertex(241, 95, 241, 95, 241, 95);
bezierVertex(250, 106, 250, 106, 250, 106);
bezierVertex(258, 119, 258, 119, 258, 119);
bezierVertex(248, 119, 248, 119, 248, 119);
bezierVertex(242, 110, 242, 110, 242, 110);
bezierVertex(237, 99, 237, 99, 237, 99);
bezierVertex(230, 88, 230, 88, 230, 88);
bezierVertex(225, 76, 225, 76, 225, 76);
bezierVertex(220, 63, 220, 63, 220, 63);
endShape(CLOSE);


fill(99,68,47);
noStroke();
beginShape();
curveVertex(217, 36, 217, 36, 217, 36);
bezierVertex(219, 43, 219, 43, 219, 43);
bezierVertex(221, 49, 221, 49, 221, 49);
bezierVertex(223, 57, 223, 57, 223, 57);
bezierVertex(225, 64, 225, 64, 225, 64);
bezierVertex(227, 72, 227, 72, 227, 72);
bezierVertex(230, 77, 230, 77, 230, 77);
bezierVertex(234, 85, 234, 85, 234, 85);
bezierVertex(238, 91, 238, 91, 238, 91);
bezierVertex(242, 98, 242, 98, 242, 98);
bezierVertex(245, 102, 245, 102, 245, 102);
bezierVertex(250, 108, 250, 108, 250, 108);
bezierVertex(257, 118, 257, 118, 257, 118);
bezierVertex(248, 118, 248, 118, 248, 118);
bezierVertex(242, 109, 242, 109, 242, 109);
bezierVertex(237, 100, 237, 100, 237, 100);
bezierVertex(232, 92, 232, 92, 232, 92);
bezierVertex(226, 78, 226, 78, 226, 78);
bezierVertex(222, 69, 222, 69, 222, 69);
bezierVertex(218, 54, 218, 54, 218, 54);
endShape(CLOSE);

fill(99,68,47);
noStroke();
beginShape();
curveVertex(254, 47, 254, 47, 254, 47);
bezierVertex(254, 55, 254, 55, 254, 55);
bezierVertex(254, 62, 254, 62, 254, 62);
bezierVertex(255, 69, 255, 69, 255, 69);
bezierVertex(256, 73, 256, 73, 256, 73);
bezierVertex(257, 78, 257, 78, 257, 78);
bezierVertex(259, 85, 259, 85, 259, 85);
bezierVertex(261, 91, 261, 91, 261, 91);
bezierVertex(264, 99, 264, 99, 264, 99);
bezierVertex(265, 102, 265, 102, 265, 102);
bezierVertex(268, 108, 268, 108, 268, 108);
bezierVertex(271, 113, 271, 113, 271, 113);
bezierVertex(274, 119, 274, 119, 274, 119);
bezierVertex(276, 123, 276, 123, 276, 123);
bezierVertex(280, 129, 280, 129, 280, 129);
bezierVertex(269, 126, 269, 126, 269, 126);
bezierVertex(266, 118, 266, 118, 266, 118);
bezierVertex(263, 110, 263, 110, 263, 110);
bezierVertex(259, 102, 259, 102, 259, 102);
bezierVertex(257, 92, 257, 92, 257, 92);
bezierVertex(255, 83, 255, 83, 255, 83);
bezierVertex(253, 75, 253, 75, 253, 75);
bezierVertex(252, 67, 252, 67, 252, 67);
endShape(CLOSE);


fill(99,68,47);
noStroke();
beginShape();
curveVertex(285, 59, 285, 59, 285, 59);
bezierVertex(285, 68, 285, 68, 285, 68);
bezierVertex(284, 76, 284, 76, 284, 76);
bezierVertex(284, 83, 284, 83, 284, 83);
bezierVertex(284, 87, 284, 87, 284, 87);
bezierVertex(284, 92, 284, 92, 284, 92);
bezierVertex(284, 95, 284, 95, 284, 95);
bezierVertex(285, 99, 285, 99, 285, 99);
bezierVertex(287, 106, 287, 106, 287, 106);
bezierVertex(289, 112, 289, 112, 289, 112);
bezierVertex(290, 118, 290, 118, 290, 118);
bezierVertex(292, 125, 292, 125, 292, 125);
bezierVertex(294, 132, 294, 132, 294, 132);
bezierVertex(298, 140, 298, 140, 298, 140);
bezierVertex(290, 136, 290, 136, 290, 136);
bezierVertex(288, 129, 288, 129, 288, 129);
bezierVertex(286, 123, 286, 123, 286, 123);
bezierVertex(284, 116, 284, 116, 284, 116);
bezierVertex(283, 109, 283, 109, 283, 109);
bezierVertex(281, 104, 281, 104, 281, 104);
bezierVertex(281, 97, 281, 97, 281, 97);
bezierVertex(281, 92, 281, 92, 281, 92);
bezierVertex(281, 87, 281, 87, 281, 87);
bezierVertex(281, 82, 281, 82, 281, 82);
bezierVertex(282, 77, 282, 77, 282, 77);
endShape(CLOSE);


fill(99,68,47);
noStroke();
beginShape();
curveVertex(313, 78, 313, 78, 313, 78);
bezierVertex(312, 85, 312, 85, 312, 85);
bezierVertex(311, 88, 311, 88, 311, 88);
bezierVertex(310, 92, 310, 92, 310, 92);
bezierVertex(309, 96, 309, 96, 309, 96);
bezierVertex(309, 99, 309, 99, 309, 99);
bezierVertex(308, 103, 308, 103, 308, 103);
bezierVertex(308, 107, 308, 107, 308, 107);
bezierVertex(307, 110, 307, 110, 307, 110);
bezierVertex(307, 116, 307, 116, 307, 116);
bezierVertex(308, 122, 308, 122, 308, 122);
bezierVertex(308, 126, 308, 126, 308, 126);
bezierVertex(308, 129, 308, 129, 308, 129);
bezierVertex(309, 134, 309, 134, 309, 134);
bezierVertex(310, 140, 310, 140, 310, 140);
bezierVertex(311, 145, 311, 145, 311, 145);
bezierVertex(311, 151, 311, 151, 311, 151);
bezierVertex(311, 154, 311, 154, 311, 154);
bezierVertex(305, 150, 305, 150, 305, 150);
bezierVertex(305, 144, 305, 144, 305, 144);
bezierVertex(305, 139, 305, 139, 305, 139);
bezierVertex(305, 134, 305, 134, 305, 134);
bezierVertex(304, 128, 304, 128, 304, 128);
bezierVertex(304, 122, 304, 122, 304, 122);
bezierVertex(304, 117, 304, 117, 304, 117);
bezierVertex(304, 114, 304, 114, 304, 114);
bezierVertex(304, 110, 304, 110, 304, 110);
bezierVertex(304, 102, 304, 102, 304, 102);
endShape(CLOSE);


fill(99,68,47);
noStroke();
beginShape();
curveVertex(334, 106);
bezierVertex(334, 106, 334, 106, 334, 106);
bezierVertex(331, 111, 331, 111, 331, 111);
bezierVertex(331, 114, 331, 114, 331, 114);
bezierVertex(329, 118, 329, 118, 329, 118);
bezierVertex(328, 123, 328, 123, 328, 123);
bezierVertex(326, 129, 326, 129, 326, 129);
bezierVertex(326, 133, 326, 133, 326, 133);
bezierVertex(325, 139, 325, 139, 325, 139);
bezierVertex(325, 143, 325, 143, 325, 143);
bezierVertex(325, 150, 325, 150, 325, 150);
bezierVertex(325, 155, 325, 155, 325, 155);
bezierVertex(325, 161, 325, 161, 325, 161);
bezierVertex(325, 169, 325, 169, 325, 169);
bezierVertex(319, 163, 319, 163, 319, 163);
bezierVertex(319, 158, 319, 158, 319, 158);
bezierVertex(319, 152, 319, 152, 319, 152);
bezierVertex(319, 145, 319, 145, 319, 145);
bezierVertex(321, 138, 321, 138, 321, 138);
bezierVertex(321, 137, 321, 137, 321, 137);
bezierVertex(323, 127, 323, 127, 323, 127);
bezierVertex(325, 120, 325, 120, 325, 120);
bezierVertex(328, 113, 328, 113, 328, 113);
bezierVertex(333, 108, 333, 108, 333, 108);
endShape(CLOSE);



fill(99,68,47);
noStroke();
beginShape();
vertex(352, 139);
bezierVertex(352, 139, 352, 139, 352, 139);
bezierVertex(349, 144, 349, 144, 349, 144);
bezierVertex(348, 147, 348, 147, 348, 147);
bezierVertex(346, 150, 346, 150, 346, 150);
bezierVertex(345, 152, 345, 152, 345, 152);
bezierVertex(344, 154, 344, 154, 344, 154);
bezierVertex(343, 157, 343, 157, 343, 157);
bezierVertex(342, 160, 342, 160, 342, 160);
bezierVertex(341, 163, 341, 163, 341, 163);
bezierVertex(340, 167, 340, 167, 340, 167);
bezierVertex(339, 170, 339, 170, 339, 170);
bezierVertex(338, 174, 338, 174, 338, 174);
bezierVertex(338, 178, 338, 178, 338, 178);
bezierVertex(338, 182, 338, 182, 338, 182);
bezierVertex(338, 186, 338, 186, 338, 186);
bezierVertex(337, 193, 337, 193, 337, 193);
bezierVertex(332, 182, 332, 182, 332, 182);
bezierVertex(333, 177, 333, 177, 333, 177);
bezierVertex(334, 172, 334, 172, 334, 172);
bezierVertex(335, 167, 335, 167, 335, 167);
bezierVertex(337, 162, 337, 162, 337, 162);
bezierVertex(339, 157, 339, 157, 339, 157);
bezierVertex(341, 154, 341, 154, 341, 154);
endShape(CLOSE);

//eye 
fill(232, 208,24);
noStroke();
beginShape();
curveVertex(188, 118, 188, 118, 188, 118);
bezierVertex(185, 121, 185, 121, 185, 121);
bezierVertex(184, 123, 184, 123, 184, 123);
bezierVertex(181, 128, 181, 128, 181, 128);
bezierVertex(179, 133, 179, 133, 179, 133);
bezierVertex(177, 136, 177, 136, 177, 136);
bezierVertex(175, 141, 175, 141, 175, 141);
bezierVertex(174, 145, 174, 145, 174, 145);
bezierVertex(171, 152, 171, 152, 171, 152);
bezierVertex(170, 159, 170, 159, 170, 159);
bezierVertex(170, 165, 170, 165, 170, 165);
bezierVertex(169, 172, 169, 172, 169, 172);
bezierVertex(169, 177, 169, 177, 169, 177);
bezierVertex(169, 184, 169, 184, 169, 184);
bezierVertex(169, 189, 169, 189, 169, 189);
bezierVertex(170, 195, 170, 195, 170, 195);
bezierVertex(172, 204, 172, 204, 172, 204);
bezierVertex(175, 213, 175, 213, 175, 213);
bezierVertex(179, 223, 179, 223, 179, 223);
bezierVertex(188, 230, 188, 230, 188, 230);
bezierVertex(194, 233, 194, 233, 194, 233);
bezierVertex(200, 236, 200, 236, 200, 236);
bezierVertex(207, 240, 207, 240, 207, 240);
bezierVertex(218, 244, 218, 244, 218, 244);
bezierVertex(226, 248, 226, 248, 226, 248);
bezierVertex(235, 251, 235, 251, 235, 251);
bezierVertex(243, 253, 243, 253, 243, 253);
bezierVertex(252, 256, 252, 256, 252, 256);
bezierVertex(264, 259, 264, 259, 264, 259);
bezierVertex(271, 256, 271, 256, 271, 256);
bezierVertex(276, 252, 276, 252, 276, 252);
bezierVertex(282, 248, 282, 248, 282, 248);
bezierVertex(288, 241, 288, 241, 288, 241);
bezierVertex(293, 234, 293, 234, 293, 234);
bezierVertex(297, 228, 297, 228, 297, 228);
bezierVertex(301, 221, 301, 221, 301, 221);
bezierVertex(305, 210, 305, 210, 305, 210);
bezierVertex(308, 197, 308, 197, 308, 197);
bezierVertex(309, 185, 309, 185, 309, 185);
bezierVertex(309, 175, 309, 175, 309, 175);
bezierVertex(309, 167, 309, 167, 309, 167);
bezierVertex(308, 163, 308, 163, 308, 163);
bezierVertex(296, 152, 296, 152, 296, 152);
bezierVertex(283, 142, 283, 142, 283, 142);
bezierVertex(267, 133, 267, 133, 267, 133);
bezierVertex(247, 125, 247, 125, 247, 125);
bezierVertex(228, 119, 228, 119, 228, 119);
bezierVertex(206, 117, 206, 117, 206, 117);
bezierVertex(194, 117, 194, 117, 194, 117);
endShape(CLOSE);


//eyes in body of bird
fill(0);
ellipse(240,190,70,80);

fill(225);
ellipse(265,165,20);




}








