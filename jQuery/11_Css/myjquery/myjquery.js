var $;

// The jQuery team has also created an even shorter method for the document ready event

$(function () {

    "use strict";

    $("button.a").click(function () {

        $("p#yellow").css("background-color", "yellow");

    });


    $("button.b").click(function () {

        $("p#lorem").css({
            "background-color": "yellow",
            "font-size": "200%"
        });

    });


    $("button.c").click(function () {

        var txt = "";
        txt += "Width of div: " + $("#div1").width() + "</br>";
        txt += "Height of div: " + $("#div1").height();
        $("#div1").html(txt);

    });


    $("button.d").click(function () {
        
        $("#div2").width(50).height(50);
        
    });


});
