var $;

// The jQuery team has also created an even shorter method for the document ready event

$(function () {

    "use strict";

    $("button").click(function () {
        
        $("#div1").remove();
        
    });
    
    
    $("button.b").click(function () {
        
        $("#div2").empty();
        
    });


});
