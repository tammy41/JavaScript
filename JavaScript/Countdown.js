// JavaScript Document
function DownTime() 
{
STTime();
SHTime();
}

function STTime()
{
if(TimerRunning)
clearTimeout(TimerID);
var TimerRunning = false;
}

function array()
{
this.length = 12;
this[0] = 31;this[1] = 28;this[2] = 31;this[3] = 30;this[4] = 31;this[5] = 30;
this[6] = 31;this[7] = 31;this[8] = 30;this[9] = 31;this[10] = 30;this[11] = 31;
}

var CClock = new array();

function SHTime() 
{
today = new Date();
var CurrentMonth = today.getMonth();
var CurrentDate = today.getDate();
var CurrentYear = today.getFullYear();
now = null;
if (21 < CurrentDate) {CurrentDate -= CClock[CurrentMonth]; CurrentMonth++;}
if (7 < CurrentMonth) {CurrentMonth -= 12; CurrentYear++;}
var Yleft = 2008 - CurrentYear;
var Mleft = 1 - CurrentMonth;
var Dleft = 1 - CurrentDate;
document.YMD.a.value = Yleft;
document.YMD.b.value = Mleft;
document.YMD.c.value = Dleft;
TimerID = setTimeout('SHTime()',1000);
TimerRunning = true;
}
