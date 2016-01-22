// JavaScript Document
var cx=0;
var cy=0;
var val=0;

function MouseTextStart(){   
  for(i=1;i<=7;i++)  {  val=setInterval("MouseTextShow(1)",20); 
<!-- [Step1]: 这里可以设置文本的抖动速度，数值大速度慢 -->  
  setInterval("MouseTextfollow("+i+")",100);  }
} 

function MouseTextShow(i){    
  var w=eval("MouseText"+i);
  with(w.style) {  visibility="visible";  s=parseInt(fontSize); if(s>=200)s-=100; else if(s>90&&s<=100) { s-=85; clearInterval(val); if(i<7)val=setInterval("MouseTextShow("+(i+1)+")",20); }    
  fontSize=s;  }    
}

function MouseTextfollow(i){  
  var x;
  if(i<6)x=cx-70+i*10;
  else x=cx-35+i*10;
  var y=cy-10+Math.floor(Math.random()*40);
  w=eval("MouseText"+i);
  with(w.style)  { left=x.toString()+"px"; top=y.toString()+"px";  }
}

function MouseTextLocation(){   
  cx=window.event.x;
  cy=window.event.y;    
}

document.onmousemove=MouseTextLocation;
<!-- [Step2]: 在此能够更改文本的总数目 -->
var MouseText=new Array(7);
<!-- [Step3]: 这里可以按序增加文本信息 -->
MouseText[1]="W"; MouseText[2]="e"; MouseText[3]="l"; MouseText[4]="c"; MouseText[5]="o"; MouseText[6]="m"; MouseText[7]="e";
<!-- [Step4]: 在此能够更改文本的颜色 -->
for(i=1;i<=7;i++)  document.write("<div id='MouseText"+i+"' style='width:20px; height:20px; position:absolute; font-size:1000; visibility:hidden'><font face='Forte' color='#FF0000'>"+MouseText[i]+"</font></div>");

MouseTextStart();