var $;

// The jQuery team has also created an even shorter method for the document ready event

$(function () {

    "use strict";

    /*  Syntax:

        $(selector).slideDown(speed,callback); */

    $("#flip").click(function () {

        $("#panel").slideDown("slow");

    });

    /*  Syntax:

        $(selector).slideUp(speed,callback); */

    $("#flip2").click(function () {

        $("#panel").slideUp("slow");

    });


    /*  Syntax:

        $(selector).slideToggle(speed,callback); */

    $("#flip3").click(function () {

        $("#panel").slideToggle("slow");

    });


    $("#flip4").click(function () {
        
        $("#panel").slideDown(5000);
        
    });
    
    $("#stop").click(function () {
        
        /*  Syntax:

        $(selector).stop(stopAll,goToEnd); */
        
        $("#panel").stop();
        
    });


});
