// JavaScript Document
var i=2
var ButtonWid=80
var ButtonHei=25
var ButtonArray=new Array()
<!-- [Step1]: 这里可以按序增加按钮的名称和网址 -->
ButtonArray[0]='<a href=http://www.263.net.cn ><input type=button value="263 在线"></a>'
ButtonArray[1]='<a href=http://www.sohu.com   ><input type=button value="搜 狐 网"></a>'
ButtonArray[2]='<a href=http://www.sina.com.cn><input type=button value="新 浪 网"></a>'
ButtonArray[3]='<a href=http://cn.yahoo.com   ><input type=button value="雅 虎 网"></a>'

function ButtonScroll(){
   if (document.all){ ButScr1(first); second.style.top=ButtonHei }
   else if (document.layers){
       move1(document.main.document.first)
       document.main.document.second.top=ButtonHei+5
       document.main.document.second.visibility='show' }
}

function ButScr1(whichdiv){
   tdiv=eval(whichdiv)
   if (tdiv.style.pixelTop>0&&tdiv.style.pixelTop<=5){
      tdiv.style.pixelTop=0
      setTimeout("ButScr1(tdiv)",3000)
      setTimeout("ButScr2(second)",3000)
      return  }
   if (tdiv.style.pixelTop>=tdiv.offsetHeight*-1){
      tdiv.style.pixelTop-=5
      setTimeout("ButScr1(tdiv)",100)  }
   else{
      tdiv.style.pixelTop=ButtonHei
      tdiv.innerHTML=ButtonArray[i]
      if (i==ButtonArray.length-1)  i=0
      else  i++ }
}

function ButScr2(whichdiv){
   tdiv2=eval(whichdiv)
   if (tdiv2.style.pixelTop>0&&tdiv2.style.pixelTop<=5){
     tdiv2.style.pixelTop=0
     setTimeout("ButScr2(tdiv2)",3000)
     setTimeout("ButScr1(first)",3000)
     return }
   if (tdiv2.style.pixelTop>=tdiv2.offsetHeight*-1){
     tdiv2.style.pixelTop-=5
     setTimeout("ButScr2(second)",100) }
   else{
     tdiv2.style.pixelTop=ButtonHei
     tdiv2.innerHTML=ButtonArray[i]
     if (i==ButtonArray.length-1) i=0
     else i++ }
}


if (document.all){
  document.writeln('<span id="main" style="position:relative;width:'+ ButtonWid+';height:'+ ButtonHei+';overflow:hiden;">')
  document.writeln('<div style="position:absolute;width:'+ ButtonWid+';height:'+ ButtonHei+ ';clip:rect(0 '+ ButtonWid+' '+ButtonHei+' 0);left:0;top:0">')
  document.writeln('<div id="first" style="position:absolute;width:'+ButtonWid+';left:0;top:1;">')
  document.write(ButtonArray[0])
  document.writeln('</div>')
  document.writeln('<div id="second" style="position:absolute;width:'+ButtonWid+';left:0;top:0">')
  document.write(ButtonArray[1])
  document.writeln('</div>')
  document.writeln('</div>')
  document.writeln('</span>')
}