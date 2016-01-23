// JavaScript Document
function DeMessage(Message, taille, police, RGB) 
{
   var nbCouleurMax = 256;
   var facteur = nbCouleurMax/Message.length;
   var couleur;
   var i;
   var c1,c2,c3;

   for (i=0;i<Message.length;i++)   {     ton=facteur*i;
     if (RGB == 0) {   c1 = 'FF' ;  c2 = conversion(ton);    c3 = c2;    }
     else if (RGB == 1) {   c1 = conversion(ton);   c2 = 'FF'  ;  c3 = c1;     }
          else {    c1 = conversion(ton);    c2 = c1;     c3 = 'FF' ;   }
    document.write ('<FONT SIZE=' + taille + ' FACE="' + police + '" COLOR="#' + c1 + c2 + c3 + '">' + Message.substring (i,i+1) + '</FONT>');
   } 
 }

 function tableau (n) 
 {
 var nb;
 this.length = n;
 for (var i = 1; i <=n; i++)
    if (i<10) {
      nb = i+"";
      nb = nb.substring(0,1);    
      this[i] = nb;
    }
 return this;
 }

 function conversion(couleur) 
 {
   var reste=1;
   var indice;
   var hexa1;
   var hexa2;
   var couleurHexa;
   tabHex = new tableau(16);

   tabHex[10]="A"; tabHex[11]="B"; tabHex[12]="C"; tabHex[13]="D"; tabHex[14]="E"; tabHex[15]="F";
   indice = 1;
   hexa2 = (couleur%16);
   hexa1 = parseInt(couleur/16);
   hexa2 = tabHex[hexa2];
   if (hexa2 == null)     hexa2 = "0";   hexa1 = tabHex[hexa1];
   if (hexa1 == null)     hexa1 = "0";   couleurHexa = hexa1 + hexa2;
   return couleurHexa;
 }