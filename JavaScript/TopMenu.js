// JavaScript Document
var JDWMinIE4   = (document.all) ? 1 : 0;
var JDWMinIE5   = (JDWMinIE4 && navigator.appVersion.indexOf("5.")  >= 0) ? 1 : 0;

function hideLayer(layer) {
if (JDWMinIE4) layer.style.visibility = "hidden";
}

function showLayer(layer) {
if (JDWMinIE4) layer.style.visibility = "visible";
}

function inheritLayer(layer) {
if (JDWMinIE4) layer.style.visibility = "inherit";
}

function getVisibility(layer) {
if (JDWMinIE4)return layer.style.visibility;
return "";
}

function moveLayerTo(layer, x, y) {
if (JDWMinIE4) {
layer.style.left = x;
layer.style.top  = y;   }
}

function moveLayerBy(layer, dx, dy) {
if (JDWMinIE4) {
layer.style.pixelLeft += dx;
layer.style.pixelTop  += dy;   }
}

function getLeft(layer) {
if (JDWMinIE4)return layer.style.pixelLeft;
return -1;
}

function getTop(layer) {
if (JDWMinIE4)return layer.style.pixelTop;
return -1;
}

function getRight(layer) {
if (JDWMinIE4)return layer.style.pixelLeft + getWidth(layer);
return -1;
}

function getBottom(layer) {
if (JDWMinIE4)return layer.style.pixelTop + getHeight(layer);
return -1;
}

function getPageLeft(layer) {
var x;
if (JDWMinIE4) {
x = 0;
while (layer.offsetParent != null) {
x += layer.offsetLeft;
layer = layer.offsetParent;}
x += layer.offsetLeft;
return x;}
return -1;
}

function getPageTop(layer) {
var y;
if (JDWMinIE4) {
y = 0;
while (layer.offsetParent != null) {
y += layer.offsetTop;
layer = layer.offsetParent;}
y += layer.offsetTop;
return y;}
return -1;
}

function getWidth(layer) {
if (JDWMinIE4) {
if (layer.style.pixelWidth)return layer.style.pixelWidth;
else return layer.clientWidth;}
return -1;
}

function getHeight(layer) {
if (JDWMinIE4) {
if (layer.style.pixelHeight)return layer.style.pixelHeight;
else return layer.clientHeight;}
return -1;
}

function getzIndex(layer) {
if (JDWMinIE4)return layer.style.zIndex;
return -1;
}

function setzIndex(layer, z) {
if (JDWMinIE4)layer.style.zIndex = z;
}

function clipLayer(layer, clipleft, cliptop, clipright, clipbottom) {
if (JDWMinIE4)layer.style.clip = 'rect(' + cliptop + ' ' +  clipright + ' ' + clipbottom + ' ' + clipleft +')';
}

function getClipLeft(layer) {
if (JDWMinIE4) {
var str =  layer.style.clip;
if (!str)return 0;
var clip = getIEClipValues(layer.style.clip);
return(clip[3]);}
return -1;
}

function getClipTop(layer) {
if (JDWMinIE4) {
var str =  layer.style.clip;
if (!str)return 0;
var clip = getIEClipValues(layer.style.clip);
return clip[0];}
return -1;
}

function getClipRight(layer) {
if (JDWMinIE4) {
var str =  layer.style.clip;
if (!str)return layer.style.pixelWidth;
var clip = getIEClipValues(layer.style.clip);
return clip[1];}
return -1;
}

function getClipBottom(layer) {
if (JDWMinIE4) {
var str =  layer.style.clip;
if (!str)return layer.style.pixelHeight;
var clip = getIEClipValues(layer.style.clip);
return clip[2];}
return -1;
}

function getClipWidth(layer) {
if (JDWMinIE4) {
var str = layer.style.clip;
if (!str)return layer.style.pixelWidth;
var clip = getIEClipValues(layer.style.clip);
return clip[1] - clip[3];}
return -1;
}

function getClipHeight(layer) {
if (JDWMinIE4) {
var str =  layer.style.clip;
if (!str)return layer.style.pixelHeight;
var clip = getIEClipValues(layer.style.clip);
return clip[2] - clip[0];}
return -1;
}

