$(document).ready(function(){

   
    
    	
	$(".add").click(function(){
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

	$('input').focus(function() {
        $(this).val('');
      });

	if($('input').val() === ""){
		$("ol").hide();
	} else{
		$("ol").show();
	};
    



	$("ol").sortable();

});
      