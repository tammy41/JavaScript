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



/*实现搜索引擎*/
var key = "";

function SearchEngineer() {
  SearchInfo(new SetLinks(sizeindex),document.form.search.value);
}

function SearchInfo(links, keyword){
    document.write("<BODY fontsize='2' BGCOLOR='#fef4d2'  LINK='#99CC00' >")
    document.write("搜索结果：" +keyword +"<br><br>");
    for (var q=1; q<=links.length; q++) {
       if (links[q].URL.toLowerCase().indexOf(keyword) != -1){
	        document.write("<a href=" + links[q].URL + ">" + links[q].Name + "</a> - ");          
            document.write( links[q].Category + "<br><br>");
            continue;    }
       if (links[q].Desc.toLowerCase().indexOf(keyword) != -1) {
            document.write("<a href=" + links[q].URL  + ">" + links[q].Name + "</a> - ");          
            document.write( links[q].Category + "<br><br>");
            continue;     }
       if (links[q].Name.toLowerCase().indexOf(keyword) != -1) {
            document.write("<a href=" + links[q].URL + ">" + links[q].Name + "</a> - ");
            document.write( links[q].Category + "<br><br>");
           continue;    }   }                                       
}

function SetLinks(size) {
   this.length = size;
   for (var r=1; r<= size; r++) {
       this[r] = new makeEntry();
       this[r].Name = namesArray[r];
       this[r].URL = urlsArray[r];
       this[r].Desc = descArray[r];
       this[r].Category = categoryArray[r]; }
   return this;
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
   for (var k = 1; k <= n; k++) { this[k] = "";  }
   return this;
}               

var sizeindex=0 
var index=0
datesArray = new makeArray(sizeindex);
namesArray = new makeArray(sizeindex);
urlsArray = new makeArray(sizeindex);
descArray = new makeArray(sizeindex);
categoryArray = new makeArray(sizeindex);

index += 1 
<!-- [Step1]: 这里可以按序增加搜索的名称、网址、关键词和注释 -->
namesArray[index] = "新 浪 网"
urlsArray[index] = "http://www.sina.com.cn"
descArray[index] = "sina chat news hotel women friend"
categoryArray[index] = "全球最大的华人网站！"

index += 1 
namesArray[index] = "263 在线"
urlsArray[index] = "http://www.263.net.cn"
descArray[index] = "263 mail life china flash news"
categoryArray[index] = "中国人的网上家园！"

index += 1 
namesArray[index] = "搜 狐 网"
urlsArray[index] = "http://www.sohu.com"
descArray[index] = "sohu news IT education chinaren"
categoryArray[index] = "中国互联网第一品牌!"

sizeindex = index;