function getIEClipValues(str) {
var clip = new Array();
var i;
i = str.indexOf("(");
clip[0] = parseInt(str.substring(i + 1, str.length), 10);
i = str.indexOf(" ", i + 1);
clip[1] = parseInt(str.substring(i + 1, str.length), 10);
i = str.indexOf(" ", i + 1);
clip[2] = parseInt(str.substring(i + 1, str.length), 10);
i = str.indexOf(" ", i + 1);
clip[3] = parseInt(str.substring(i + 1, str.length), 10);
return clip;
}

function scrollLayerTo(layer, x, y, bound) {
var dx = getClipLeft(layer) - x;
var dy = getClipTop(layer) - y;
scrollLayerBy(layer, -dx, -dy, bound);
}

function scrollLayerBy(layer, dx, dy, bound) {
var cl = getClipLeft(layer);
var ct = getClipTop(layer);
var cr = getClipRight(layer);
var cb = getClipBottom(layer);
if (bound) {
if (cl + dx < 0)dx = -cl;
else if (cr + dx > getWidth(layer))dx = getWidth(layer) - cr;
if (ct + dy < 0)dy = -ct;
else if (cb + dy > getHeight(layer))dy = getHeight(layer) - cb;}
clipLayer(layer, cl + dx, ct + dy, cr + dx, cb + dy);
moveLayerBy(layer, -dx, -dy);
}

function setBgColor(layer, color) {
if (JDWMinIE4)layer.style.backgroundColor = color;
}

function getLayer(name) {
if (JDWMinIE4)return eval('document.all.' + name);
return null;
}

function findLayer(name, doc) {
var i, layer;
for (i = 0; i < doc.layers.length; i++) {
layer = doc.layers[i];
if (layer.name == name)return layer;
if (layer.document.layers.length > 0)
if ((layer = findLayer(name, layer.document)) != null)
return layer;}
return null;
}

function getWindowWidth() {
if (JDWMinIE4)return document.body.clientWidth;
return -1;
}

function getWindowHeight() {
if (JDWMinIE4)return document.body.clientHeight;
return -1;
}

function getPageWidth() {
if (JDWMinIE4)return document.body.scrollWidth;
return -1;
}

function getPageHeight() {
if (JDWMinIE4)return document.body.scrollHeight;
return -1;
}

function getPageScrollX() {
if (JDWMinIE4)return document.body.scrollLeft;
return -1;
}

function getPageScrollY() {
if (JDWMinIE4)return document.body.scrollTop;
return -1;
}

var JDWITEMs = new Array();    

function ITEM(text, link) {
this.text = text;    
this.link = link;    
}


function ECSmenu(hdrWidth, menuWidth) {
this.hdrWidth  = hdrWidth;
this.width     = menuWidth;
this.height    = 0;
this.items = new Array();
this.addItem = ECSmenuaddItem;
}


function ECSmenuaddItem(item) {
this.items[this.items.length] = item;
}


function JDWITEM(width) {
this.x = 0;
this.y = 0;
this.width  = width;
this.height = 0;
this.align    = "left";
this.minWidth = 0;
this.inverted = false;
this.menus = new Array();
this.created = false;
this.border    = 2;
this.padding   = 4;
this.separator = 1;
this.setSizes    = JDWITEMSetSizes;
this.setColors   = JDWITEMSetColors;
this.setFonts    = JDWITEMSetFonts;
this.addNAVm     = JDWITEMaddNAVm;
this.create      = JDWITEMCreate;
this.hide        = JDWITEMHide;
this.show        = JDWITEMShow;
this.moveTo      = JDWITEMMoveTo;
this.moveBy      = JDWITEMMoveBy;
this.getzIndex   = JDWITEMGetzIndex;
this.setzIndex   = JDWITEMSetzIndex;
this.getWidth    = JDWITEMGetWidth;
this.getMinWidth = JDWITEMGetMinWidth;
this.getAlign    = JDWITEMGetAlign;
this.setAlign    = JDWITEMSetAlign;
this.resize      = JDWITEMResize;
this.invert      = JDWITEMInvert;
this.isInverted  = JDWITEMIsInverted;
this.index = JDWITEMs.length;
JDWITEMs[this.index] = this;
}

function JDWITEMSetSizes(border, padding, separator) {
if (!this.created) {
this.border = border;
this.padding = padding;
this.separator = separator;   }
}

