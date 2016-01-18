var index = null;
var balltime = 0;
var ballcol = 0; 
<!-- [Step1]: 这里可以更改弹球的次数 -->
var ballnum = 10;
var ballsta = new Array(40); 
var planecol = new Array(5); 
planecol[0] = "#FFFF00";
planecol[1] = "#FFCF00";
planecol[2] = "#FF7F00";
planecol[3] = "#FF3F00";
planecol[4] = "#FF0000";
planecol[5] = "#000000";

function PopUpBall() {
   bgIE.style.posTop = 116;
   bgIE.style.posLeft = 116;
   ball.style.posTop = 290;
   ball.style.posLeft = 209;
   ballracket.style.posTop = 300;
   ballracket.style.posLeft = 195;
   ballbutton.style.posTop = -1000;
   ballbutton.style.posLeft = -1000;
   endgame.style.posTop = -1000;
   endgame.style.posLeft = -1000;
   for (ib = 0; ib < 5; ib++) {
       for (ia = 0; ia < 8; ia++) { ballsta[ib * 8 + ia] = ib;  }  }
   ballbutton.style.posTop = 300;
   ballbutton.style.posLeft = 280;
}

function BallMain() {
   clearTimeout(index);
   balltime = balltime + 1;
   with (Math){ tmpballtime = floor(balltime / 10)};
   ballX = ballX + ballDX;
   ballY = ballY + ballDY;
   ErrorCheck();
   PlaneCheck();
   ball.style.posTop = ballY;
   ball.style.posLeft = ballX;
   if (gameFLG == 01){index = setTimeout("BallMain()", 0);  }
}

function ErrorCheck() {
   if (ballX < 16){ ballX = 32 - ballX; ballDX = -ballDX; }
   if (ballX > 401){ ballX = 802 - ballX; ballDX = -ballDX; }
   if (ballY < 16){ ballY = 32 - ballY; ballDY = -ballDY; }
   if (ballY >= 272) {
   if (missFLG == 0) { tmpX = (ballDX / ballDY) * (272 - ballY) + ballX;
      if (tmpX >= tmpRL - 12) {
         if (tmpX <= tmpRL + 42) {
            ballY = 272; ballDY = -ballDY;
            ballX = tmpX;
            ballRD = tmpX - tmpRL;
            with (Math){ ballDX = 8 * abs(ballDX) / ballDX; }
         if (ballRD < -4){ ballDX = -15; }
         if (ballRD > 36){ ballDX = 15; }
         if (ballRD >= 14){ if (ballRD <= 16) { ballDX = -2; } }
         if (ballRD >= 17){ if (ballRD <= 20) { ballDX = 2; } }
         if (ballRD >= 0){ if (ballRD <= 4) { ballDX = -4; } }
         if (ballRD >= 28){ if (ballRD <= 32) { ballDX = 4; } }
         if (ballRD >= -4){ if (ballRD <= -1) { ballDX = -11; } }
         if (ballRD >= 33){ if (ballRD <= 36) { ballDX = 11; } }  } }
   if (ballDY > 0){ missFLG = 1; }} 
   else { if (ballY > 290){ missFLG = 0; ballnum = ballnum - 1; EndBall(); }  }   }
}

function PlaneCheck() {
   tmpY = ballY + 4;
   tmpX = ballX + 4;
   if (tmpY >= 48) { 
     if (tmpY <= 147) {
       if (tmpX >= 29) {
         if (tmpX <= 396) {
            with (Math) {
               ia = floor((tmpX - 29) / 46);
               ib = floor((tmpY - 48) / 20);
               ic = ib * 8 + ia; }
            if (ballsta[ic] <= 4) {
               tmpbc = ballsta[ic] + 1;
               ballsta[ic] = tmpbc;
               chc(ic + 1, tmpbc);
               if (tmpbc == 5){ ballcol = ballcol + 1; }
               if (ballcol >= 40){ EndBall(); }
               if (ballDX > 0) {
                 iy=(ballDY / ballDX) * (29 + 46 * ia - tmpX) + tmpY;
                 if (iy > 48 + 20 * ib + 18) {
                   tmpY1 = 48 + 20 * ib + 18;
                   tmpX1 = (ballDX / ballDY) * (48 + 20 * ib + 18 - tmpY) + tmpX;
                   ballX = tmpX1 - 4;
                   ballY = tmpY1 - 4;
                   ballDY = -ballDY; } 
			     else {
                    if (iy < 44 + 20 * ib) {
                       tmpY1 = 48 + 20 * ib;
                       tmpX1 = (ballDX / ballDY) * (48 + 20 * ib - tmpY) + tmpX;
                       ballX = tmpX1 - 4;
                       ballY = tmpY1 - 4;
                       ballDY = -ballDY; } 
				   else {
                         tmpX1 = 29 + 46 * ia;
                         tmpY1 = (ballDY / ballDX) * (29 + 46 * ia - tmpX) + tmpY;
                         ballX = tmpX1 - 4;
                         ballY = tmpY1 - 4;
                         ballDX = -ballDX;    }   } } 
			  else {
                 iy = (ballDY / ballDX) * (29+46 * ia + 44 - tmpX) + tmpY;
                 if (iy > 48 + 20 * ib + 18) {
                      tmpY1 = 48 + 20 * ib + 18;
                      tmpX1 = (ballDX / ballDY) * (48 + 20 * ib + 18 - tmpY) + tmpX;
                      ballX = tmpX1 - 4;
                      ballY = tmpY1 - 4;
                      ballDY = -ballDY; }
				 else {
                    if (iy < 44 + 20 * ib) {
                       tmpY1 = 48 + 20 * ib;
                       tmpX1 = (ballDX / ballDY) * (48 + 20 * ib - tmpY) + tmpX;
                       ballX = tmpX1 - 4;
                       ballY = tmpY1 - 4;
                       ballDY = -ballDY; }
					else {
                       tmpX1 = 29+46 * ia + 44;
                       tmpY1 = (ballDY / ballDX) * (29 + 46 * ia + 44 - tmpX) + tmpY;
                       ballX = tmpX1 - 4;
                       ballY = tmpY1 - 4;
                       ballDX = -ballDX;  }  }  }  }  }  }  }  }
}

function initAll() {
  if (ballcol >= 40) {
    ballcol = 0;
    balltime = 0;
    ballnum = 3;
    with (Math) { tmpballtime = floor(balltime / 10); }
     for (ib = 0; ib < 5; ib++){ 
	   for (ia = 0; ia < 8; ia++){
         chc(ib * 8 + ia +1, ib);
         ballsta[ib * 8 + ia] = ib;  }   }  }
  gameFLG = 1;
  ballX = 209;
  ballY = 270;
  ballDX =- 8;
  ballDY =- 8;
  tmpRL = 193;
  missFLG = 0;
  index = setTimeout("BallMain()", 0);
}

function chc(bno,bcl) {
   eval(((bno <= 10) ? "b0" : "b") + (bno-1)).bgColor = planecol[bcl];
}

function EndBall() {
   gameFLG = 0;
   loadFLG = 0;
   ballbutton.style.posTop  =  300;
   ballbutton.style.posLeft  =  280;
   if (ballnum <= 0) {
       endgame.style.posTop = 250;
       endgame.style.posLeft = 260;
       ballcol = 40;   }
}
