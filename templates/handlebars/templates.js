(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['voice-input-form'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form class=\"enter-voice\" id=\"get-voice\">\n    <div class=\"\" style=\"padding: 100% 0;\">\n        <div class=\"col-md-12\">\n            <div class=\"form-group\">\n                <label for=\"salida\" class=\"sr-only\">Pronuncia tu Nombre</label>\n                <input class=\"form-control\" id=\"salida\"  placeholder=\"Tu nombre...\">\n                <script>\n                    artyom.redirectRecognizedTextOutput(function(text,isFinal){\n                          console.log(\"esta escuchando\");\n\n                          var texto = $('#salida');\n                          if (isFinal) {\n                              texto.val(text);\n                          } else {\n                          }\n                    });\n                </script>\n            </div>\n        </div>\n    </div>\n</form>\n";
},"useData":true});
})();