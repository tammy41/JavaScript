// JavaScript Document
var WhereTo   = null;
var TimerID   = null;
var pos       = 0;
var StartTime = null;

function RevolvingButton() {
  var now = new Date();
  StartTime=now.getTime();
  StopButton();
<!-- [Step1]: 在此可以按序增加按钮的名称和相应的网址 -->
  WhereTo = new BasicArray("263 在线|http://www.263.net.cn", "新浪网|http://www.sina.com.cn",  "中文雅虎|http://cn.yahoo.com", "搜狐网|http://www.sohu.com");
  ShowButton();
}

function StopButton() {
   TimerID = null;
   WhereTo = null;
}

function ShowButton() {
  pos= (pos == WhereTo.length) ? 1 : pos + 1;
  document.forms[0].elements[0].value=AddString(WhereTo[pos],0);
<!-- [Step2]: 在此能够更改旋转速度，数值大速度慢 -->
  TimerID=window.setTimeout('ShowButton()',1000);
}

function BasicArray() {
  this.length = BasicArray.arguments.length
  for (var i = 0; i < this.length; i++)  { this[i+1] = BasicArray.arguments[i]  }
}

function AddString(data,num) {
  for(var i=0;i<data.length;i++)  { if(data.substring(i,i+1)=="|") break;  }
  if (num==0) return(data.substring(0,i));
  else return(data.substring(i+1,data.length));
}

function EndNetAddress()  {
  this.location=AddString(WhereTo[pos],1);
  return (false);
}
