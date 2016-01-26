// JavaScript Document
var timerID = null;
var timerRunning = false;

function startclock() {
  stopclock();
  showtime();
}

function stopclock (){
  if(timerRunning)
  clearTimeout(timerID);
  timerRunning = false;
}

function showtime () {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds()
  var timeValue = "" + ((hours >12) ? hours -12 :hours)
  if (timeValue == "0") timeValue = 12;
  timeValue += ((minutes < 10) ? ":0" : ":") + minutes
  timeValue += ((seconds < 10) ? ":0" : ":") + seconds
  timeValue += (hours >= 12) ? " Pm" : " Am"
  document.clock.face.value = timeValue;
  timerID = setTimeout("showtime()",1000);
  timerRunning = true;
}


  var months=new Array(13);
  months[1]="Jan";
  months[2]="Feb";
  months[3]="Mar";
  months[4]="Apr";
  months[5]="May";
  months[6]="Jun";
  months[7]="Jul";
  months[8]="Aug";
  months[9]="Sep";
  months[10]="Oct";
  months[11]="Nov";
  months[12]="Dec";
  var time=new Date();
  document.write(""+ months[time.getMonth() + 1] + " ");
  document.write(time.getDate() + ", " + time.getYear());
  
  
  
function getCookieVal (offset) {
  var endstr = document.cookie.indexOf (";", offset);
  if (endstr == -1)    endstr = document.cookie.length;
  return unescape(document.cookie.substring(offset, endstr));
}
function GetCookie (name) {
  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var i = 0;
  while (i < clen) {
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg)    return getCookieVal (j);
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0)     break;  }
  return null;
}
function SetCookie (name, value) {
  var argv = SetCookie.arguments;
  var argc = SetCookie.arguments.length;
  var expires = (argc > 2) ? argv[2] : null;
  var path = (argc > 3) ? argv[3] : null;
  var domain = (argc > 4) ? argv[4] : null;
  var secure = (argc > 5) ? argv[5] : false;
  document.cookie = name + "=" + escape (value) + ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +  ((path == null) ? "" : ("; path=" + path)) +  ((domain == null) ? "" : ("; domain=" + domain)) +  ((secure == true) ? "; secure" : "");
}
function DeleteCookie(name) {
  var exp = new Date();
  FixCookieDate (exp); 
  exp.setTime (exp.getTime() - 1);  
  var cval = GetCookie (name);
  if (cval != null)  document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}
var expdate = new Date();
var num_visits;
expdate.setTime(expdate.getTime() + (5*24*60*60*1000));
if (!(num_visits = GetCookie("num_visits")))
  num_visits = 0;
num_visits++;
SetCookie("num_visits",num_visits,expdate);
document.write(num_visits+" 次。");



 var oneDay= 1*24*3600*1000;
  var expDate = new Date();
  expDate.setTime (expDate.getTime() + oneDay);
  var cookieExpires = expDate.toGMTString();
  document.cookie="verifyCookie=test; expires="+cookieExpires
  if (document.cookie.length>0)  document.write("Yes.");
  else {  
    document.write("No.")
    document.write(document.cookie.substring(0,document.cookie.length)+"<BR><BR>");}


