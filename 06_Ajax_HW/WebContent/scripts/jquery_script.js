$(document).ready(function(){
	"use strict"

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
		
});


  
	 