function JDWITEMSetColors(bdColor,hdrFgColor, hdrBgColor, hdrHiFgColor, hdrHiBgColor,itmFgColor, itmBgColor, itmHiFgColor, itmHiBgColor) {
if (!this.created) {
this.borderColor  = bdColor;
this.hdrFgColor   = hdrFgColor;
this.hdrBgColor   = hdrBgColor;
this.hdrHiFgColor = hdrHiFgColor;
this.hdrHiBgColor = hdrHiBgColor;
this.itmFgColor   = itmFgColor;
this.itmBgColor   = itmBgColor;
this.itmHiFgColor = itmHiFgColor;
this.itmHiBgColor = itmHiBgColor;  }
}

function JDWITEMSetFonts(hdrFamily, hdrStyle, hdrWeight, hdrSize,itmFamily, itmStyle, itmWeight, itmSize) {
if (!this.created) {
this.hdrFontFamily = hdrFamily;
this.hdrFontStyle  = hdrStyle;
this.hdrFontWeight = hdrWeight;
this.hdrFontSize   = hdrSize;
this.itmFontFamily = itmFamily;
this.itmFontStyle  = itmStyle;
this.itmFontWeight = itmWeight;
this.itmFontSize   = itmSize;   }
}

function JDWITEMaddNAVm(menu) {
if (!this.created)this.menus[this.menus.length] = menu;
}

