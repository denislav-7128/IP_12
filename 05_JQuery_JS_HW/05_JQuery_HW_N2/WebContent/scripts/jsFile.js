$(document).ready(function(){
	"use strict"
	
	//1
	$("div#col1 h2 a").css("background", "#CCC");
	//2
	$("div#col2 h2 a").css("background", "green");
	//3
	$("div#col3 h2 a").css("background", "red");
	//4
	$("div#col4 h2 a").css("background", "blue");
	

	function mouseOver(selector, name) {
		$(selector).on("mouseenter", function() {
			alert(name);
			console.log("mouse over - "+name);
		});
	}

	//5
	mouseOver("div.menu-top-level-menu-container ul li#menu-item-2912", "Uchilishte");
	//6
	mouseOver("div.menu-top-level-menu-container ul li#menu-item-2933", "Zashto TUES?");
	//7
	mouseOver("div.menu-top-level-menu-container ul li#menu-item-2913", "Priem");
	//8
	mouseOver("div.menu-top-level-menu-container ul li#menu-item-2911", "Saob6teniq");
	//9
	mouseOver("div.menu-top-level-menu-container ul li#menu-item-2914", "Blog");
	
	//10
	$("form#searchform").css({
		"position": "absolute",
		"top": "50px",
		"background": "white"
	});

	//11
	$("div#home div.inscreen").css({
		"border": "1px solid black",
		"width": "500px"
	});
	 
	//12
	$('div#col3 a[href="http://www.elsys-bg.org/blog/article/camp-semkovo-september-2014/"]').css("background", "green");
	
	//13
	$('div#col2 a[href="http://www.elsys-bg.org/notifications/new-deklaration-white-school/"]').css("background", "#CCC");
	
	//14
	$('div#col2 a[href="http://www.elsys-bg.org/notifications/white-school-2014-2015/"]').css("background", "#CCC");
	
	//15
	$('div.clear input[name="subscribe"]').css({
		"width": "207px",
		"background": "#FF6600"
	});
	
});