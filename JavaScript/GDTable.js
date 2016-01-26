// JavaScript Document
function ProduceTable(){
  var x=1;
  var y=1;
  var tot="";
  var r_temp="";
  var d_cell="";
  var bgc=document.mytable.bgcolor.options[document.mytable.bgcolor.selectedIndex].value;
  var bor=document.mytable.border.options[document.mytable.border.selectedIndex].value;
  var cellalign=document.mytable.cellalign.options[document.mytable.cellalign.selectedIndex].value;
  var cellvalign=document.mytable.cellvalign.options[document.mytable.cellvalign.selectedIndex].value;
  var num_of_cols=document.mytable.cols.value
  var num_of_rows=document.mytable.rows.value  
<!-- [Step1]: 这里可以更改弹出警告框中的信息 -->
  if (document.mytable.rows.value<=0){ window.alert("行数应该 >= 1")
      return }
  if (document.mytable.cols.value<=0){ window.alert("列数应该 >= 1")
      return }
  while (num_of_rows>0) {
     while(num_of_cols>0){
<!-- [Step2]: 在此能够修改弹出确认窗口中的信息 -->
	   var cell_text=confirm("您确定要继续生成动态表格么？")
       if(cell_text) {
<!-- [Step3]: 这里可以设置JavaScript提示窗口中的信息 -->
          d_cell=prompt("请输入第 "+x+" 行，第 "+y+" 列中的信息：")
          if(!d_cell) return;
          r_temp=r_temp+"<td align="+cellalign+" valign="+cellvalign+">"+d_cell+"</td>"
          num_of_cols=num_of_cols-1;
          y=y+1;  }
       else window.alert("难道您想放弃么？？") }
   tot=tot+"<tr>"+r_temp+"</tr>"
   r_temp="";
   num_of_cols=document.mytable.cols.value
   var y=1;
   num_of_rows=num_of_rows-1;
   x=x+1;  }
 var stl="<style type='text/css'>"+"#dyn {position:relative;"+"left:"+150+";top:"+150+"}"+"</style>"
 var html="<html><head><title></title></head>"+stl+"<body>"+"<table border="+bor+" id=dyn "+" bgcolor="+ bgc+"'>"+tot+"</table></body></html>"
<!-- [Step4]: 在此能够更改显示生成表格的页面网址 -->
 window.open('../CH18/Ch18-258.html').document.write(html) 
}