function JDWITEMCreate() {
var str;
var i, j;
var norm, high, end;
var width, height;
var x, y;
var scrX, scrY;
if (this.created || ( !JDWMinIE4))return;
str = "";
if (JDWMinIE4 && !JDWMinIE5) {
scrX = getPageScrollX();
scrY = getPageScrollY();
window.scrollTo(getPageWidth(), getPageHeight());}
if (JDWMinIE4)
str += '<div id="JDWITEM' + this.index + '_filler"'+  ' style="position:absolute;">'+  '</div>\n'+  '<div id="JDWITEM' + this.index + '_hdrsBase"'+  ' style="position:absolute;">\n';
for (i = 0; i < this.menus.length; i++) {
norm = '<table border=0 cellpadding=' + this.padding+ ' cellspacing=0'+ (this.menus[i].hdrWidth > 0 ? ' width=' + this.menus[i].hdrWidth : '')+ ((JDWMinIE4 && !JDWMinIE5) ? ' id="JDWITEM' + this.index + '_tbl' + i + '"': '')+ '><tr><td'+ (this.menus[i].hdrWidth == 0 ? ' nowrap=1' + this.menus[i].hdrWidth : '')+ '>'+ '<span style="color:' + this.hdrFgColor + ';'+ 'font-family:' + this.hdrFontFamily + ';'+ 'font-size:' + this.hdrFontSize + ';'+ 'font-style:' + this.hdrFontStyle + ';'+ 'font-weight:' + this.hdrFontWeight + ';">';
high = '<table border=0 cellpadding=' + this.padding+ ' cellspacing=0'+ (this.menus[i].hdrWidth > 0 ? ' width=' + this.menus[i].hdrWidth : '')+ '><tr><td'+ (this.menus[i].hdrWidth == 0 ? ' nowrap=1' + this.menus[i].hdrWidth : '')+ '>'+ '<span style="color:' + this.hdrHiFgColor + ';'+ 'font-family:' + this.hdrFontFamily + ';'+ 'font-size:' + this.hdrFontSize + ';'+ 'font-style:' + this.hdrFontStyle + ';'+ 'font-weight:' + this.hdrFontWeight + ';">';
end  = '</span></td></tr></table>';
if (JDWMinIE4) {
str += '<div id="JDWITEM' + this.index + '_head' + i + '"'+  ' style="position:absolute;">'+  norm + this.menus[i].items[0].text + end+  '</div>\n'+  '<div id="JDWITEM' + this.index + '_headHigh' + i + '"'+  ' style="position:absolute;">'+  high + this.menus[i].items[0].text + end+  '</div>\n'+  '<div id="JDWITEM' + this.index + '_headDummy' + i + '"'+  ' style="position:absolute;">';
str += '</div>\n';   }
}

if (JDWMinIE4) {
str += '</div>\n';
str = '<div id="JDWITEM' + this.index + '"'+ ' style="position:absolute;left:0px;top:0px;">\n'+ str+ '</div>\n';
document.body.insertAdjacentHTML("beforeEnd", str);
this.baseLayer = getLayer("JDWITEM" + this.index);
}

width = 0;
height = 0;
for (i = 0; i < this.menus.length; i++) {
this.menus[i].hdrNormLayer = getLayer('JDWITEM' + this.index + '_head' + i);
this.menus[i].hdrHighLayer = getLayer('JDWITEM' + this.index + '_headHigh' +i);
this.menus[i].hdrDmmyLayer = getLayer('JDWITEM' + this.index + '_headDummy' + i);
height = Math.max(height, getHeight(this.menus[i].hdrNormLayer));
this.height = height + 2 * this.border;
if (JDWMinIE4 && !JDWMinIE5) {
width = this.menus[i].hdrWidth;
if (width == 0)
width = eval('document.all.JDWITEM' + this.index + '_tbl' + i + '.clientWidth');
JDWITEMIEResizeLayer(this.menus[i].hdrNormLayer, width, height);
JDWITEMIEResizeLayer(this.menus[i].hdrHighLayer, width, height);
JDWITEMIEResizeLayer(this.menus[i].hdrDmmyLayer, width, height);   }
}
x = this.border;
y = this.border;
for (i = 0; i < this.menus.length; i++) {
width = Math.max(this.menus[i].hdrWidth, getWidth(this.menus[i].hdrNormLayer));
if (this.menus[i].width == 0)this.menus[i].width = width + 2 * this.border;
moveLayerTo(this.menus[i].hdrNormLayer, x, y);
setBgColor(this.menus[i].hdrNormLayer, this.hdrBgColor);
clipLayer(this.menus[i].hdrNormLayer, 0, 0, width, height);
inheritLayer(this.menus[i].hdrNormLayer);
moveLayerTo(this.menus[i].hdrHighLayer, x, y);
setBgColor(this.menus[i].hdrHighLayer, this.hdrHiBgColor);
clipLayer(this.menus[i].hdrHighLayer, 0, 0, width, height);
hideLayer(this.menus[i].hdrHighLayer);
moveLayerTo(this.menus[i].hdrDmmyLayer, x, y);
if (JDWMinIE4)JDWITEMIEResizeLayer(this.menus[i].hdrDmmyLayer, width, height);
clipLayer(this.menus[i].hdrDmmyLayer, 0, 0, width, height);
inheritLayer(this.menus[i].hdrDmmyLayer);
this.menus[i].hdrDmmyLayer.highLayer = this.menus[i].hdrHighLayer;
this.menus[i].hdrLeft = x;
x += width + this.border;
this.menus[i].hdrRight = x;
}

this.minWidth = x;
this.width = Math.max(this.minWidth, this.width);
moveLayerTo(this.baseLayer, this.x, this.y);
setBgColor(this.baseLayer, this.borderColor);
if (JDWMinIE4)JDWITEMIEResizeLayer(this.baseLayer, this.width, this.height);
clipLayer(this.baseLayer, 0, 0, this.width, this.height);
this.fillerLayer = getLayer('JDWITEM' + this.index + '_filler');
moveLayerTo(this.fillerLayer, this.border, this.border);
setBgColor(this.fillerLayer, this.hdrBgColor);
width = this.width - 2 * this.border;
height = this.height - 2 * this.border;
if (JDWMinIE4)JDWITEMIEResizeLayer(this.fillerLayer, width, height);
clipLayer(this.fillerLayer, 0, 0, width, height);
inheritLayer(this.fillerLayer);
this.hdrsBaseLayer = getLayer('JDWITEM' + this.index + '_hdrsBase');
if (this.align == "left")this.hdrsOffsetX = 0;
else if (this.align == "center")this.hdrsOffsetX = Math.round((this.width - this.minWidth) / 2);
else if (this.align == "right")this.hdrsOffsetX = this.width - this.minWidth;
else this.hdrsOffsetX = Math.min(parseInt(this.align, 10), this.width - this.minWidth);
moveLayerTo(this.hdrsBaseLayer, this.hdrsOffsetX, 0);
setBgColor(this.hdrsBaseLayer, this.borderColor);
if (JDWMinIE4)JDWITEMIEResizeLayer(this.hdrsBaseLayer, this.minWidth, this.height);
clipLayer(this.hdrsBaseLayer, 0, 0, this.minWidth, this.height);
inheritLayer(this.hdrsBaseLayer);
for (i = 0; i < this.menus.length; i++) {
this.menus[i].hdrDmmyLayer.index = this.index;
this.menus[i].hdrDmmyLayer.offsetX = this.menus[i].hdrLeft - this.border;
if (this.menus[i].hdrDmmyLayer.offsetX + this.menus[i].width > this.width)
this.menus[i].hdrDmmyLayer.offsetX = this.menus[i].hdrRight - this.menus[i].width;
this.menus[i].hdrDmmyLayer.offsetY = this.height - this.border;
this.menus[i].hdrDmmyLayer.onmouseover = JDWITEMHeaderOn;
this.menus[i].hdrDmmyLayer.onmouseout = JDWITEMHeaderOff;
if (JDWMinIE4) {
this.menus[i].hdrDmmyLayer.highLayer = this.menus[i].hdrHighLayer;
this.menus[i].hdrDmmyLayer.link = this.menus[i].items[0].link;
this.menus[i].hdrDmmyLayer.onclick = JDWITEMItemClick;   }
}

norm = '<table border=0 cellpadding=' + this.padding+ ' cellspacing=0 width="100%"><tr><td>'+ '<span style="color:' + this.itmFgColor + ';'+ 'font-family:' + this.itmFontFamily + ';'+ 'font-size:' + this.itmFontSize + ';'+ 'font-style:' + this.itmFontStyle + ';'+ 'font-weight:' + this.itmFontWeight + ';">';
high = '<table border=0 cellpadding=' + this.padding+ ' cellspacing=0 width="100%"><tr><td>'+ '<span style="color:' + this.itmHiFgColor + ';'+ 'font-family:' + this.itmFontFamily + ';'+ 'font-size:' + this.itmFontSize + ';'+ 'font-style:' + this.itmFontStyle + ';'+ 'font-weight:' + this.itmFontWeight + ';">';
end  = '</span></td></tr></table>';
for (i = 0; i < this.menus.length; i++) {
width = this.menus[i].width - 2 * this.border;
str = "";
for (j = 1; j < this.menus[i].items.length; j++) {
if (JDWMinIE4) {
str += '<div id="JDWITEM' + this.index + '_menu' + i + '_norm' + j + '"'+  ' style="position:absolute;width:' + width + 'px;">'+  norm + this.menus[i].items[j].text + end+  '</div>\n'+  '<div id="JDWITEM' + this.index + '_menu' + i + '_high' + j + '"'+  ' style="position:absolute;width:' + width + 'px;">'+  high + this.menus[i].items[j].text + end+  '</div>\n'+  '<div id="JDWITEM' + this.index + '_menu' + i + '_dmmy' + j + '"'+  ' style="position:absolute;width:' + width + 'px;">';
str += '</div>\n'; }
}
if (JDWMinIE4) {
str = '<div id="JDWITEM' + this.index + '_menu' + i + '"'+ ' style="position:absolute;left:0px; top:0px;'+ 'width:' + this.menus[i].width + 'px;visibility:hidden;">\n'+ str+ '</div>\n';
document.body.insertAdjacentHTML("beforeEnd", str);
this.menus[i].baseLayer = getLayer("JDWITEM" + this.index + "_menu" + i);   }
}
if (JDWMinIE4 && !JDWMinIE5)window.scrollTo(x, y);
for (i = 0; i < this.menus.length; i++) {
moveLayerTo(this.menus[i].baseLayer, this.menus[i].hdrDmmyLayer.offsetX, this.menus[i].hdrDmmyLayer.offsetY);
setBgColor(this.menus[i].baseLayer, this.borderColor);
if (this.menus[i].items.length > 1) {this.menus[i].hdrDmmyLayer.menuLayer = this.menus[i].baseLayer;}
else {this.menus[i].hdrDmmyLayer.menuLayer = null;}
x = this.border;
y = this.border;
width = this.menus[i].width - 2 * this.border;
for (j = 1; j < this.menus[i].items.length; j++) {
this.menus[i].items[j].normLayer = getLayer('JDWITEM' + this.index + '_menu' + i + '_norm' + j);
this.menus[i].items[j].highLayer = getLayer('JDWITEM' + this.index + '_menu' + i + '_high' + j);
this.menus[i].items[j].dmmyLayer = getLayer('JDWITEM' + this.index + '_menu' + i + '_dmmy' + j);
height = getHeight(this.menus[i].items[j].normLayer);
moveLayerTo(this.menus[i].items[j].normLayer, x, y);
setBgColor(this.menus[i].items[j].normLayer, this.itmBgColor);
clipLayer(this.menus[i].items[j].normLayer, 0, 0, width, height);
inheritLayer(this.menus[i].items[j].normLayer);
moveLayerTo(this.menus[i].items[j].highLayer, x, y);
setBgColor(this.menus[i].items[j].highLayer, this.itmHiBgColor);
clipLayer(this.menus[i].items[j].highLayer, 0, 0, width, height);
hideLayer(this.menus[i].items[j].highLayer);
moveLayerTo(this.menus[i].items[j].dmmyLayer, x, y);
if (JDWMinIE4)JDWITEMIEResizeLayer(this.menus[i].items[j].dmmyLayer, width, height);
clipLayer(this.menus[i].items[j].dmmyLayer, 0, 0, width, height);
inheritLayer(this.menus[i].items[j].dmmyLayer);
this.menus[i].items[j].dmmyLayer.highLayer = this.menus[i].items[j].highLayer;
this.menus[i].items[j].dmmyLayer.onmouseover = JDWITEMItemOn;
this.menus[i].items[j].dmmyLayer.onmouseout = JDWITEMItemOff;
if (JDWMinIE4) {
this.menus[i].items[j].dmmyLayer.highLayer = this.menus[i].items[j].highLayer;
this.menus[i].items[j].dmmyLayer.parentHighLayer = this.menus[i].hdrHighLayer;
this.menus[i].items[j].dmmyLayer.menuLayer = this.menus[i].baseLayer;
this.menus[i].items[j].dmmyLayer.link = this.menus[i].items[j].link;
this.menus[i].items[j].dmmyLayer.onclick = JDWITEMItemClick;}
y += height + this.separator;}
width = this.menus[i].width;
height = y - this.separator + this.border;
this.menus[i].baseLayer.width = this.menus[i].width;
this.menus[i].baseLayer.height = height;
if (JDWMinIE4)JDWITEMIEResizeLayer(this.menus[i].baseLayer, width, height);
clipLayer(this.menus[i].baseLayer, 0, 0, width, height);
this.menus[i].baseLayer.parentHighLayer = this.menus[i].hdrHighLayer;
this.menus[i].baseLayer.onmouseout = ECSmenuOff;}
this.created = true;
this.resize(this.width);
showLayer(this.baseLayer);
}

