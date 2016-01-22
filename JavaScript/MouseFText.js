// JavaScript Document
var x,y
var step=18
var index=0
<!-- [Step1]: 这里可以更改跟随鼠标的文本信息 -->
var message="鼠标特效篇--文本跟随鼠标！！"
message=message.split("")
var xpos=new Array()
for (i=0;i<=message.length-1;i++) { xpos[i]=-50  }
var ypos=new Array()
for (i=0;i<=message.length-1;i++) { ypos[i]=-200 }

function MouseText() {
  if (index==1 && document.all) {
      for (i=message.length-1; i>=1; i--) { xpos[i]=xpos[i-1]+step; ypos[i]=ypos[i-1]  }
      xpos[0]=x+step
      ypos[0]=y
      for (i=0; i<message.length-1; i++) { var thisspan = eval("span"+(i)+".style"); thisspan.posLeft=xpos[i];  thisspan.posTop=ypos[i]   }
   }
  else if (index==1 && document.layers) {
      for (i=message.length-1; i>=1; i--) { xpos[i]=xpos[i-1]+step;  ypos[i]=ypos[i-1]  }
      xpos[0]=x+step
      ypos[0]=y
      for (i=0; i<message.length-1; i++) { var thisspan = eval("document.span"+i);         thisspan.left=xpos[i];   thisspan.top=ypos[i]      }
   }
<!-- [Step2]: 在此能够设置文本的速度，数值大速度慢 -->
  var timer=setTimeout("MouseText()",30)
}

function MouseScroll(e){
   x = (document.layers) ? e.pageX : document.body.scrollLeft+event.clientX
   y = (document.layers) ? e.pageY : document.body.scrollTop+event.clientY
   index=1
}

for (i=0;i<=message.length-1;i++) {
  document.write("<span id='span"+i+"' class='spanstyle'>")
  document.write(message[i])
  document.write("</span>")
}

if (document.layers){  document.captureEvents(Event.mousemove);}
document.onmousemove = MouseScroll;