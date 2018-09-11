/*
    [contenido]
    1.  [var] -> global
    2.  [function] -> browser mobile
    3.  [methods] -> initialize global
    4.  [init] initilize sections
    5.  [methods] -> initialize sections: Home
    16. [methods] -> global methods
        1. [browser]
        2. [getSection]
        3. [isMobile]
        4. [mobile_detected]
*/
// [var] -> global
var _element, _classBody, _edge, _ie10, _ie11, _opera, _firefox, _chrome, _safari, _offset, _offset_opacity, _scroll_top_duration, _IS_MOBILE, _browser_mobile;
var NUPALI, _host;
var _url, _url2, _url3, _loader;
var GLOBAL, VOLU;
var  alertify;
var google, map;
var inc;
inc = 'nav__inc_';
//
GLOBAL = {};
VOLU = {};
//
_host = GHIA.getValue('#_host');
//
_element = $(this);
//
_classBody = $('body.ghia');
//
_edge = 'Microsoft Edge';
_ie10 = 'Internet Explorer 10';
_ie11 = 'Internet Explorer 11';
_opera = 'Opera';
_firefox = 'Mozilla Firefox';
_chrome = 'Google Chrome';
_safari = 'Safari';
//
_offset = 300;
_offset_opacity = 1200;
_scroll_top_duration = 700;
//
_IS_MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//
_browser_mobile = '';
// [function] -> browser mobile
(function(a){
    "use strict";
    _browser_mobile=/android.+mobile|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));
})(navigator.userAgent||navigator.vendor||window.$opera);
// [methods] -> initialize global
var global = {
    initialized: false,
    initialize: function() {
        "use strict";
        if ( this.initialized ) {
            return;
        }
        this.initialize = true;

        // build
        this.build();
    },
    build: function() {
        "use strict";
        // console.log('Global');
        this.onReady();
        this.osScroll();
        this.onResize();
    },
    onReady: function() {
        "use strict";
        $(document).ready(function(){
        });
    },
    onScroll: function() {
        "use strict";
    },
    onResize: function() {
        "use strict";
    }
}
GLOBAL = (function() {
    "use strict";
    function startArtyom() {
        artyom.initialize({
  				lang: "es-ES",
  				continuous:true,// Reconoce 1 solo comando y para de escuchar
  	            listen:true, // Iniciar !
  	            debug:true, // Muestra un informe en la consola
  	            speed:1 // Habla normalmente
  			});
    }
    function stopArtyom() {
        artyom.fatality();
    }
    return {
             stopArtyom : stopArtyom,
            startArtyom : startArtyom
    };
}());
// [init] initilize sections
var sections = {
    initialized: false,
    initialize: function(section) {
        "use strict";
        if ( this.initialized ) {
            return;
        }
        this.initialize = true;

        // build
        this.build(section);
    },
    build: function(section) {
        "use strict";
        console.log(section);
        this.events(section);
    },
    events: function(section) {
        "use strict";
        switch (section) {
          case "home":
              home.initialize();
          break;
        }
    }
}
// [methods] -> initialize sections: Home
var home = {
    initialized: false,
    initialize: function() {
        "use strict";
        if ( this.initialized ) {
            return;
        }
        this.initialize = true;

        // build
        this.build();
    },
    build: function() {
        "use strict";
        // console.log('Global');
        this.onReady();
        this.osScroll();
        this.onResize();
    },
    onReady: function() {
        "use strict";
        $(document).ready(function(){
        });
    },
    onScroll: function() {
        "use strict";
    },
    onResize: function() {
        "use strict";
    }
}
// [methods] -> global methods
var browser = {
    init: function() {
        "use strict";
        var _className;
        //console.log('Browser');
        _className = this.getClassName();
        if (_className !== '') {
            $('html').addClass(this.getClassName());
        }
    },
    getBrowser: function() {
        "use strict";
        var _userAgent;
        _userAgent = navigator.userAgent.toLowerCase();
        if (/edge/i.test(_userAgent)) {
            return _edge;
        } else if (/rv:11/i.test(_userAgent)) {
            return _ie11;
        } else if (/msie 10/i.test(_userAgent)) {
            return _ie10;
        } else if (/opr/i.test(_userAgent)) {
            return _opera;
        } else if (/chrome/i.test(_userAgent)) {
            return _chrome;
        } else if (/firefox/i.test(_userAgent)) {
            return _firefox;
        } else if (!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
            return _safari;
        }
        return undefined;
    },
    getClassName: function() {
        "use strict";
        var _browser;
        _browser = this.getBrowser();
        if (_browser === _edge) {
            return 'edge';
        } else if (_browser === _ie11) {
            return 'ie11';
        } else if (_browser === _ie10) {
            return 'ie10';
        } else if (_browser === _opera) {
            return 'opera';
        } else if (_browser === _chrome) {
            return 'chrome';
        } else if (_browser === _firefox) {
            return 'firefox';
        } else if (_browser === _safari) {
            return 'safari';
        } else {
            return '';
        }
    }
};
var isMobile = {
    Android: function() {
        "use strict";
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        "use strict";
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        "use strict";
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        "use strict";
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        "use strict";
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        "use strict";
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    },
    load: function() {
        "use strict";
        var _ISMOBILE;
        _ISMOBILE = isMobile.any();
        if ( _ISMOBILE ) {
            //console.log('Esto es un dispositivo movil');
        } else {
            //console.log('Esto es un dispositivo de escritorio');
        }
    },
    matchMedia: function() {

    }

};
var mobile_detected = {
    is_mobile: function() {
        "use strict";

        (function(a){
            _browser_mobile=/android.+mobile|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));
        })(navigator.userAgent||navigator.vendor||window.$opera);

        if ( _browser_mobile ) {
            $('#set_body').addClass('mobile');
            GHIA.setValue('#device', "mobile");

            //console.log("mobile detected");
        } else {
            $('#set_body').addClass('desktop');
            GHIA.setValue('#device', "desktop");

            //console.log("mobile no detected");
        }
    }
};

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
