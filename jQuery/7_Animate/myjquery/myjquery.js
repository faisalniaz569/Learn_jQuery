var $;

// The jQuery team has also created an even shorter method for the document ready event

$(function () {

    "use strict";

    $("button#animate").click(function () {

        $("div.animate").animate({
            left: "250px"
        });

    });


    $("button#animate_1").click(function () {

        $("div.animate1").animate({

            left: "250px",
            opacity: "0.5",
            height: "150px",
            width: "150px"

        });

    });


    $("button#animate_2").click(function () {

        $("div.animate2").animate({

            left: "250px",
            height: "+=150px",
            width: "+=150px"

        });

    });


    $("button#animate_3").click(function () {

        $("div.animate3").animate({
            height: "toggle"
        });

    });


    $("button#animate_4").click(function () {

        var div = $("div");
        div.animate({
            height: "300px",
            opacity: "0.4"
        }, "slow");

        div.animate({
            width: "300px",
            opacity: "0.8"
        }, "slow");

        div.animate({
            height: "100px",
            opacity: "0.4"
        }, "slow");

        div.animate({
            width: "100px",
            opacity: "0.8"
        }, "slow");

    });


    $("button#animate_5").click(function () {
        
        var div = $("div");
        
        div.animate({
            left: "100px"
        }, "slow");
        
        div.animate({
            fontSize: "3em"
        }, "slow");
        
    });


});
