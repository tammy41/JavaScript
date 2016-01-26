// JavaScript Document
if (document.layers){
  var reference=window.innerWidth/window.innerHeight
  var temp=eval("document.minpage.clip")
  temp.left=temp.top=0
  temp.right=window.innerWidth
  temp.bottom=window.innerHeight }
else if (document.all){
  var reference=document.body.clientWidth/document.body.clientHeight
  var rightclip,leftclip,topclip,bottomclip
  var temp=document.all.minpage.style
  topclip=leftclip=0
  rightclip=temp.width=document.body.clientWidth
  bottomclip=temp.height=document.body.clientHeight
}

function Reducewindow(){
  window.scrollTo(0,0)
  if (document.layers){
   if (temp.left>window.innerWidth/2)
     clearInterval(stopit)
     temp.left+=reference*5
     temp.top+=5
     temp.right-=reference*5
     temp.bottom-=5 }
   else if (document.all){
     if (leftclip>document.body.clientWidth/2)
     clearInterval()
     temp.clip="rect( "+topclip+" "+rightclip+" "+bottomclip+" "+leftclip+")"
     leftclip+=reference*5
     topclip+=5
     rightclip-=reference*5
     bottomclip-=5  }
}
<!-- [Step2]: 在此能够设置页面缩放的速度 -->
setInterval("Reducewindow()",100)