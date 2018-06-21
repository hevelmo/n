/*
    Autor: Heriberto Velasco Mora
    Proyect: 

    [var] vars


    //Method

    [method] browser

**/
/*
 *  [var] vars
 */
    /* */
        var inc;
        inc = 'nav__inc_';
    /* */
/* end -> [var] vars */
/*
 *  [method] artyom
 */
    /* */
        var artyom = {
            initialized: false,
            initialize: function() {
                if ( this.initialized ) return;
                this.initialized = true;
                this.build;
            },
            build: function() {
                this._init();
            },
            _init: function() {
                this.artyom();
            },
            artyom: function() {
            },
            artyom_initialize: function() {
                window.artyom = new Artyom();
                artyom.initialize({
                    continuous: false,
                    lang: "es-ES",
                    obeyKeyword: "ashtacrackboombang",
                    listen: false,
                    debug: true
                });
                getData('imagen');
                getData('inicio');
                function getData(element) {
                    $( '.' + $inc + 'element' ).mouseenter(function() {
                        el = '.' + $inc + 'element';
                        el_class = $(el).data('inclusion');

                        artyom.say(el_class);
                        console.log(el_class);
                        alertify.notify(el_class);
                    });
                }
            }
        }

    /* */
/* end -> [method] artyom */
var VOLU;
VOLU = {};
VOLU = (function() {
    "use strict";
    function sendFromVoluntarios(nombre, correo, edad, residencia, gustos_pasatiempos, experiencia, horario, apoyo, host) {
        var _url, _loader;
        _url = host + "core/voluntarios/send_form_voluntarios.php";
        _loader = $('.loader_gif');

        $.ajax({
            type: "POST",
            url: _url,
            data: {nombre:nombre, correo:correo, edad:edad, residencia:residencia, gustos_pasatiempos:gustos_pasatiempos, experiencia:experiencia, horario:horario, apoyo:apoyo, host: host},
            beforeSend: function() {
                setTimeout(function(){
                    _loader.fadeIn(500).html('<img src="'+ host + 'img/loader.gif">').delay(1000).fadeOut(500);
                }, 1000);
            },
            success: function(data){
                setTimeout(function(){
                    //console.log(data);
                    alertify.success('Tu mensaje se enviado exitosamente');
                }, 4000);
            }
        }).done(function() {
            setTimeout(function(){
                $("#form-voluntarios")[0].reset();
                //$('#send_add_question').addClass('disable-button');
            }, 4500);
        });
    }
    function sendFromContacto(nombre, correo, mensaje, host) {
        var _url, _loader;
        _url = host + "core/contacto/send_form_contacto.php";
        _loader = $('.loader_gif');

        $.ajax({
            type: "POST",
            url: _url,
            data: {nombre:nombre, correo:correo, mensaje:mensaje, host: host},
            beforeSend: function() {
                setTimeout(function(){
                    _loader.fadeIn(500).html('<img src="'+ host + 'img/loader.gif">').delay(1000).fadeOut(500);
                }, 1000);
            },
            success: function(data){
                setTimeout(function(){
                    //console.log(data);
                    alertify.success('Tu mensaje se enviado exitosamente');
                }, 4000);
            }
        }).done(function() {
            setTimeout(function(){
                $("#form-contacto")[0].reset();
                //$('#send_add_question').addClass('disable-button');
            }, 4500);
        });
    }
    return {
           sendFromContacto : sendFromContacto,
        sendFromVoluntarios : sendFromVoluntarios
    };
}());