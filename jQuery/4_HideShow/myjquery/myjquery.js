/*jslint this:true */

var $;

// The jQuery team has also created an even shorter method for the document ready event

$(function () {


    "use strict";

    $("#hide").click(function () {
        $("p").hide();
    });

    $("#show").click(function () {
        $("p").show();
    });


    $("#hidden").click(function () {
        $("span").hide(1000);
    });

    $("#toggle").click(function () {
        
        $("span").toggle(1000);

        
    });


});
