// JavaScript Document
MA = new Array()
<!-- [Step1]: 这里可以更改显示的文本 -->
MA[0] = "欢迎您的光临"
MA[1] = "希望在此有所收获"
MA[2] = "请多提宝贵意见"

MSize = new Array()
<!-- [Step2]: 这里可以改变文本的大小 -->
MSize[0] = "25pt"
MSize[1] = "30pt"
MSize[2] = "35pt"

MColor = new Array()
<!-- [Step3]: 这里可以改变文本的色彩 -->
MColor[0] = "000FF0"
MColor[1] = "FF0000"
MColor[2] = "008800"

var timer
var IMessages = 0

function Disappear(){
  
    if (document.all) {
        content.filters[0].apply()
        content.innerHTML = "<span style='color:"+MColor[IMessages]+";font-size:"+MSize[IMessages]+";filter: revealTrans(Transition=12, Duration=3)'>"+MA[IMessages]+"</span>"
        content.filters[0].play()
        if (IMessages >= MA.length-1) {    IMessages = 0    }     
		else {   IMessages++      }
    }     
    if (document.layers) {
       document.content.document.write("<span style='color:"+MColor[IMessages]+"'>"+MA[IMessages]+"</span>")
        if (IMessages >= MA.length-1) {  IMessages = 0  }
        else {   IMessages++      }
    } 
    timer = setTimeout("Disappear()",4000)   
}