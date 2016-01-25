// JavaScript Document
if (document.all) document.write('<div id="slidemenubar2" style="left:-150" onMouseover="pull()" onMouseout="draw()">')
var sitems=new Array()
<!-- [Step1]: 这里可以按序增加菜单条的名称 -->
sitems[0]="263 在线"
sitems[1]="新 浪 网"
sitems[2]="雅 虎 网"
sitems[3]="搜 狐 网"

<!-- [Step2]: 在此能够按序增加菜单名称的网址 -->
var sitemlinks=new Array()
sitemlinks[0]="http://www.263.net.cn"
sitemlinks[1]="http://www.sina.com.cn"
sitemlinks[2]="http://cn.yahoo.com"
sitemlinks[3]="http://www.sohu.com"

for (i=0;i<=sitems.length-1;i++)
document.write('<a href='+sitemlinks[i]+' ONMOUSEOVER="'+';return true;" ONMOUSEOUT="'+';return true;">'+sitems[i]+'</a><br>')



function regenerate(){window.location.reload()}
function regenerate2(){if (document.layers) setTimeout("window.onresize=regenerate",400)}

window.onload=regenerate2
if (document.all){
   document.write('</div>')
   themenu=document.all.slidemenubar2.style
   rightboundary=0
   leftboundary=-150}
else{
   themenu=document.layers.slidemenubar
   rightboundary=150
   leftboundary=10
}

function pull(){
  if (window.drawit)   clearInterval(drawit)
  pullit=setInterval("pullengine()",50)
}

function pullengine(){
if (document.all&&themenu.pixelLeft<rightboundary) themenu.pixelLeft+=5
else if(document.layers&&themenu.left<rightboundary) themenu.left+=5
    else if (window.pullit) clearInterval(pullit)
}

function draw(){
  clearInterval(pullit)
  drawit=setInterval("drawengine()",50)
}

function drawengine(){
if (document.all&&themenu.pixelLeft>leftboundary) themenu.pixelLeft-=5
else if(document.layers&&themenu.left>leftboundary) themenu.left-=5
   else if (window.drawit) clearInterval(drawit)
}