function JDWITEMHide() {
if (this.created)hideLayer(this.baseLayer);
}

function JDWITEMShow() {
if (this.created)showLayer(this.baseLayer);
}

function JDWITEMMoveTo(x, y) {
this.x = x;
this.y = y;
if (this.created)moveLayerTo(this.baseLayer, this.x, this.y);
}

function JDWITEMMoveBy(dx, dy) {
this.x += dx;
this.y += dy;
if (this.created)
moveLayerTo(this.baseLayer, this.x, this.y);
}

function JDWITEMGetzIndex() {
if (this.created)return getzIndex(this.baseLayer);
return 0;
}

function JDWITEMSetzIndex(z) {
var i;
if (this.created) {
setzIndex(this.baseLayer, z);
for (i = 0; i < this.menus.length; i++)
setzIndex(this.menus[i].baseLayer, z);   }
}

function JDWITEMGetWidth() {
return this.width;
}

function JDWITEMGetMinWidth() {
return this.minWidth;
}

function JDWITEMGetAlign() {
return this.align;
}

function JDWITEMSetAlign(align) {
this.align = align;
if (this.created)this.resize(this.width);
}

function JDWITEMResize(width) {
if (this.created) {
this.width = Math.max(width, this.minWidth);
if (JDWMinIE4) {
JDWITEMIEResizeLayer(this.fillerLayer, this.width - 2 * this.border, this.height - 2 * this.border);
JDWITEMIEResizeLayer(this.baseLayer, this.width, this.height);}
clipLayer(this.fillerLayer, 0, 0, this.width - 2 * this.border, this.height - 2 * this.border);
clipLayer(this.baseLayer, 0, 0, this.width, this.height);
if (this.align == "left")this.hdrsOffsetX = 0;
else if (this.align == "center")this.hdrsOffsetX = Math.round((this.width - this.minWidth) / 2);
else if (this.align == "right")this.hdrsOffsetX = this.width - this.minWidth;
else this.hdrsOffsetX = Math.min(parseInt(this.align, 10), this.width - this.minWidth);
moveLayerTo(this.hdrsBaseLayer, this.hdrsOffsetX, 0);
for (i = 0; i < this.menus.length; i++) {
this.menus[i].hdrDmmyLayer.offsetX = this.menus[i].hdrLeft - this.border;
if (this.hdrsOffsetX + this.menus[i].hdrDmmyLayer.offsetX + this.menus[i].width > this.width)
this.menus[i].hdrDmmyLayer.offsetX = this.menus[i].hdrRight - this.menus[i].width;   }
}
else this.width = width;
}

