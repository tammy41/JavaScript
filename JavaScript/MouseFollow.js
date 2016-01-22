// JavaScript Document
function MousePicture() {
 layerRef="document.all";
 styleSwitch=".style";
 layerName = 'Picture'
 eval('var curElement='+layerRef+'["'+layerName+'"]')
 eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="hidden"')
 eval('curElement'+styleSwitch+'.visibility="visible"')
 eval('newleft=document.body.clientWidth-curElement'+styleSwitch+'.pixelWidth')
 eval('newtop=document.body.clientHeight-curElement'+styleSwitch+'.pixelHeight')
 eval('height=curElement'+styleSwitch+'.height')
 eval('width=curElement'+styleSwitch+'.width')
 width=parseInt(width)
 height=parseInt(height)
 if (event.clientX > (document.body.clientWidth - 6 - width)) { newleft=document.body.clientWidth + document.body.scrollLeft - 6 - width }
 else { newleft=document.body.scrollLeft + event.clientX  }
 eval('curElement'+styleSwitch+'.pixelLeft=newleft')
 if (event.clientY > (document.body.clientHeight - 6 - height)) { newtop=document.body.clientHeight + document.body.scrollTop - 6 - height }
 else { newtop=document.body.scrollTop + event.clientY    }
 eval('curElement'+styleSwitch+'.pixelTop=newtop')
}

document.onmousemove = MousePicture;
document.write('<div ID=OuterDiv>')
<!-- [Step1]: 这里可以更改跟随鼠标的图形名称 -->
<!-- [Step2]: 在此能够设置图形的宽度和高度-->
document.write('<img ID=Picture src="gif1.gif" STYLE="position:absolute; TOP:0pt; LEFT:0pt; width=150; height=50; Z-INDEX:2; visibility:hidden;">')
document.write('</div>')