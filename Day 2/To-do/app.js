$(document).ready(function(){
    	
	$("<div class=""></div>add").click(function(){
		var input = $("input[name=info]").val();
		var a = $("ol").prepend("<li class='ds'>"+input+"</li>");
	});

	$("input[name=info]").keyup(function(event){
          if(event.keyCode == 13){
            $(".add").click();
          }         
      });

	$(document).on('dblclick','li', function(){
        $(this).toggleClass('lineThrough').fadeOut('slow');    
      });

	$(".clear").click(function(){
		$("li").fadeOut('slow');
	});
	
	$('input').focus(function() {
        $(this).val('');
      });

	



	$("ol").sortable();

});
      