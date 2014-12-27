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
		
	// 17
	var $element = $("<input id='newInput' />");
	var div = $("div#dynamiccontent");
	div.prepend($element);
	
	

	// 18
	var c=0;
	$("input#newInput").on('change',function(){
		
		//19
		c++;
		if (c==1) {1
			$("ul#posts").empty();
		}
		
		$.ajax('http://jsonplaceholder.typicode.com/posts?userId=' + ($("input#newInput").val() ), {
			method: 'GET'
		}).then(processResponse2, handleError);
	});
	
	
	
	
	
	
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
	
	
	
	var c2=0;
	function processResponse2(response) {
		var list = $('ul#posts');

		$.each(response/*.slice(0,5)*/, function(){
			c2++;
			
			var newElement = $("<li id='li"+c2+"'/>");
			newElement.text(this.title);
			list.append(newElement);
			
			// 20
			var list2 = $('ul#posts');
			var newElement = $("<button id='del"+c2+"' >X</button>");
			list2.append(newElement);

			for (var i=1; i<=c2; i++) {

				$("button#del"+i).click(function(){
					var x;
					if (confirm("Press a button!") == true) {
						$.ajax('http://jsonplaceholder.typicode.com/posts/' + (this.id), {
							method: 'DELETE'
						}).then(function(){
							$("button#del"+(i-1)).toggle();	
							$("li#li"+(i-1)).toggle();	
						});
					} 

					throw new Error("Something went badly wrong!"); 
				});
			} //for

			return false;
			
		});
	}
	
	


	$.ajax('http://jsonplaceholder.typicode.com/posts', {
		  method: 'GET'
	}).then(processResponse, handleError);
	
	
	
	var count=0;
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
				count++;

				$.ajax('http://jsonplaceholder.typicode.com/posts', {
					method: 'POST',
					data: {
					    title: name,
					    body: 'body',
					    userId: 1,
					    id: (100+count)
					  }
				}).then(function(data) {
				  newId = data.id;
				  
				  
					//14
					$.ajax('http://jsonplaceholder.typicode.com/posts/'+newId, {
						  method: 'GET'
					}).then(function(data){

						var list = $('ul#posts');
					
						var newElement = $("<li>"+(data.title)+"</li><button id='delete"+count+"' >X</button>");
						// newElement.text(data.title);
						list.append(newElement);
						
						
						// 15
						for (var i=1; i<=count; i++) {
	
							$("button#delete"+i).click(function(){
				                        	
				                        	// 16
								var x;
								if (confirm("Press a button!") == true) {
							
									$.ajax('http://jsonplaceholder.typicode.com/posts/'+(data.id), {
										method: 'DELETE'
									}).then(function(){
										$("button#delete"+(i-1)).toggle();	
										$("li#li"+(i-1)).toggle();	
									});
						
								}
							
								throw new Error("Something went badly wrong!"); //break
							});
						} //for
						
						
						
						
					});
					  
				});
			}
	});
	
	
	
	
	
	
	
	



});


  
	 
