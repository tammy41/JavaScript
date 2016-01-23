// JavaScript Document
<!-- [Step1]: 在此能够更改滚动文本的宽度 -->
var MarqueeWidth=300
<!-- [Step2]: 这里可以改变滚动文本的高度 -->
var MarqueeHeight=10
<!-- [Step3]: 在此能够修改文本滚动的速度，数值大，滚动快 -->
var speed=7

<!-- [Step4]: 这里可以更改滚动文本的颜色 -->
<!-- [Step5]: 在此能够修改滚动文本的内容 -->
var MarqueeMessage='<font face="Arial"  color=#FF0066><strong><big>传统的HTML语言不能开发交互式的动态网页，而JavaScript却能很好的做到这一点。JavaScript是一门相当简单易学的网络化编程语言，通过把她和HTML语言相互结合起来，能够实现实时的动态网页特效，这给网页浏览者在浏览网页的同时也提供了某些乐趣。</big></strong></font>'

if (document.all)
document.write('<marquee scrollAmount='+speed+' style="width:'+MarqueeWidth+'">'+MarqueeMessage+'</marquee>')

function RegLayers(){
if (document.layers){
setTimeout("window.onresize=RegLayers",450)
intializemarquee()
}
}

function intializemarquee(){
document.MarqueeText001.document.MarqueeText002.document.write('<nobr>'+MarqueeMessage+'</nobr>')
document.MarqueeText001.document.MarqueeText002.document.close()
thelength=document.MarqueeText001.document.MarqueeText002.document.width
ScrollText()
}

function ScrollText(){
if (document.MarqueeText001.document.MarqueeText002.left>=thelength*(-1)){
document.MarqueeText001.document.MarqueeText002.left-=speed
setTimeout("ScrollText()",100)
}
else{
document.MarqueeText001.document.MarqueeText002.left=MarqueeWidth
ScrollText()
}
}
window.onload=RegLayers