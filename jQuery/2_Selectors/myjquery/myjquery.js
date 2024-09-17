/*jslint this:true */

var $;

$(document).ready(function () {

    "use strict";

    // Element selector
    $("button.a").click(function () {
        $("p").hide();
    });

    // ID selector
    $("button.b").click(function () {
        $("p#test").hide();
    });

    // Class selector
    $("button.c").click(function () {
        $(".test").hide();
    });

    // Selects all elements
    $("button.d").click(function () {
        $("*").hide();
    });

    // Selects the current HTML element
    $("button.e").click(function () {
        $(this).hide();
    });

    // Selects all <p> elements with class="intro"
    $("button.f").click(function () {
        $("p.intro").hide();
    });

    // Selects the first <p> element
    $("button.aa").click(function () {
        $("p:first").hide();
    });

    // Selects the first <li> element of the first <ul>
    $("button.g").click(function () {
        $("ul li:first").hide();
    });

    // Selects the first <li> element of every <ul>
    $("button.bb").click(function () {
        $("ul li:first-child").hide();
    });

    // Selects all elements with an href attribute
    $("button.h").click(function () {
        $("[href]").hide();
    });

    // Selects all <a> elements with a target attribute value equal to "_blank"
    $("button.i").click(function () {
        $("a[target='_blank']").hide();
    });

    // Selects all <a> elements with a target attribute value NOT equal to "_blank"
    $("button.jj").click(function () {
        $("a[target!='_blank']").hide();
    });

    // Selects all <button> elements and <input> elements of type="button"
    $("button").click(function () {
        $(":button").hide();
    });
    
    // Even row selector
    $("table tr:even").css({
        "background-color": "yellow"
    });
    
    // odd row selector
   // $("tr:odd").css("background-color", "yellow");
    $("table tr:odd").css({
        "background-color": "green",
        "color": "white"
    });

});
