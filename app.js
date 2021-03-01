$(document).ready(function(){

    let container = document.querySelector('.container');
    let onLoadText = document.querySelector('.on-load-text');
    let options = document.querySelector('.options-wrapper');
    let timeOpt = $(".time-opt");
    let musicOpt = document.querySelector('.music-opt');
    let beginBtn = document.querySelector('.begin-button');
    let countdownTimer = document.querySelector('.countdown-timer');
    let timeLeft = document.querySelector('.time-left');

    setTimeout(function() {
        onLoadText.style.opacity = "0";
    }, 10);
    // 3200

    setTimeout(function() {
        onLoadText.style.display = "none";
    }, 5);
    // 5000

    setTimeout(function() {
        options.style.opacity = "1";
    }, 100);
    // 5800


    let timeOptions = $('.time-options ul li');

    $(timeOptions).click(function() {
        // timeHandler();

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
        setTimeout(function() {
            $(beginBtn).css('opacity', '1');
        }, 15);
    });

    
    let musicOptions = $('.music-options ul li');

    $(musicOptions).click(function() {
        // musicHandler();

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


    $(beginBtn).click(function() {
      $(options).css('opacity', '0');
      $(options).css('transition', 'all 0.3s ease-out');

      setTimeout(function() {
        $(countdownTimer).css('opacity', '1');
          // takes the time option that the user chose
          // start button on click 
          //  -> start countdown from chosen time option
      }, 450);

    });




    // let timeClicked = false;
    // function timeHandler() {
    //     timeClicked = true;
    // }

    // let musicClicked = false;
    // function musicHandler() {
    //     musicClicked = true;
    // }

    // if (timeClicked === true) {
    //     console.log('both clicked');
    // }

});