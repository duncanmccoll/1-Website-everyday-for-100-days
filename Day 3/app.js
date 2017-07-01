$(document).ready(function() {

    function randomHex() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    $("button").click(function() {
        $("body").css("background-color", randomHex());
        
       var bg = $("body").css("background-color");
       console.log(bg);
    });

});
