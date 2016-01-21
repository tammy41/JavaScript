// JavaScript Document
$(document).ready(function() {
    $("#button").click(function(){
		$("p").hide(1000);
	});
	$("#xianshi").click(function(){
		$("p").show(1000);
	});
	$("#yc-or-xs").click(function(){
		$("p").toggle(1000);
	});
});