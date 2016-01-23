// JavaScript Document
<!-- [Step1]: 在此能够更改滚动文本的宽度 -->
var MarqueeWidth=180
<!-- [Step2]: 这里可以改变滚动文本的高度 -->
var MarqueeHeight=80
<!-- [Step3]: 在此能够修改文本滚动的速度，数值大，滚动快 -->
var speed=3

<!-- [Step4]: 这里可以更改滚动文本的颜色 -->
<!-- [Step5]: 在此能够修改滚动文本的内容 -->
var marqueecontents='<font face="Arial" color=#993366><strong><big>传统的HTML语言不能开发交互式的动态网页，而JavaScript却能很好的做到这一点。JavaScript是一门相当简单易学的网络化编程语言，通过把她和HTML语言相互结合起来，能够实现实时的动态网页特效，这给网页浏览者在浏览网页的同时也提供了某些乐趣。</big></strong></font>'

if (document.all)
document.write('<marquee direction="up" scrollAmount='+speed+' style="width:'+MarqueeWidth+';height:'+MarqueeHeight+'">'+marqueecontents+'</marquee>')

function regenerate(){
if (document.layers){
setTimeout("window.onresize=regenerate",450)
intializemarquee()
}
}

function intializemarquee(){
document.MarqueeMessage001.document.MarqueeMessage002.document.write(marqueecontents)
document.MarqueeMessage001.document.MarqueeMessage002.document.close()
thelength=document.MarqueeMessage001.document.MarqueeMessage002.document.height
ScrollText()
}

function ScrollText(){
if (document.MarqueeMessage001.document.MarqueeMessage002.top>=thelength*(-1)){
document.MarqueeMessage001.document.MarqueeMessage002.top-=speed
setTimeout("ScrollText()",100)
}
else{
document.MarqueeMessage001.document.MarqueeMessage002.top=MarqueeHeight
ScrollText()
}
}

window.onload=regenerate