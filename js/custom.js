$(document).ready(function() {

"use strict";

//$('.venobox').venobox();


/* =================================
   LOADER
=================================== */
// makes sure the whole site is loaded
$(window).on('load', function() {

    // will first fade out the loading animation
    $(".loader-inner").fadeOut();
    // will fade out the whole DIV that covers the website.
    $(".loader").fadeOut("slow");

    /*
    var $inc;
    $inc = 'nav__inc_';
    window.artyom  = new Artyom();
    artyom.initialize({
    continuous: false,
    lang: "es-ES",
    obeyKeyword: "ashtacrackboombang",
    listen: false,
    debug: true
  });

  $(window).on('load', function() {
});
$('html').one('mouseenter', '.nupali', function() {
getData('.nupali');
});
getData('image');
getData('inicio');
function getData(element) {
$( '.' + $inc + element ).mouseenter(function() {
el = '.' + $inc + element;
el_class = $(el).data('inclusion');

artyom.say(el_class);
console.log(el_class);
alertify.notify(el_class);
});
}
$('html').one('mouseenter', '.nupali', function() {
console.log("artyom say");
var el = 'body.nupali';
var el_class = $(el).data('inclusion');

artyom.say(el_class);
console.log(el_class);
alertify.notify(el_class);
});
    */
});


/* =================================
   NAVBAR COLLAPSE ON SCROLL
=================================== */
$(window).on('scroll', function(){
    var b = $(window).scrollTop();
    if( b > 60 ){
        $(".navbar").addClass("top-nav-collapse");
    } else {
        $(".navbar").removeClass("top-nav-collapse");
    }
});

/* =================================
   NAVBAR WITH TOP BAR
=================================== */
$('.nav-2').affix({
      offset: {
        top: $('.top-bar').height()
      }
});


/* ===========================================================
   PAGE SCROLLING FEATURE
============================================================== */
$('a.smooth-scroll').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top + 20
    }, 1500, 'easeInOutExpo');
    $(document).on("scroll", onScroll);
    event.preventDefault();
});
$(document).on("scroll", onScroll);

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#navbar-collapse a.scroller.smooth-scroll').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));

        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navbar-collapse ul li a.scroller.smooth-scroll').parent('#navbar-collapse ul li').removeClass("active");
            currLink.parent('#navbar-collapse ul li').addClass("active");
        } else{
            currLink.parent('#navbar-collapse ul li').removeClass("active");
        }
    });
}





/* ===========================================================
    WOW ANIMATIONS
============================================================== */
new WOW().init();


/* ===========================================================
   HIDE MOBILE MENU AFTER CLICKING
============================================================== */
$(window).on('click',function() {
    $('.collapse').collapse('hide');
});


/* ===========================================================
   VIDEO BACKGROUND
============================================================== */
$('.video-play').vide("img/video/colibri", {
    volume: 1,
    playbackRate: 1,
    muted: true,
    loop: true,
    autoplay: true,
    position: '50% 50%', // Similar to the CSS `background-position` property.
    posterType: 'jpg', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
    resizing: true // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
});


/* ===========================================================
   MAGNIFIC POPUP
============================================================== */
$('.mp-singleimg').magnificPopup({
    type: 'image'
});

$('.mp-gallery').magnificPopup({
    type: 'image',
    gallery:{enabled:true},
});

$('.mp-iframe').magnificPopup({
    type: 'iframe'
});


/* ===========================================================
   GOOGLE MAPS
============================================================== */
/* active mouse scroll when the user clicks into the map*/
if( $('.map-container').length ) {
    $('.map-container').on('click', function () {
        $('.map-iframe').css("pointer-events", "auto");
    });

    $( ".map-container" ).on('mouseleave', function() {
      $('.map-iframe').css("pointer-events", "none");
    });
}


/* ===========================================================
   BOOTSTRAP FIX FOR IE10 in Windows 8 and Windows Phone 8
============================================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(
        document.createTextNode(
            '@-ms-viewport{width:auto!important}'
            )
        );
    document.querySelector('head').appendChild(msViewportStyle);
}



}); // End $(document).ready Function
