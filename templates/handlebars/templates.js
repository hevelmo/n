(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['voice-input-form'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form class=\"enter-voice\" id=\"get-voice\">\r\n    <div class=\"\" style=\"padding: 100% 0;\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"form-group\">\r\n                <label for=\"salida\" class=\"sr-only\">Pronuncia tu Nombre</label>\r\n                <input type=\"email\" class=\"form-control\" id=\"salida\"  placeholder=\"Tu nombre...\" autofocus>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n";
},"useData":true});
})();