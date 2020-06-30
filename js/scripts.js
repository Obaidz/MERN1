$(document).ready(function() {         // play pause for one button
    $('#mycarousel').carousel({
        interval: 1000                  
    });

    $('#carouselButton').click(function() {   
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {           // if  button has a tag span (which we know it has)and that span has class 'fa-pause', then it is acting as pause button.
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');          // So, when pause button in clicked to pause carousel,
            $('#carouselButton').children('span').addClass('fa-play');              //pause it, change children class (span) pause icon, remove it and add (play icon to span).
        }    
        else {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');          // So, when play button in clicked to play carousel,
            $('#carouselButton').children('span').addClass('fa-pause');             //play it, change children class (span) play icon, remove it and add (pause icon to span).
        }
    });

});

$(document).ready(function() {                  // jquery code for tooltip to toggle for reserver button
    $('[data-toggle="tooltip"]').tooltip();     // this function will be invoked automatically as the page uploads.
}); 

$(document).ready(function() {                  
    
});


/*
                $(document).ready(function() {         // will run this function when page will load
                    $('#mycarousel').carousel({
                        interval: 2000                  // 2000 = 2000ms = 2s
                    });
                    
                    $('#carousel-pause').click(function() {         // code for play pause buttons separately
                        $('#mycarousel').carousel('pause');
                    });

                    $('#carousel-play').click(function() {
                        $('#mycarousel').carousel('cycle');
                    });
                });
                */
