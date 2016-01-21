// JavaScript Document

function test()
{
	var x = document.getElementById("name").value;
	if(x.length>10){
	alert("不能超过10个字符！");
	return false;
	}
	else if (x.length == 0) { 
	alert("请输入您姓名!");
	document.form.name.focus();
	return false;
	}
	return true;
}

function isEmail(strEmail) {
	if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
	return true;
	else if(strEmail == 0){
		alert("请输入您Emali!");
	}
	else
	alert("不是正确的E_mali格式");
}

windows.onload = function(){
	var name = document.getElementById("name");
	name.onclick = function(){
		if("请输入姓名" == this.value){
			this.value="";
		}
	};
};

















