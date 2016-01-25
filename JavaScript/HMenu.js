// JavaScript Document
<!-- [Step1]: 这里可以设置图形标志的名称 -->
var exImg=new Image(); exImg.src='picture001.jpg'
var unImg=new Image(); unImg.src='Picture002.jpg'
var stayFolded=false

function init(){
    oTop=new Array()
    oTop[0]=new makeMenu('divTop1','divCont')
    oTop[1]=new makeMenu('divTop2','divCont')
    oTop[2]=new makeMenu('divTop3','divCont')
              
    oSub=new Array()
    oSub[0]=new makeMenu('divSub1','divCont.document.divTop1')
    oSub[1]=new makeMenu('divSub2','divCont.document.divTop2')
    oSub[2]=new makeMenu('divSub3','divCont.document.divTop3')
      
    for(i=0;i<oSub.length;i++){ oSub[i].hideIt() }
    for(i=1;i<oTop.length;i++){ oTop[i].moveIt(0,oTop[i-1].y+oTop[i-1].height) }
}

function makeMenu(obj,nest){
  nest=(!nest) ? '':'document.'+nest+'.'                                                         
  this.css = ((document.layers) ? 1:0) ? eval(nest+'document.'+obj):eval('document.all.'+obj+'.style') ;
  this.ref=((document.layers) ? 1:0) ? eval(nest+'document.'+obj+'.document'):eval('document');         
  this.height=(document.layers) ? 1:0?this.ref.height:eval(obj+'.offsetHeight')
  this.x=((document.layers) ? 1:0)? this.css.left:this.css.pixelLeft;
  this.y=((document.layers) ? 1:0)? this.css.top:this.css.pixelTop; 
  this.hideIt=b_hideIt;  this.showIt=b_showIt; this.vis=b_vis; this.moveIt=b_moveIt                
  return this
}

function b_showIt(){this.css.visibility="visible"}
function b_hideIt(){this.css.visibility="hidden"}
function b_vis(){if(this.css.visibility=="hidden" || this.css.visibility=="hide") return true;}
function b_moveIt(x,y){this.x=x; this.y=y; this.css.left=this.x; this.css.top=this.y}

function menu(num){
  if(!stayFolded){
     for(i=0;i<oSub.length;i++){
         if(i!=num){
            oSub[i].hideIt()
            oTop[i].ref["imgA"+i].src=unImg.src
          }
     }
     for(i=1;i<oTop.length;i++){   oTop[i].moveIt(0,oTop[i-1].y+oTop[i-1].height)   }
   }
  if(oSub[num].vis()){
      oSub[num].showIt()
      oTop[num].ref["imgA"+num].src=exImg.src     }
  else{
      oSub[num].hideIt()
      oTop[num].ref["imgA"+num].src=unImg.src   }
  for(i=1;i<oTop.length;i++){ 
     if(!oSub[i-1].vis()) oTop[i].moveIt(0,oTop[i-1].y+oTop[i-1].height+oSub[i-1].height) 
     else oTop[i].moveIt(0,oTop[i-1].y+oTop[i-1].height)      }       
}

 onload=init;
