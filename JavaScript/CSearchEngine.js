// JavaScript Document
var key = "";

function SearchEngineer(links, keyword){
   document.write("搜索结果: " + keyword +"<br>");
   document.write("<table border=1>");
   for (var q=1; q<=links.length; q++) {
     if (links[q].URL.indexOf(keyword) != -1)  {  showLink(links,q);  continue;  }
     if (links[q].Desc.indexOf(keyword) != -1) {  showLink(links,q);  continue;  }
     if (links[q].Name.indexOf(keyword) != -1) {  showLink(links,q);  continue;  }  }
   document.write("</table>");
} 

function makeLinks(size) {
   this.length = size;
   for (var r=1; r<= size; r++) {
      this[r] = new makeEntry();
      this[r].Name = namesArray[r];
      this[r].URL = urlsArray[r];
      this[r].Desc = descArray[r]; }
   return this;
}

function showAll(linkobj) {
   for (var s=1; s<= linkobj.length; s++) { showLink(linkobj,s); }
}

function showLink (links, index) {
   document.write("<tr>");
   document.write("<td><a href=" + links[index].URL +">" + links[index].Name + "</a></td>");
   document.write("<td>" + links[index].Desc + "</td></tr>");
}

function makeEntry (){
   this.Name="";
   this.URL = "";
   this.Desc = "";
   this.Category = "";
   return this;
}

function makeArray(n) {
   this.length = n;
   for (var k = 1; k <= n; k++) { this[k] = ""; }
   return this;
} 

var sizeindex=0 
var index=0
datesArray = new makeArray(sizeindex);
namesArray = new makeArray(sizeindex);
urlsArray = new makeArray(sizeindex);
descArray = new makeArray(sizeindex);

index += 1 
<!-- [Step1]: 这里可以按序增加要搜索的关键词以及名称和网址 -->
namesArray[index] = "新 浪 网"
urlsArray[index] = "http://www.sina.com.cn"
descArray[index] = "sina chat news hotel women friend"

index += 1 
namesArray[index] = "263 在线"
urlsArray[index] = "http://www.263.net.cn"
descArray[index] = "263 mail life china flash news"

index += 1 
namesArray[index] = "搜 狐 网"
urlsArray[index] = "http://www.sohu.com"
descArray[index] = "sohu news IT education chinaren"

sizeindex = index;
<!-- [Step2]: 在此能够更改提示窗口的信息 -->
SearchEngineer(new makeLinks(sizeindex), prompt("输入查询关键词：","关键词"));
<!-- [Step3]: 这里可以设置按钮的名称 -->
document.write("<form><input type=button value='重新搜索' onClick='history.go(0)'></form>");