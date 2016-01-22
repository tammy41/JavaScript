// JavaScript Document
if (!document.layers&&!document.all) event="test"

function YY_MouseStar(evnt) { 
 if (yyns4)  {if (evnt.pageX) {yy_ml=evnt.pageX;  yy_mt=evnt.pageY;}  }
 else{ yy_ml=(event.clientX + document.body.scrollLeft); yy_mt=(event.clientY+document.body.scrollTop); }
 if (yy_tracescript) eval(yy_tracescript)
}

function YY_LayerStar(yyleft,yytop,yyfnx,yyfny,yydiv,yybilder,yyloop,yyto,yycnt,yystep) { 
  if ((document.layers)||(document.all)){
     with (Math) {yynextx= eval(yyfnx)}
     with (Math) {yynexty= eval(yyfny)}
     yycnt=(yyloop && yycnt>=yystep*yybilder)?0:yycnt+yystep;
     if (document.layers){
        eval(yydiv+".top="+(yynexty+yytop))
        eval(yydiv+".left="+(yynextx+yyleft))  }
     if (document.all){
        eval("yydiv=yydiv.replace(/.layers/gi, '.all')");
        eval(yydiv+".style.pixelTop="+(yynexty+yytop));
        eval(yydiv+".style.pixelLeft="+(yynextx+yyleft));  }
     argStr='YY_LayerStar('+yyleft+','+yytop+',"'+yyfnx+'","'+yyfny+'","'+yydiv+'",'+yybilder+','+yyloop+','+yyto+','+yycnt+','+yystep+')';
      if (yycnt<=yystep*yybilder){eval(yydiv+".yyto=setTimeout(argStr,yyto)");}
    }
}



var yyns4=window.Event?true:false; var yy_mt = 0; var yy_ml = 0;
document.onmousemove = YY_MouseStar;
yy_tracescript = '';

if (yyns4){ document.captureEvents(Event.mousemove); YY_MouseStar('',',document.YY_MouseStar1')}

YY_LayerStar(0,0,'yy_ml+cos((15*sin(yycnt/40))+0)*150*(sin(10+yycnt/20)+0.3)','yy_mt+sin((15*sin(yycnt/34))+0)*150*(sin(10+yycnt/20)+0.3)','document.layers[\'yyd0\']',2002,true,88,7,1);
YY_LayerStar(0,0,'yy_ml+cos((15*sin(yycnt/28))+30)*150*(sin(10+yycnt/20)+0.3)','yy_mt+sin((15*sin(yycnt/9))+30)*150*(sin(10+yycnt/20)+0.3)','document.layers[\'yyd1\']',2002,true,88,7,1);
YY_LayerStar(0,0,'yy_ml+cos((15*sin(yycnt/16))+60)*150*(sin(10+yycnt/20)+0.3)','yy_mt+sin((15*sin(yycnt/16))+60)*150*(sin(10+yycnt/20)+0.3)','document.layers[\'yyd2\']',2002,true,88,7,1);
YY_LayerStar(0,0,'yy_ml+cos((15*sin(yycnt/7))+90)*150*(sin(10+yycnt/20)+0.3)','yy_mt+sin((15*sin(yycnt/44))+90)*150*(sin(10+yycnt/20)+0.3)','document.layers[\'yyd3\']',2002,true,88,7,1);
YY_LayerStar(0,0,'yy_ml+cos((15*sin(yycnt/34))+120)*150*(sin(10+yycnt/20)+0.3)','yy_mt+sin((15*sin(yycnt/2))+120)*150*(sin(10+yycnt/20)+0.3)','document.layers[\'yyd4\']',2002,true,88,7,1);
YY_LayerStar(0,0,'yy_ml+cos((15*sin(yycnt/38))+150)*150*(sin(10+yycnt/20)+0.3)','yy_mt+sin((15*sin(yycnt/18))+150)*150*(sin(10+yycnt/20)+0.3)','document.layers[\'yyd5\']',2002,true,88,7,1);
