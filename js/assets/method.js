/*
    Autor: Heriberto Velasco Mora
    Proyect: Computadoras Ghia

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
    function sendFromVoluntarios(nombre, correo, edad, residencia, gastos_pasatiempos, experiencia, horario, apoyo, host) {
        var _url, _loader;
        console.log(host);
        _url = host + "core/voluntarios/send_form_voluntarios.php";
        _loader = $('.loader');

        console.log(_url);
        $.ajax({
            type: "POST",
            url: _url,
            data: {nombre:nombre, correo:correo, edad:edad, residencia:residencia, gustos_pasatiempos:gastos_pasatiempos, experiencia:experiencia, horario:horario, apoyo:apoyo},
            beforeSend: function() {
                setTimeout(function(){
                    //_loader.fadeIn(1000).html('<img src="'+ host + 'img/loader.gif">').delay(2000).fadeOut(1000);
                }, 2000);
            },
            success: function(data){
                setTimeout(function(){
                    console.log(data);
                    //alertify.success('Tu pregunta se ha enviado');
                }, 8000);
            }
        }).done(function() {
            setTimeout(function(){
                $("#form-voluntarios")[0].reset();
                //$('#send_add_question').addClass('disable-button');
            }, 9000);
        });
    }
    return {
        sendFromVoluntarios : sendFromVoluntarios
    };
}());