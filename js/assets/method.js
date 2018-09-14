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
var artyom, bienvenida;
var _slide_panel_content, _slide_panel_header, _slide_panel_container;
inc = 'nav__inc_';
//
GLOBAL = {};
VOLU = {};
//
_host = NUPALI.getValue('#_host');
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
        //console.log('Global');
        this.onLoad();
        this.onReady();
        this.onScroll();
        this.onResize();
    },
    onLoad: function() {
      "use strict";
      $(window).on('load', function(){
          alertify.alert("Bienvenido", "Activar identificador de voz.", function(){
              GLOBAL.startArtyom();
              setTimeout(function(){
                  bienvenida = "El identificador de voz se há activado, pronuncia tu nombre.";
                  artyom.say(bienvenida);
              }, 2400);
              global.loadTemplate__enterVoice();
              // Escribir lo que escucha.

          });
      });
    },
    onReady: function() {
        "use strict";
        $(document).ready(function(){
            //open the lateral panel
            $('.cd-btn').on('click', function(event){
                  event.preventDefault();
                  GLOBAL.openSlidePanel();
            });
            //clode the lateral panel
            $('.cd-panel').on('click', function(event){
                  //GLOBAL.closeSlidePanel();
            });
        });
    },
    onScroll: function() {
        "use strict";
    },
    onResize: function() {
        "use strict";
    },
    loadTemplate__enterVoice: function() {
        NUPALI.loadTemplate(tempsNames.form_voice_enter, domEl.box_panel_container);
        artyom.redirectRecognizedTextOutput(function(text,isFinal){
            var texto = $('#salida');
            if (isFinal) {
                texto.val(text);
            } else {
            }
        });
    }
}
GLOBAL = (function() {
    "use strict";
    function startArtyom() {
        setTimeout(function(){
            GLOBAL.loader();
        }, 1500);
        GLOBAL.createSlidePanel();
        setTimeout(function(){
            artyom.initialize({
      				lang: "es-ES",
      				continuous:true,// Reconoce 1 solo comando y para de escuchar
      	            listen:true, // Iniciar !
      	            debug:false, // Muestra un informe en la consola
      	            speed:1 // Habla normalmente
      			});
            setTimeout(function(){
                GLOBAL.openSlidePanel();
            }, 2200);
        }, 2300);
    }
    function stopArtyom() {
        artyom.fatality();
    }
    function createSlidePanel() {
      var _slide_panel_title, _slide_panel_button_close;
        _slide_panel_content = {'class': 'cd-panel from-right', 'id': 'this-panel'};
        NUPALI.prependOne('body', 'div', _slide_panel_content, '', 1);

        _slide_panel_header = [
            ['div', {'class':'cd-panel-container', 'id':'this-container'}, '', 1],
            ['header', {'class':'cd-panel-header', 'id':'this-header'}, '', 1]
        ];
        NUPALI.prependMulti('#this-panel', _slide_panel_header);

        _slide_panel_title = [
            ['a', {'class': 'cd-panel-close', 'href': '#0'}, 'Cerrar', 1],
            ['h5', {}, 'Identificador de voz', 1]
        ];
        NUPALI.prependMulti('#this-header', _slide_panel_title);
        //_slide_panel_header = [];
    }
    function openSlidePanel() {
        $('.cd-panel').addClass('is-visible');
    }
    function closeSlidePanel() {
        if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) {
    			$('.cd-panel').removeClass('is-visible');
    			event.preventDefault();
    		}
    }
    function loaderIn() {
        var _container, _spinner;
        _container = '<div class="panel_frame"/>';
        _spinner = '<div class="spinner">'+
        '<div class="double-bounce1"></div>'+
        '<div class="double-bounce2"></div>'
        '</div>';
        GLOBAL.simpleAppend('body', _container);
        GLOBAL.setHTML('.panel_frame', _spinner);
    }
    function loaderOut() {
        GLOBAL.removeHTML('.panel_frame');
    }
    function loader() {
        setTimeout(function(){
            GLOBAL.loaderIn();
            setTimeout(function(){
                GLOBAL.loaderOut();
            }, 1500);
        }, 0);
    }
    function simpleAppend(domElement, content) {
        return $(domElement).append(content);
    }
    function setHTML(domElement, content) {
        return $(domElement).html(content);
    }
    function removeHTML(domElement) {
        return $(domElement).fadeOut().remove();
    }
    return {
                    loader : loader,
                   setHTML : setHTML,
                  loaderIn : loaderIn,
                 loaderOut : loaderOut,
                removeHTML : removeHTML,
                stopArtyom : stopArtyom,
               startArtyom : startArtyom,
              simpleAppend : simpleAppend,
            openSlidePanel : openSlidePanel,
           closeSlidePanel : closeSlidePanel,
          createSlidePanel : createSlidePanel
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
        //console.log(section);
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
        //console.log('Home');
        global.initialize();
        this.onReady();
        this.onScroll();
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
    /*
    1.- artyom inicia con un alertify para inicializarla
    2.- se abrira un slide panel
      2.1.- muestra un formulario donde habra un input
          el input tendra la funcion de reconocimiento de voz
          el usuario debera decir su nombre
          el nombre se escribira en el input

          el formulario tendra la funcion de guardar con reconocimiento de voz,
          se guardará y el reconocimiento de voz le dara la bienvenida ya con su nombre


    */
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

var section = NUPALI.getValue('#section');
sections.initialize(section);

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
