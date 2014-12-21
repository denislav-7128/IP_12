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
	 
	



	// 11
	function handleError(error) {
		console.error("error", error, arguments);
	}

	function appendToList(list, post) {
		var newElement = $("<li/>");
		newElement.text(post.title);
		list.append(newElement);
	}
	
	function processResponse(response) {
		var list = $('ul#posts');

		var i=0;
		$.each(response/*.slice(0,5)*/, function(){
			// response[i]
			console.log(this.title);
			appendToList(list, this);

			if (++i >= 5) {
				return false;
			}

		});
	}


	$.ajax('http://jsonplaceholder.typicode.com/posts', {
		  method: 'GET'
	}).then(processResponse, handleError);
	
	
	
	
	// 12
	$("button#addbutton").click(function() {
		var itemNameInput = $('input#textinput');			
		var name = itemNameInput.val();

			if(!name) {
				alert("you must enter text");
				return;
	
			// 13
			} else {
				var newId=0;

				$.ajax('http://jsonplaceholder.typicode.com/posts', {
					method: 'POST',
					data: {
					    title: name,
					    body: 'body',
					    userId: 1
					  }
				}).then(function(data) {
				  newId = data.id;
				  
				  
					//14
					$.ajax('http://jsonplaceholder.typicode.com/posts/'+newId, {
						  method: 'GET'
					}).then(function(data){

						var list = $('ul#posts');
					
						var newElement = $("<li/>");
						newElement.text(data.title);
						list.append(newElement);
					});
					  
				});
			}
	});
	
	
	
	
	
	
	
	



});


  
	 
