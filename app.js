$(document).ready(function(){

    let container = document.querySelector('.container');
    let onLoadText = document.querySelector('.on-load-text');
    let options = document.querySelector('.options-wrapper');
    let timeOpt = $(".time-opt");
    let musicOpt = document.querySelector('.music-opt');

    setTimeout(function() {
        onLoadText.style.opacity = "0";
    }, 3200);
    // 3200

    setTimeout(function() {
        onLoadText.style.display = "none";
    }, 5);
    // 5000

    setTimeout(function() {
        options.style.opacity = "1";
    }, 10);
    // 5800

    $('.time-options ul li').click(function() {
        $(this).css("background-color", "#4d4c61");
    });

    // if you click another element, 
    // -> background color goes back to normal on all other elements

    $('.music-options ul li').click(function() {
        $(this).css("background-color", "#4d4c61");
    });

});