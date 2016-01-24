// JavaScript Document
scores = new Array(20);
var numTotal=0;
IE4 = (document.all) ? 1 : 0;
ver4 = (IE4) ? 1 : 0;
if (ver4) {
    with (document) {
        write("<STYLE TYPE='text/css'>");
        write(".child {display:none}")
        write("</STYLE>");
    }
} 

function expandIt(el) {
    if (!ver4) return;
    if (IE4) {
        whichEl1 = eval(el + "Child");
        for(i=1;i<=numTotal;i++){
            whichEl = eval(scores[i] + "Child");
            if(whichEl!=whichEl1) {
                whichEl.style.display = "none";
            }
        }
        whichEl1 = eval(el + "Child");
        if (whichEl1.style.display == "none") {
            whichEl1.style.display = "block";
        }
        else {
            whichEl1.style.display = "none";
        }
    }  
}

function getIndex(el) {
    ind = null;
    for (i=0; i<document.layers.length; i++) {
        whichEl = document.layers[i];
        if (whichEl.id == el) {
            ind = i;
            break;
        }
    }
    return ind;
} 

function arrange() {
    nextY = document.layers[firstInd].pageY +document.layers[firstInd].document.height;
    for (i=firstInd+1; i<document.layers.length; i++) {
        whichEl = document.layers[i];
        if (whichEl.visibility != "hide") {
            whichEl.pageY = nextY;
            nextY += whichEl.document.height;
        }
    }
} 

function initIt(){
    if (!ver4) return;    
    divColl = document.all.tags("DIV");
    for (i=0; i<divColl.length; i++) {
        whichEl = divColl(i);
        if (whichEl.className == "child") whichEl.style.display = "none";
    }  
} 
onload = initIt;