function JDWITEMInvert() {
this.inverted = !this.inverted;
}

function JDWITEMIsInverted() {
return this.inverted;
}

function JDWITEMIEResizeLayer(layer, width, height) {
layer.style.pixelWidth = width;
layer.style.pixelHeight = height;
}

function JDWITEMHeaderOn(e) {
var bar;
var x, y;
bar = JDWITEMs[this.index];
if (this.menuLayer != null) {
x = bar.x + bar.hdrsOffsetX + this.offsetX;
y = bar.y + this.offsetY;
if (bar.inverted)
y = bar.y - this.menuLayer.height + bar.border;
moveLayerTo(this.menuLayer, x, y);
this.menuLayer.left = getPageLeft(this.menuLayer);
this.menuLayer.top = getPageTop(this.menuLayer);
this.menuLayer.right = this.menuLayer.left + this.menuLayer.width + 1;
this.menuLayer.bottom = this.menuLayer.top + this.menuLayer.height + 1;}
if (JDWMinIE4) {
if (bar.activeHeader != null && bar.activeHeader != this) {
hideLayer(bar.activeHeader.highLayer);
if (bar.activeHeader.menuLayer != null)
hideLayer(bar.activeHeader.menuLayer);}
bar.activeHeader = this;}
showLayer(this.highLayer);
if (this.menuLayer != null)
showLayer(this.menuLayer);
}

