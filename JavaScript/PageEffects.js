// JavaScript Document
function ScrollStatus(index) {
<!-- [Step1]: 这里可以更改跑马灯的状态栏信息 -->
  var statusmessage="页面特效篇----状态栏跑马灯";
  var stamsg = " ";
  var i = 1;
  if (index <= 100 && index > 0) {
     for (i=0 ; i < index ; i++) { stamsg+=" "; }
     stamsg+=statusmessage;
     index--;
     window.status=stamsg;
<!-- [Step2]: 在此能够设置跑马灯的速度，数值大速度慢 -->
     window.setTimeout("ScrollStatus("+index+")",150);}
   else if (index <= 0) {
       if (-index < statusmessage.length) {
          stamsg+=statusmessage.substring(-index,statusmessage.length);
          index--;
          window.status=stamsg;
          window.setTimeout("ScrollStatus("+index+")",150); }
      else {
          window.status=" ";
          window.setTimeout("ScrollStatus(100)",150); }  }
}

/*文本闪烁*/
function TextFlash(){
   if (document.all.flashtext&&flashtext.length){
      for (i=0;i<flashtext.length;i++) eval('setInterval("TxtFlash1('+i+')",150)') }
<!-- [Step1]: 这里可以设置文本闪烁的速度，数值小速度快 -->
   else if (flashtext) setInterval("TxtFlash2(0)",100)
}

function TxtFlash1(which){
  if (document.all.flashtext[which].filters[0].strength==2) document.all.flashtext[which].filters[0].strength=1
  else document.all.flashtext[which].filters[0].strength=2 
}

function TxtFlash2(which){
  if (document.all.flashtext.filters[0].strength==2) document.all.flashtext.filters[0].strength=1
  else document.all.flashtext.filters[0].strength=2
}


