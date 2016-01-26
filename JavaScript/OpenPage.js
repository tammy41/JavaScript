// JavaScript Document
var temp=new Array()
var temp2=new Array()
if (document.layers){
   for (i=1;i<=2;i++){
      temp[i]=eval("document.index"+i+".clip")
      temp[i].width=window.innerWidth/2
      temp[i].height=window.innerHeight
      temp2[i]=eval("document.index"+i)
      temp2[i].left=(i-1)*temp[i].width  }  }
else if (document.all){
   var clipright=document.body.clientWidth/2,clipleft=0
   for (i=1;i<=2;i++){
      temp[i]=eval("document.all.index"+i+".style")
      temp[i].width=document.body.clientWidth/2
      temp[i].height=document.body.offsetHeight
      temp[i].left=(i-1)*parseInt(temp[i].width)  }
}

function StartOpenPage(){
<!-- [Step2]: 在此能够设置页面打开的速度 -->
   stopit=setInterval("SetOpenPage()",100)
}

function SetOpenPage(){
   window.scrollTo(0,0)
   if (document.layers){
      temp[1].right-=30
      temp[2].left+=30
      if (temp[2].left>window.innerWidth/2) clearInterval(stopit) }
   else if (document.all){
      clipright-=30
      temp[1].clip="rect(0 "+clipright+" auto 0)"
      clipleft+=30
      temp[2].clip="rect(0 auto auto "+clipleft+")"
      if (clipright<=0) clearInterval(stopit) }
}

StartOpenPage()