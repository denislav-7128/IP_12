var i=1;

$("input#add_row").click(function() {
	i++;

	$element = $("<tr> 	<td>"+i+"</td>		<td>text "+i+"</td>	</tr>");
	var list = $("#table");
	list.append($element);
});
