// JavaScript Document
string = "";
var arraylen = 0; 
var menulen = 0; 
var poslen = 0; 
var dblen = 0; 
var array = new Object();
var position = new Object();
var index = document.database.list.value;
var database = new Database(); 
var menu = new Object();
if ((index.substring(index.length-2,index.length)).indexOf("*") == -1) index += "* ";
else index += " "; 
if (location.search.length > 1) {
    string = unescape(location.Search.substring(1,location.Search.length));
    pos = 0;
    while ((pos = string.indexOf('"',pos)) != -1) {
        string = string.substring(0,pos) + '\\"' + string.substring(pos+1,string.length);
        pos += 2; } 
    SearchEngineer(string);
}

function Database() {
   var pos = 0;
   while ((pos1 = index.indexOf("~",pos)) != -1) {
      pos2 = index.indexOf("|",pos1+1);
      pos3 = index.indexOf("*",pos2+1);
      if ((pos2 != -1)&& (pos2 < pos3) && (pos3 <= index.indexOf("*",pos))) {
         this[dblen++] = new UrlNameKey(index.substring(pos,pos1), index.substring(pos1+1,pos2), index.substring(pos2+1,pos3));
         pos = pos3+1;  }  }
  return this;
}

function SearchEngineer(str) {
   menulen = 0;
   temp = new Object();
   temp_length = 0;
   words_length = 0;
   words = new Object();
   pos = 0;
   while ((pos = str.indexOf(" ")) != -1) {
      words[words_length] = str.substring(0,pos);
      if (words[words_length].length > 0)   words_length++;
      if (str.length == 1)   str="";
      else   str = str.substring(pos+1,str.length); }
   if (str.length > 0)  words[words_length++] = str;
   for (q=0;q<words_length;q++) {
      temp_length = 0;
      str = words[q].toLowerCase();
      pattern_string = pattern(str);
      start_pos = back_up_pos = 0;
      len = (q>0?menulen:dblen);
      for (n=0; n<len; n++) {
          no_back_up = true;
          poslen = 0;
          if (q>0) {  combo = (menu[n].title + " " + menu[n].keywords).toLowerCase();  } 
          else {  combo = (database[n].title + " " + database[n].keywords).toLowerCase();  }
          combo = combo.substring(start_pos,combo.length);
          if (eval(pattern_string)) { temp[temp_length++] = (q>0?menu[n]:database[n]); start_pos = 0; }
		  else if (!no_back_up) {  n--; start_pos += back_up_pos+1; } 
		       else {   start_pos = 0; }   }
      if (q>0) {  added = 0;
          for (i=0;i<temp_length;i++) {  duplicate = false;
              for (j=0;j<menulen&&!duplicate;j++) {  if (menu[j] == temp[i]) { duplicate = true; }}
          if (!duplicate)     menu[menulen+(added++)] = temp[i];   }
          menulen += added;  } 
	  else {   for(h=0;h<temp_length;h++)    menu[h] = temp[h];
          menulen = temp_length;  } }
}

function pattern(str) {
   arraylen = poslen = 0;
   while ((str.length > 1) && (str.charAt(0) == "*")) {str = str.substring(1,str.length); }
   while ((str.length > 1) && (str.charAt(str.length-1) == "*")) { str = str.substring(0,str.length-1); }
   if (str == "*")  return "(true)";
   if (str.indexOf("*") == -1) { array[arraylen++] = str; pat = "(combo.indexOf(array[0]) != -1)"; } 
   else { left = right = 0; pat2 = ""; pat = "(((position[0] = combo.indexOf(array[0])) != -1)";
      while ((right = str.indexOf("*",left)) != -1) {
        array[arraylen++] = str.substring(left,right);
        pat += " && (position["+(poslen)+"] < (position[" +(++poslen)+"] = combo.indexOf(array["+(arraylen)+"],position["+(poslen-1)+"]+array["+(arraylen-1)+"].length"+")))";
      if (!match_across_word_boundaries)
         pat2 = " && (no_back_up = ((back_up_pos += combo.substring(" +"temp_pos = back_up_pos = position[" +(poslen-1)+"]+array["+(arraylen-1)+"].length,position[" + (poslen) + "]).lastIndexOf(' ')) < temp_pos))" + pat2;
        left = right+1;  }
     array[arraylen++] = str.substring(left,str.length);
     pat += pat2+")"; }
  return pat;
}

function InputKey() {
<!-- [Step2]: 在此能够更改警告框中的信息 -->
   if ((document.InputKeyform.keyword.value.length == 0)|| (document.InputKeyform.keyword.value == " ")) {
     alert("请输入关键词！");
     return false; }
   SearchEngineer(document.InputKeyform.keyword.value);
   if (menulen == 0)   menu[menulen++] = new UrlNameKey("","没有搜索结果","");
   document.display.found.options.length = menulen;
   for (n=0; n<menulen; n++) {
      if (menu[n].title.length <= 50) document.display.found.options[n].text = menu[n].title;
      else   document.display.found.options[n].text = menu[n].title.substring(0,50);
      document.display.found.options[n].value = menu[n].url;  } 
  return false;
}

function UrlNameKey(url,title,keywords) {
   while ((url.length > 0) && (url.charAt(0) == " ")) {url = url.substring(1,url.length);}
   this.url = url;
   while ((title.length > 0) && (title.charAt(0) == " ")) {title = title.substring(1,title.length); }
   this.title = title;
   this.keywords = keywords;
   return this;
}

function LinkUrl() {
    sel = document.display.found.selectedIndex;
    if ((sel != -1) && (document.display.found.options[sel].value.length > 0))
       location.href = document.display.found.options[sel].value;
}

<!-- [Step3]: 这里可以更改文本框的列长度 -->
<!-- [Step4]: 在此能够设置选择框的行数 -->
document.write('<form name="InputKeyform"  onSubmit="return InputKey()">'+'关键词： <input type="text"  size=15 name="keyword" value="'+string+'"> '+'<input type="button"  value="搜 索" onClick="InputKey()"><br></form>' +'<form name="display"><select name="found" size=4 >\n');
for (n=0; n<menulen; n++) document.write('<option value="'+menu[n].url+'">'+menu[n].title+'\n');
<!-- [Step5]: 这里可以更改选择框中的默认值 -->
if ((menulen == 0) && (location.search.length <= 1)) document.write('<option value="" >网站列表\n');
document.write('</select><br><input type="button" onClick="LinkUrl()" '+'value="登 陆"></form>');