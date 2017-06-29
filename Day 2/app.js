$(document).ready(function(){
    $("li").click(function(){
      var through = $(this).toggleClass("lineThrough");
          });

     $('#list-items').html(localStorage.getItem('listItems'));

     