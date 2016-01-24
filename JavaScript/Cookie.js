// JavaScript Document
/*确认链接按钮 begin*/
function ConfirmLink(){
<!-- [Step1]: 在此能够更改弹出窗口的警告信息 -->
    question = confirm("您确认要链接xxx在线  吗？")
<!-- [Step2]: 这里可以设置链接对应的网址 -->
    if (question != "0"){  window.open("http://www.xxx.com")  }
}
/*确认链接按钮 end*/

/*链接弹出警示框 begin*/
function AlertWindow(){
<!-- [Step1]: 这里可以更改弹出警告框的信息 -->
   question = confirm("您确认要登录xxx在线 么？")  
<!-- [Step2]: 在此能够设置链接对应的网址 -->
<!-- [Step3]: 这里可以修改新窗口的各种参数 -->
<!-- [Step4]: 在此能够设置新窗口的宽度和高度 -->
   if (question != "0"){ window.open("http://www.263.net.cn", "NewWin", "status=yes, width=400, height=200 ")    }
}
/*end*/

/*随着次数变化提示 begin*/
function GetNumMessage(name){
  var arg=name+"=";
  var alen=arg.length;
  var clen=document.cookie.length;
  var i=0;
  while(i<clen){
     var j=i+alen;
	 if(document.cookie.substring(i,j)==arg)
	 return GetNumMessageVal(j);
	 i=document.cookie.indexOf(" ",i)+1;
	 if(i==0) break;}
  return null;
}
 
function GetNumMessageVal(offset){
  var endstr=document.cookie.indexOf(";",offset);
  if(endstr==-1) endstr=document.cookie.length;
  return unescape(document.cookie.substring(offset,endstr));
}

function ResetCounts(name){
   index=0;SetNumMessage("index",index,expdate,"/",null,false);
   location.reload();
 }

function SetNumMessage(name,value){
   var argv=SetNumMessage.arguments;
   var argc=SetNumMessage.arguments.length;
   var expires=(2<argc)?argv[2]:null;
   var path=(3<argc)?argv[3]:null;
   var domain=(4<argc)?argv[4]:null;
   var secure=(5<argc)?argv[5]:false;
   document.cookie=name+"="+escape(value)+((expires==null)?"":("; expires=" + expires.toGMTString())) + ((path==null)?"":("; path="+path)) + ((domain==null)?"":("; domain="+domain)) + ((secure==true)?"; secure":"");
}
/*end*/

/*上次登入时间 begin*/
var exp = new Date(); 
exp.setTime(exp.getTime() + (30*24*3600*1000));

function LogoWhen(info){
  var rightNow = new Date()
  var LogoTime = 0;
  LogoTime = GetCookie('LogoenH')
  LogoTime = LogoTime * 1
  var lastHereFormatting = new Date(LogoTime);
  var intLastVisit = (lastHereFormatting.getYear() * 10000)+(lastHereFormatting.getMonth() * 100) + lastHereFormatting.getDate()
  var lastHereInDateFormat = "" + lastHereFormatting;
  var dayOfWeek = lastHereInDateFormat.substring(0,3)
  var dateMonth = lastHereInDateFormat.substring(4,10)
  var year = lastHereInDateFormat.substring(23,25)
  var LogoText = dayOfWeek + ", " + dateMonth +"."
  SetCookie ("LogoenH", rightNow.getTime(), exp)
  return LogoText
}

function GetCookie (name) {  
  var arg = name + "=";  
  var alen = arg.length;  
  var clen = document.cookie.length;  
  var i = 0;  
  while (i < clen) {   var j = i + alen;    
    if (document.cookie.substring(i, j) == arg)      
      return getCookieVal (j);    
      i = document.cookie.indexOf(" ", i) + 1;    
    if (i == 0) break;   }  
  return null;
}

function getCookieVal (offset) {  
  var endstr = document.cookie.indexOf (";", offset);  
  if (endstr == -1)    endstr = document.cookie.length;  
  return unescape(document.cookie.substring(offset, endstr));
}

function SetCookie (name, value) {  
  var argv = SetCookie.arguments;  
  var argc = SetCookie.arguments.length;  
  var expires = (argc > 2) ? argv[2] : null;  
  var path = (argc > 3) ? argv[3] : null;  
  var domain = (argc > 4) ? argv[4] : null;  
  var secure = (argc > 5) ? argv[5] : false;  
  document.cookie = name + "=" + escape (value) + ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + ((path == null) ? "" : ("; path=" + path)) +  ((domain == null) ? "" : ("; domain=" + domain)) +    ((secure == true) ? "; secure" : "");
}
/*end*/