$(document).ready(function(){
	"use strict"

	// 5
	var $element = $("<div id=dynamiccontent></div>");
	var div = $("div#footer");
	div.prepend($element);
	
	// 6
	var $element = $("<input id='textinput'>");
	var div = $("div#dynamiccontent");
	div.append($element);
	
	
		
		
});


  
	 
