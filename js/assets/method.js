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