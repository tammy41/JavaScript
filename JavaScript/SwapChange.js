// JavaScript Document
 var objimg=null;
function clickpic()
{ if(objimg==null)
	  {  objimg=event.srcElement;
		 event.srcElement.border="3";
		 event.srcElement.style.borderColor="black";
   	  }
   else
  { 
		objimg.border="0";
		var src=event.srcElement.src;
		if(swap(parseInt(event.srcElement.id),parseInt(objimg.id)))
		  {event.srcElement.src=objimg.src;
		   objimg.src=src;
		  }
		 else
		alert("不能交换！");
		objimg=null;
  }



}
function swap(newid ,oldid )
{
switch(newid)
{
	case 1: if(oldid==2||oldid==4) return true;break;
	case 2: if(oldid==1||oldid==3||oldid==5) return true;break;
	case 3: if(oldid==2||oldid==6) return true;break;
	case 4: if(oldid==1||oldid==5||oldid==7) return true;break;
	case 5: if(oldid==4||oldid==6||oldid==2||oldid==8) return true;break;
	case 6: if(oldid==3||oldid==5||oldid==9) return true;break;
	case 7: if(oldid==4||oldid==8) return true;break;
	case 8: if(oldid==7||oldid==5||oldid==9) return true;break;
	case 9: if(oldid==6||oldid==8) return true;break;
	default:return false;
}
}