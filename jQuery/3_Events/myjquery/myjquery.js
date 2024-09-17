/*jslint this:true */

var alert;
var $;

// The jQuery team has also created an even shorter method for the document ready event

$(function () {


    "use strict";

    // one click in p paragraph

    $("p.hide").click(function () {

        // Basic syntax is: $(selector).action()

        $(this).hide();

    });


    // Mouse enter
    $("#p1").mouseenter(function () {

        alert("You entered p1!");
    });

    // Mouse leave
    $("#p2").mouseleave(function () {

        alert("Bye! You now leave p2!");
    });


    // Mouse down
    $("#p3").mousedown(function () {
        alert("Mouse down over p3!");
    });

    //Hovereffect, It takes two functions
    $("#p5").hover(
        function () {
            alert("You entered p5!");
        },

        function () {
            alert("Bye! You now leave p5!");
        }
    );


    $("p.click").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        
        mouseleave: function () {
            $(this).css("background-color", "lightblue");
        },
        
        click: function () {
            $(this).css("background-color", "yellow");
        }
    });


});



$(document).ready(function () {

    "use strict";

    $("input").focus(function () {
        $(this).css("background-color", "yellow");
    });
    $("input").blur(function () {
        $(this).css("background-color", "green");
    });
    

});
