$(document).ready(function() {
    window.artyom  = new Artyom();
    artyom.initialize({
        continuous: false,
        lang: "es-ES",
        obeyKeyword: "ashtacrackboombang",
        listen: false,
        debug: true
    });

    var $inc = 'nav__inc_';

    $( '.' + $inc + 'image' ).mouseenter(function() {
        el = '.' + $inc + 'image';
        el_class = $(el).data('inclusion');

        artyom.say(el_class);
        console.log(el_class);
        alertify.notify(el_class);
    });
    $( '.' + $inc + 'inicio' ).mouseenter(function() {
        el = '.' + $inc + 'inicio';
        el_class = $(el).data('inclusion');

        artyom.say(el_class);
        console.log(el_class);
        alertify.notify(el_class);
    });
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

});