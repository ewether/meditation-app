let container = document.querySelector('.container');
let onLoadText = document.querySelector('.on-load-text');
let options = document.querySelector('.options-wrapper');
let timeOpt = document.querySelector('.time-opt');
let musicOpt = document.querySelector('.music-opt');

setTimeout(function() {
    onLoadText.style.opacity = "0";
}, 3200);

setTimeout(function() {
    onLoadText.style.display = "none";
}, 5);

setTimeout(function() {
    options.style.opacity = "1";
}, 6500);

timeOpt.addEventListener('click', function() {
    timeOpt.style.backgroundColor = "#6e6668";
    console.log(timeOpt);
});