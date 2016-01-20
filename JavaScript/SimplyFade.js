window.onload = function(){
	var oDiv = document.getElementsByTagName('div');
	var i = 0;
	
	for(i = 0; i < oDiv.length; i++)
	{
		oDiv[i].alpha = 30;
		oDiv[i].onmouseover = function(){
			startMore(this,100);
		}
		oDiv[i].onmouseout = function(){
			startMore(this,30);
		}
	}
}

function startMore(obj,iTarget){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iSpeed = (iTarget - obj.alpha)/8;
		iSpeed = iSpeed>0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
		
		if(obj.alpha == iTarget){
			clearInterval(obj.timer);
		}else{
			obj.alpha += iSpeed;
			
			obj.style.filter = 'alpha(opacity:'+obj.alpha+')';
			obj.style.opacity = obj.alpha/100;
		}
	},30);
}