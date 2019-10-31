$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    //Add bootstrap scrollspy

    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });

    //smooth scrolling

    $('nav a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //Initialize WOW for element animation
    new WOW().init();

    //pop up for email us page
    $('.button-email-us').magnificPopup({
        type: 'inline',
        midClick: true,
        fixedContentPos: true
    });

});