function JDWITEMHeaderOff(e) {
if (this.menuLayer != null) {
if (JDWMinIE4) {
mouseX = window.event.clientX + document.body.scrollLeft;
mouseY = window.event.clientY + document.body.scrollTop;}
if (mouseX >= this.menuLayer.left  && mouseX <= this.menuLayer.right && mouseY >= this.menuLayer.top   && mouseY <= this.menuLayer.bottom)
return;
hideLayer(this.menuLayer);}
hideLayer(this.highLayer);
}

function ECSmenuOff(e) {
if (JDWMinIE4) {
mouseX = window.event.clientX + document.body.scrollLeft;
mouseY = window.event.clientY + document.body.scrollTop;
if (mouseX >= this.left  && mouseX <= this.right && mouseY >= this.top   && mouseY <= this.bottom)
return;}
hideLayer(this);
hideLayer(this.parentHighLayer);
}

function JDWITEMItemOn() {
showLayer(this.highLayer);
}

function JDWITEMItemOff() {
hideLayer(this.highLayer);
}

function JDWITEMItemClick(e) {
if (this.link == "")return true;
if (this.menuLayer != null) {
hideLayer(this.menuLayer);}
if (this.parentHighLayer != null) {
hideLayer(this.parentHighLayer);}
hideLayer(this.highLayer);
if (this.link.indexOf("javascript:") == 0)eval(this.link);
else window.location.href = this.link;
return true;
}

var mouseX = 0;
var mouseY = 0;
document.onmousemove = JDWITEMGetMousePosition;

function JDWITEMGetMousePosition(e) {
if (JDWMinIE4) {
mouseX = window.event.clientX + document.body.scrollLeft;
mouseY = window.event.clientY + document.body.scrollTop;   }
}

var origWidth;
var origHeight;
window.onresize = JDWITEMReload;

