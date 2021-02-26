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
        $('.time-options ul li').not(this).css("background-color", "#676582");

        let timeID = this.id;
        console.log(timeID);

        if (timeID === 'time-opt-5') {
            console.log('5');
            let timeChoice = 5;
        } else if (timeID === 'time-opt-15') {
            console.log('15');
            let timeChoice = 15;
        } else {
            console.log('30');
            let timeChoice = 30;
        }

        // create countdown with given timeChoice
    });
    
    $('.music-options ul li').click(function() {
        $(this).css("background-color", "#4d4c61");
        $('.music-options ul li').not(this).css("background-color", "#676582");

        let musicID = this.id;
        console.log(musicID);

        if (musicID === 'music-opt-1') {
            console.log('1');
            let audio = $('#audio-1');
            $('#audio-1').get(0).play();
            
            $('#audio-2,#audio-3,#audio-4').each(function() {
                this.pause();
            });

        } else if (musicID === 'music-opt-2') {
            console.log('2');
            let audio = $('#audio-2');
            $('#audio-2').get(0).play();

            $('#audio-1,#audio-3,#audio-4').each(function() {
                this.pause();
            });

        } else if (musicID === 'music-opt-3') {
            console.log('3');
            let audio = $('#audio-3');
            $('#audio-3').get(0).play();

            $('#audio-1,#audio-2,#audio-4').each(function() {
                this.pause();
            });
        } else {
            console.log('4');
            let audio = $('#audio-4');
            $('#audio-4').get(0).play();

            $('#audio-1,#audio-2,#audio-3').each(function() {
                this.pause();
            });
        }
    });

    // if time option and music option are clicked -> 'begin' button appears below music

});