$(document).ready(function() {

    $('#gallery-logos').bxSlider({
        pager: false,
        controls: false,
        minSlides: 5,
        maxSlides: 13,
        slideWidth: 235,
        ticker: true,
        speed: 90000
    });
    $('#gallery-logros').bxSlider({
        pager: false,
        controls: false,
        minSlides: 1,
        maxSlides: 8,
        slideWidth: 235,
        ticker: true,
        speed: 20000
    });

    /* ===========================================================
       BACK TO TOP BUTTON
    ============================================================== */
    var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.top');

    //hide or show the "back to top" link
    $(window).on('scroll', function() {
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('is-visible') : $back_to_top.removeClass('is-visible fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0
            }, scroll_top_duration
        );
    });

    /*
    */
    /*
    */
    


    /*
    $( '.' + $inc + 'nosotros' ).mouseenter(function() {
        el = '.' + $inc + 'nosotros';
        el_class = $(el).data('inclusion');
        el_info = $(el).data('info');

        artyom.say(el_class);
        artyom.say(el_info);
        console.log(el_class);
        console.log(el_info);
        alertify.notify(el_class);
        alertify.notify(el_info);
    });
    $( '.' + $inc + 'mision' ).mouseenter(function() {
        el = '.' + $inc + 'mision';
        el_class = $(el).data('inclusion');

        artyom.say(el_class);
        console.log(el_class);
        alertify.notify(el_class);
    });
    $( '.' + $inc + 'vision' ).mouseenter(function() {
        el = '.' + $inc + 'vision';
        el_class = $(el).data('inclusion');

        artyom.say(el_class);
        console.log(el_class);
        alertify.notify(el_class);
    });
    $( '.' + $inc + 'valores' ).mouseenter(function() {
        el = '.' + $inc + 'valores';
        el_class = $(el).data('inclusion');

        artyom.say(el_class);
        console.log(el_class);
        alertify.notify(el_class);
    });
    $( '.' + $inc + 'historia' ).mouseenter(function() {
        el = '.' + $inc + 'historia';
        el_class = $(el).data('inclusion');

        artyom.say(el_class);
        console.log(el_class);
        alertify.notify(el_class);
    });
    $( '.' + $inc + 'crew' ).mouseenter(function() {
        el = '.' + $inc + 'crew';
        el_class = $(el).data('inclusion');

        artyom.say(el_class);
        console.log(el_class);
        alertify.notify(el_class);
    });
    $( '.' + $inc + 'proyectos' ).mouseenter(function() {
        el = '.' + $inc + 'proyectos';
        el_class = $(el).data('inclusion');

        artyom.say(el_class);
        console.log(el_class);
        alertify.notify(el_class);
    });
    $( '.' + $inc + 'elemental' ).mouseenter(function() {
        el = '.' + $inc + 'elemental';
        el_class = $(el).data('inclusion');

        artyom.say(el_class);
        console.log(el_class);
        alertify.notify(el_class);
    });
    $( '.' + $inc + 'paseos' ).mouseenter(function() {
        el = '.' + $inc + 'paseos';
        el_class = $(el).data('inclusion');

        artyom.say(el_class);
        console.log(el_class);
        alertify.notify(el_class);
    });
    */
    /*
    */

});
