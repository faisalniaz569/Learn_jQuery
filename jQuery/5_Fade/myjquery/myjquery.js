var $;

// The jQuery team has also created an even shorter method for the document ready event

$(function () {


    "use strict";

    $("button.fadein").click(function () {

        /*  Syntax:

            $(selector).fadeIn(speed,callback); */

        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);

    });


    $("button.fadeout").click(function () {

        /* Syntax:

        $(selector).fadeOut(speed,callback); */

        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);

    });


    $("button.fadeToggle").click(function () {

        /* Syntax:

        $(selector).fadeToggle(speed,callback); */

        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);

    });


    $("button").click(function () {
        
        /* Syntax:

        $(selector).fadeTo(speed,callback); */
        
        $("#div1").fadeTo("slow", 0.15);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.7);
    });


});