function JDWITEMReload() {
if (JDWMinIE4)setTimeout('window.location.href = window.location.href', 2000);
else window.location.href = window.location.href;
}

function G6JDWinit(){
fullWidth = getWindowWidth() - ( getWindowHeight() < getPageHeight() ? 16 : 0);
JDWBAR1.create();
JDWBAR1.moveTo(0,-getWindowHeight()+43);
JDWBAR1.setzIndex(1);
JDWBAR1.resize(fullWidth);
JDWBAR1.setAlign(getWindowWidth()+60);
JDWBAR1.hide();JDWBAR2.create();
JDWBAR2.moveBy(0,-getWindowHeight()+17);
JDWBAR2.resize(fullWidth);
JDWBAR2.setzIndex(2);
NAVupdatePOSY();
}

window.onload=G6JDWinit;

function NAVupdatePOSY() {
var viewTop;
var viewBottom;
var dy;
viewTop = getPageScrollY();
viewBottom = viewTop + getWindowHeight();
dy = Math.round(Math.abs(viewTop - JDWBAR1.y)); 
if (viewTop < JDWBAR1.y) dy = -dy;
dy = Math.round(Math.abs(viewTop - JDWBAR2.y)); 
if (viewTop < JDWBAR2.y) dy = -dy;
if (JDWBAR1.bottom < viewTop) JDWBAR1.moveTo(0, viewTop - JDWBAR1.height);
if (JDWBAR1.top > viewBottom) JDWBAR1.moveTo(0, viewBottom);
if (JDWBAR2.bottom < viewTop) JDWBAR2.moveTo(0, viewTop - JDWBAR2.height);
if (JDWBAR2.top > viewBottom) JDWBAR2.moveTo(0, viewBottom);
JDWBAR1.moveBy(0, dy);
JDWBAR2.moveBy(0, dy);
setTimeout('NAVupdatePOSY()', 0); 
}

var JDWBAR2 = new JDWITEM(0); 
JDWBAR2.setSizes   (1, 4, 1);
JDWBAR2.setColors  ("#808080","#66CC00", "#000033","#CC9900","#0D7CA1", "#CC9999","#660000", "#333399", "#0D7CA1");
JDWBAR2.setFonts   ("Arial, Verdana","plain","bold","15px","Arial, Verdana","plain","bold","12px");
var JDWBAR1 = new JDWITEM(0);
siteMenu = new ECSmenu(0, 80); 
<!-- [Step1]: 这里可以按序增加菜单的名称和网址 -->
siteMenu.addItem(new ITEM("<center>父菜单1</center>", "index.html"));
siteMenu.addItem(new ITEM("<center>子菜单1</center>", "default.htm"));
siteMenu.addItem(new ITEM("<center>子菜单2</center>", "default.htm"));
siteMenu.addItem(new ITEM("<center>子菜单3</center>", "default.htm"));
JDWBAR2.addNAVm(siteMenu); 
siteMenu = new ECSmenu(0, 100);
siteMenu.addItem(new ITEM("<center> 父菜单2 </center>", "index.html"));
siteMenu.addItem(new ITEM("<center>子菜单1</center>","default.htm"));
siteMenu.addItem(new ITEM("<center>子菜单2</center>","default.htm"));
siteMenu.addItem(new ITEM("<center>子菜单3</center>","default.htm"));
siteMenu.addItem(new ITEM("<center>子菜单4</center>","default.htm"));
siteMenu.addItem(new ITEM("<center>子菜单5</center>","default.htm"));
JDWBAR2.addNAVm(siteMenu);
siteMenu = new ECSmenu(0, 100);
siteMenu.addItem(new ITEM("<center> 父菜单3 </center>", "index.html"));
siteMenu.addItem(new ITEM("<center>子菜单1</center>","default.htm"));
siteMenu.addItem(new ITEM("<center>子菜单2</center>","default.htm"));
JDWBAR2.addNAVm(siteMenu);
siteMenu = new ECSmenu(0, 100);
siteMenu.addItem(new ITEM("<center> 父菜单4 </center>", "index.html"));
siteMenu.addItem(new ITEM("<center>子菜单1</center>","default.htm"));
siteMenu.addItem(new ITEM("<center>子菜单2</center>","default.htm"));
JDWBAR2.addNAVm(siteMenu);
