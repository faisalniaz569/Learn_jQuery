var $;
var alert;

// The jQuery team has also created an even shorter method for the document ready event

$(function () {

    "use strict";

    $("button").click(function () {

        $("p").hide("slow", function () {
            alert("The paragraph is now hidden");
        });

    });


    $("button.without").click(function () {
        
        $("p").hide(1000);
        alert("The paragraph is now hidden");
        
    });


});
