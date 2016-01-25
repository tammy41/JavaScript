// JavaScript Document
var objects;
var pos;
var r = 110;       
<!-- [Step1]: 这里可以更改旋转菜单的中心坐标 -->
var xoff = 350;     
var yoff = 240;    
var pi = Math.PI;   
var inc = pi / 180; 

function showObject(object) {
    object.visibility = VISIBLE;
}

function hideObject(object) {
    object.visibility = HIDDEN;
}

function slidepicture(from, to) {
    if (from < to) {
        website.top = (from += 10);
        setTimeout('slidepicture(' + from + ',' + to + ')', 75);         }
    else initObjects();
}

function initObjects() {
  objects = new Array(circle1, circle2, circle3, circle4, circle5, circle6);
  pos = new Array();
  pos[0] = 0;
  for (var i = 1; i < objects.length; i++) {
      pos[i] = parseFloat(pos[i - 1] + ((2 * pi) / objects.length));      }
  rotateObjects();
}

function rotateObjects() {
   for (var i = 0; i < pos.length; i++) {
       pos[i] += inc; objects[i].visibility = 'visible';
       objects[i].left = (r * Math.cos(pos[i])) + xoff
       objects[i].top = (r * Math.sin(pos[i])) + yoff;          }
   rotateTimer = setTimeout("rotateObjects()", 75);
}




 var isNS = (navigator.appName == "Netscape" && parseInt(navigator.appVersion) >= 4);              
    var HIDDEN = (isNS) ? 'hide' : 'hidden';              
    var VISIBLE = (isNS) ? 'show' : 'visible';              
    var circle1 = (isNS) ? document.circle1 : document.all.circle1.style;              
    var circle2 = (isNS) ? document.circle2 : document.all.circle2.style;              
    var circle3 = (isNS) ? document.circle3 : document.all.circle3.style;              
    var circle4 = (isNS) ? document.circle4 : document.all.circle4.style;              
    var circle5 = (isNS) ? document.circle5 : document.all.circle5.style;              
    var circle6 = (isNS) ? document.circle6 : document.all.circle6.style;              
    var text1 = (isNS) ? document.text1 : document.all.text1.style;              
    var text2 = (isNS) ? document.text2 : document.all.text2.style;              
    var text3 = (isNS) ? document.text3 : document.all.text3.style;              
    var text4 = (isNS) ? document.text4 : document.all.text4.style;              
    var text5 = (isNS) ? document.text5 : document.all.text5.style;              
    var text6 = (isNS) ? document.text6 : document.all.text6.style;                         
    slidepicture(0, 0);   