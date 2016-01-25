// JavaScript Document
ie=document.all?1:0
n=document.layers?1:0
var numberOfMenus=0
var bgColor='#CCCCCC'
var bgColorChangeTo='#99CC00'
var imageHeight=11

function newsMenuInit(){
	oTopMenu=new Array()
	for(i=0;i<=numberOfMenus;i++){
		oTopMenu[i]=new Array()
		oTopMenu[i][0]=new makeNewsMenu('divTopMenu'+i)
		oTopMenu[i][1]=new makeNewsMenu('divTopMenuBottom'+i,'divTopMenu'+i)
		oTopMenu[i][2]=new makeNewsMenu('divTopMenuText'+i,'divTopMenu'+i)
		oTopMenu[i][1].moveIt(0,imageHeight)
		oTopMenu[i][0].clipTo(0,101,imageHeight+3,0)
		oTopMenu[i][0].moveIt(i*101+20+(i*10),10)
		oTopMenu[i][0].css.visibility="visible"
	}
}

function makeNewsMenu(obj,nest){
	nest=(!nest) ? '':'document.'+nest+'.'					
	this.css=(n) ? eval(nest+'document.'+obj):eval('document.all.'+obj+'.style')	
	this.scrollHeight=n?this.css.document.height:eval('document.all.'+obj+'.offsetHeight')
	this.moveIt=b_moveIt;this.bgChange=b_bgChange;
	this.slideUp=b_slideUp; this.slideDown=b_slideDown;
	this.clipTo=b_clipTo;
    this.obj = obj + "Object"; 	eval(this.obj + "=this")		
}

function b_moveIt(x,y){this.x=x; this.y=y; this.css.left=this.x; this.css.top=this.y}

function b_bgChange(color){if(ie) this.css.backgroundColor=color; else this.css.bgColor=color}

function b_clipTo(t,r,b,l){
	if(n){this.css.clip.top=t; this.css.clip.right=r; this.css.clip.bottom=b; this.css.clip.left=l
	}else this.css.clip="rect("+t+","+r+","+b+","+l+")";
}

function b_slideUp(ystop,moveby,speed,fn,wh){
	if(!this.slideactive){
		if(this.y>ystop){
			this.moveIt(this.x,this.y-5); eval(wh)
			setTimeout(this.obj+".slideUp("+ystop+","+moveby+","+speed+",'"+fn+"','"+wh+"')",speed)}
		else{this.slideactive=false; this.moveIt(0,ystop); eval(fn)	}
	}
}

function b_slideDown(ystop,moveby,speed,fn,wh){
	if(!this.slideactive){
		if(this.y<ystop){
			this.moveIt(this.x,this.y+5); eval(wh)
			setTimeout(this.obj+".slideDown("+ystop+","+moveby+","+speed+",'"+fn+"','"+wh+"')",speed)}
		else{this.slideactive=false; this.moveIt(0,ystop); eval(fn)	}
	}
}

function topMenu(num){
	if(oTopMenu[num][1].y==imageHeight) oTopMenu[num][1].slideDown(oTopMenu[num][2].scrollHeight+20,10,40,'oTopMenu['+num+'][0].clipTo(0,101,oTopMenu['+num+'][1].y+3,0)','oTopMenu['+num+'][0].clipTo(0,101,oTopMenu['+num+'][1].y+3,0)')
	else if(oTopMenu[num][1].y==oTopMenu[num][2].scrollHeight+20) oTopMenu[num][1].slideUp(imageHeight,10,40,'oTopMenu['+num+'][0].clipTo(0,101,oTopMenu['+num+'][1].y+3,0)','oTopMenu['+num+'][0].clipTo(0,101,oTopMenu['+num+'][1].y+3,0)')
}

function menuOver(num){oTopMenu[num][1].bgChange(bgColorChangeTo)}

function menuOut(num){oTopMenu[num][1].bgChange(bgColor)}

onload=newsMenuInit;