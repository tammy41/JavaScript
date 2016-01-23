// JavaScript Document
<!-- [Step1]: 这里可以更改跑马灯的宽度 -->
var MarqueeWidth=140
<!-- [Step2]: 在此能够修改跑马灯的高度 -->
var MarqueeHeight=100

<!-- [Step3]: 这里可以改变文本的颜色 -->
<!-- [Step4]: 在此能够修改文本的内容 -->
var MarMsgArray=new Array()
MarMsgArray[0]="<font face='Arial' color=#66CC00>传统的HTML语言不能开发交互式的动态网页，</font>"
MarMsgArray[1]="<font face='Arial' color=#6699FF>而JavaScript却能很好的做到这一点。</font>"
MarMsgArray[2]="<font face='Arial' color=#33FF00>JavaScript是一门相当简单易学的网络化编程语言，</font>"
MarMsgArray[3]="<font face='Arial' color=#999933>通过把她和HTML语言相互结合起来，</font>"
MarMsgArray[4]="<font face='Arial' color=#333333>能够实现实时的动态网页特效，</font>"
MarMsgArray[5]="<font face='Arial' color=#0066FF>这给网页浏览者在浏览网页的同时也提供了某些乐趣。</font>"

if (MarMsgArray.length>1) i=2
else i=0

function StartMarquee(){
if (document.all){
Marquee03(Child012)
Child022.style.top=MarqueeHeight
Child022.style.visibility='visible'
}
else if (document.layers){
document.Mother.visibility='show'
Marquee01(document.Mother.document.Child01)
document.Mother.document.Child02.top=MarqueeHeight+5
document.Mother.document.Child02.visibility='show'
}
}

function Marquee01(whichlayer){
tlayer=eval(whichlayer)
if (tlayer.top>0&&tlayer.top<=5){
tlayer.top=0
setTimeout("Marquee01(tlayer)",3000)
setTimeout("Marquee02(document.Mother.document.Child02)",3000)
return
}
if (tlayer.top>=tlayer.document.height*-1){
tlayer.top-=5
setTimeout("Marquee01(tlayer)",100)
}
else{
tlayer.top=MarqueeHeight
tlayer.document.write(MarMsgArray[i])
tlayer.document.close()
if (i==MarMsgArray.length-1) i=0
else i++
}
}

function Marquee02(whichlayer){
tlayer2=eval(whichlayer)
if (tlayer2.top>0&&tlayer2.top<=5){
tlayer2.top=0
setTimeout("Marquee02(tlayer2)",3000)
setTimeout("Marquee01(document.Mother.document.Child01)",3000)
return
}
if (tlayer2.top>=tlayer2.document.height*-1){
tlayer2.top-=5
setTimeout("Marquee02(tlayer2)",100)
}
else{
tlayer2.top=MarqueeHeight
tlayer2.document.write(MarMsgArray[i])
tlayer2.document.close()
if (i==MarMsgArray.length-1) i=0
else i++
}
}

function Marquee03(whichdiv){
tdiv=eval(whichdiv)
if (tdiv.style.pixelTop>0&&tdiv.style.pixelTop<=5){
tdiv.style.pixelTop=0
setTimeout("Marquee03(tdiv)",3000)
setTimeout("Marquee04(Child022)",3000)
return
}
if (tdiv.style.pixelTop>=tdiv.offsetHeight*-1){
tdiv.style.pixelTop-=5
setTimeout("Marquee03(tdiv)",100)
}
else{
tdiv.style.pixelTop=MarqueeHeight
tdiv.innerHTML=MarMsgArray[i]
if (i==MarMsgArray.length-1) i=0
else i++
}
}

function Marquee04(whichdiv){
tdiv2=eval(whichdiv)
if (tdiv2.style.pixelTop>0&&tdiv2.style.pixelTop<=5){
tdiv2.style.pixelTop=0
setTimeout("Marquee04(tdiv2)",3000)
setTimeout("Marquee03(Child012)",3000)
return
}
if (tdiv2.style.pixelTop>=tdiv2.offsetHeight*-1){
tdiv2.style.pixelTop-=5
setTimeout("Marquee04(Child022)",100)
}
else{
tdiv2.style.pixelTop=MarqueeHeight
tdiv2.innerHTML=MarMsgArray[i]
if (i==MarMsgArray.length-1) i=0
else i++
}
}

window.onload=StartMarquee

if (document.all){
document.writeln('<span id="Mother2" style="position:relative;width:'+MarqueeWidth+';height:'+MarqueeHeight+';overflow:hiden; ">')
document.writeln('<div style="position:absolute;width:'+MarqueeWidth+';height:'+MarqueeHeight+';clip:rect(0 '+MarqueeWidth+' '+MarqueeHeight+' 0);left:0;top:0">')
document.writeln('<div id="Child012" style="position:absolute;width:'+MarqueeWidth+';left:0;top:1;">')
document.write(MarMsgArray[0])
document.writeln('</div>')
document.writeln('<div id="Child022" style="position:absolute;width:'+MarqueeWidth+';left:0;top:0;visibility:hidden">')
document.write(MarMsgArray[1])
document.writeln('</div>')
document.writeln('</div>')
document.writeln('</span>')
}
