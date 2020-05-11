

$("ul").on("click","li",function(){
	$(this).toggleClass("checked");
});
	
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input").on("keypress",function(event){
	
	
		if(event.which===13)
		{
			var text;
			text=$(this).val();
			$(this).val("");
			$("ul").append("<li><span> <i class='fa fa-trash'></i></span>"+text+"</li>")
		}
		
});

// $("input").hide();

$(".fa-plus").click(function(){
	$("input").fadeToggle();
});
