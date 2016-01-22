// JavaScript Document
 var timerID = null;
 function clock(num)
 {
   var dig=parseInt(num/10);
   var timetag="<img src='"+dig+".jpg'>";
   dig=num%10;
   timetag+="<img src='"+dig+".jpg'>";
   return timetag;
 }
 function stopclock()
 {
   clearTimeout(timerID);
 }
 function showtime()
 {
   var now = new Date();
   var hours = clock(now.getHours())+"<font size=100>:</font>";
   var minutes = clock(now.getMinutes())+"<font size=100>:</font>";
   var seconds = clock(now.getSeconds());
   var timeValue =hours+minutes+seconds;
   show.innerHTML = timeValue;
   timerID = setTimeout("showtime()",1000);
 }