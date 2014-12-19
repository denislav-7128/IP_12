$(document).ready(function(){
	"use strict"

	// 4
	var $element = $("<li id='menu-item-last' > <a href=>new button</a></li>");
	var list = $("ul#menu-top-level-menu");
	list.append($element);


	// 5
	var $element = $("<div id=dynamiccontent>123</div>");
	var div = $("div#footer");
	div.prepend($element);

	
	// 6
	var $element = $("<input id='textinput'>");
	var div = $("div#dynamiccontent");
	div.append($element);
	
	// 7
	var $element = $("<button id='addbutton'>Click here</button>");
	var div = $("div#dynamiccontent");
	div.append($element);
	
	
	// 8	
	var $element = $("<ul id='posts'> </ul>");
	var div = $("div#dynamiccontent");
	div.append($element);	
		

	// 9
	$("ul#menu-top-level-menu.menu li#menu-item-last").click(function(){
		// 10
		$("div#col2").insertBefore("div#col1");
	});
	 
	

});


  
	 
