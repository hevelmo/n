var _element,_classBody,_edge,_ie10,_ie11,_opera,_firefox,_chrome,_safari,_offset,_offset_opacity,_scroll_top_duration,_IS_MOBILE,_browser_mobile,_host,_url,_url2,_url3,_loader,GLOBAL,VOLU,alertify,google,map,inc,artyom,bienvenida,_slide_panel_content,_slide_panel_header,_slide_panel_container,NUPALI={};NUPALI=function(){function n(e,t){var i=Handlebars.templates[e];return t?i(t):i}function o(e,t,i,n,o){var a;for(var r in a="<"+t,i)a+=i.hasOwnProperty(r)?" "+r+"='"+i[r]+"'":"";o?(a+=">",a+=n,a+="</"+t+">"):(a+=" />",a+=n),$(e).append(a)}function a(e,t,i,n,o){var a;for(var r in a="<"+t,i)a+=i.hasOwnProperty(r)?" "+r+"='"+i[r]+"'":"";o?(a+=">",a+=n,a+="</"+t+">"):(a+=" />",a+=n),$(e).prepend(a)}function r(e,t){return $.ajax({type:"POST",contentType:"application/json",url:e,dataType:"json",data:JSON.stringify(t)})}function s(e,t){return _.reduce(_.pluck(e,t),function(e,t){return+e+ +t})}function c(e,t){for(;e.length!==(e=_.without(e,_.findWhere(e,t))).length;);return e}function v(e,t,i){return e=""+e,expReg=new RegExp(t,"g"),e.replace(expReg,i)}function l(e){return e.substr(0,1).toUpperCase()+e.substr(1,e.length).toLowerCase()}return moment.lang("es",{months:"Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),monthsShort:"ene._feb._mar_abr._may_jun_jul._ago_sep._oct._nov._dic.".split("_"),weekdays:"Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"),weekdaysShort:"dom._lun._mar._mier._juev._vie._sab.".split("_"),weekdaysMin:"Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_"),longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Hoy a las] LT",nextDay:"[Mañanaalas]LT",nextWeek:"dddd[a]LT",lastDay:"[Ayera]LT",lastWeek:"dddd[hasta]LT",sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d dias",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){returnnumber},week:{dow:1,doy:6}}),{momentToRoman:function(e,t){return moment.lang(t),moment(e).format("dddd[,] LL")},momentToHuman:function(e,t){return moment.lang(t),moment(e,"YYYY-MM-DD hh:mm:ss").fromNow(!0)},getTemplate:n,loadTemplate:function(e,t,i){$(t).html(n(e,i))},getValue:function(e){return $(e).val()},setValue:function(e,t){$(e).val(t)},existInDOM:function(e){return 0<$(e).length},trimValue:function(e){var t,i;t=$(e).val(),i=$.trim(t),$(e).val(i)},getHTML:function(e){return $(e).html()},setHTML:function(e,t){$(e).html(t)},cryptElement:function(e){var t,i;t=$(e).val(),i=hex_sha512(t),$(e).val(i)},appendOne:o,appendMulti:function(e,t){for(var i=0;i<t.length;i++)o(e,t[i][0],t[i][1],t[i][2],t[i][3])},prependOne:a,prependMulti:function(e,t){for(var i=0;i<t.length;i++)a(e,t[i][0],t[i][1],t[i][2],t[i][3])},resizeInput:function(e){var t,i,n,o,a,r,s,c,l,d,u,m,p,f,h,g,_;$(e).each(function(){t=$(this),i=$(t).val(),i=$.trim(i),n=i.length,o=+(o=v(o=t.css("font-size"),"px","")),a=t.css("font-family"),r=+(r=v(r=t.css("width"),"px","")),height=t.css("height"),s=+(s=v(s=t.css("padding-top"),"px","")),c=v(c=t.css("padding-bottom"),"px",""),c=+s,l=+(l=v(l=t.css("line-height"),"px","")),d=+(d=v(d=t.css("padding-left"),"px","")),u=+(u=v(u=t.css("padding-right"),"px","")),m=document.createElement("canvas"),(p=m.getContext("2d")).font=o+"px"+a,f=p.measureText(i).width,f=Math.ceil(f),h=r-d-u,_=height,n&&h<f&&(g=f/h,g=Math.ceil(g),_=s+g*o+(g-1)*l+c,_+="px"),t.css("word-break","break-word"),t.css("height",_),t.css("vertical-align","middle")})},setDateTPCalendar:function(e,t,i){var n,o,a,r,s;switch(n=new Date,(o=new Date(n)).setDate(n.getDate()+t),a=o.getFullYear(),r=+o.getMonth(),s=a+"-"+(r+=1)+"-"+(+o.getDate()+1),$(e).datetimepicker({pickTime:!1}),i){case 0:$(e).data("DateTimePicker").setDate(s);break;case 1:$(e).data("DateTimePicker").setMinDate(o),$(e).data("DateTimePicker").setDate(s);break;case 2:$(e).data("DateTimePicker").setMinDate(o)}},validFormFull:function(e,t){for(var i in e)e[i]=$.trim(e[i]);return _.size(_.compact(_.pick(e,t)))===t.length},validFormEmpty:function(e,t){for(var i in e)e[i]=$.trim(e[i]);return!_.size(_.compact(_.pick(e,t)))},resetForm:function(e){$(e).each(function(){this.reset()})},postalService:r,getInternalJSON:function(e){var t;return t=null,$.ajax({async:!1,global:!1,url:e,dataType:"json"}).done(function(e){t=e}),t},hasOwnPropertyOptimized:function(e,t){return"object"==typeof e&&e.hasOwnProperty(t)},filterArrayObjByKey:function(e,t,i,n){return _.filter(_.pluck(e,t),function(e){return n?e===i:e!==i})},sumArrayObjByKey:s,avgArrayObjByKey:function(e,t){var i;return i=e.length,s(e,t)/i},renameArrayObjKeys:function(e,t){var i,n;i=[],n=_.pairs(t);for(var o=0;o<e.length;o++)for(i[o]={},j=0;j<n.length;j++)i[o][n[j][0]]=e[o][n[j][1]];return i},withoutArrayObjAND:c,withoutArrayObjOR:function(e,t){pairs=_.pairs(t),withoutArrayObj=[];for(var i=0;i<pairs.length;i++)withoutArrayObj[i]=new Object,withoutArrayObj[i][pairs[i][0]]=pairs[i][1];for(i=0;i<withoutArrayObj.length;i++)e=c(e,withoutArrayObj[i]);return e},currencyFormat:function(e){return accounting.formatMoney(e)},roundNDecimalFormat:function(e,t){var i,n,o,a,r;if(r=NaN,!isNaN(e)){if(n=(i=(e=""+e).split("."))[0],o="0",2===i.length)for(a=+(o=i[1])/Math.pow(10,o.length-t),o=""+(o=Math.ceil(a)),idx=0;idx<t-o.length;idx++)o="0"+o;r=(r=+(r=n+"."+o)).toFixed(t)}return r},replaceAll:v,ucWords:function(e){var t,i,n,o;for(n=(t=e.split(" ")).length,i="",o=0;o<n;o++)o!=n-1?i=i+l(t[o])+" ":i+=l(t[o]);return i},ucFirst:l,advancedTrim:function(e){var t,i;return i=(t=$.trim(e)).split(" "),t=(i=_.without(i,"")).join(" "),t=$.trim(t)},picturesLoader:function(e,n,t,o){"use strict";$(e).fileupload({url:t,dataType:"json",done:function(e,t){var i;i=t.result.files,r(o,i).success(function(e){$.each(i,function(e,t){$("<p/>").text(t.name).appendTo("#files")})})},progressall:function(e,t){var i=parseInt(t.loaded/t.total*100,10);$(n).css("width",i+"%","background-color","#5cb85c")}})},randomString:function(e){for(var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",i="",n=0;n<4;n++){var o=Math.floor(Math.random()*t.length);i+=t.substring(o,o+1)}$(e).val(i)}}}(),inc="nav__inc_",GLOBAL={},VOLU={},_host=NUPALI.getValue("#_host"),_element=$(this),_classBody=$("body.ghia"),_edge="Microsoft Edge",_ie10="Internet Explorer 10",_ie11="Internet Explorer 11",_opera="Opera",_firefox="Mozilla Firefox",_chrome="Google Chrome",_safari="Safari",_offset=300,_offset_opacity=1200,_scroll_top_duration=700,_IS_MOBILE=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),_browser_mobile="",function(e){"use strict";_browser_mobile=/android.+mobile|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}(navigator.userAgent||navigator.vendor||window.$opera);var global={initialized:!1,initialize:function(){"use strict";this.initialized||(this.initialize=!0,this.build())},build:function(){"use strict";this.onLoad(),this.onReady(),this.onScroll(),this.onResize()},onLoad:function(){"use strict";$(window).on("load",function(){alertify.alert("Bienvenido","Activar identificador de voz.",function(){GLOBAL.startArtyom(),setTimeout(function(){bienvenida="El identificador de voz se há activado, pronuncia tu nombre.",artyom.say(bienvenida)},2400),global.loadTemplate__enterVoice()})})},onReady:function(){"use strict";$(document).ready(function(){$(".cd-btn").on("click",function(e){e.preventDefault(),GLOBAL.openSlidePanel()}),$(".cd-panel").on("click",function(e){})})},onScroll:function(){},onResize:function(){},loadTemplate__enterVoice:function(){NUPALI.loadTemplate(tempsNames.form_voice_enter,domEl.box_panel_container)}};GLOBAL=function(){"use strict";return{loader:function(){setTimeout(function(){GLOBAL.loaderIn(),setTimeout(function(){GLOBAL.loaderOut()},1500)},0)},setHTML:function(e,t){return $(e).html(t)},loaderIn:function(){GLOBAL.simpleAppend("body",'<div class="panel_frame"/>'),GLOBAL.setHTML(".panel_frame",'<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div>')},loaderOut:function(){GLOBAL.removeHTML(".panel_frame")},removeHTML:function(e){return $(e).fadeOut().remove()},stopArtyom:function(){artyom.fatality()},startArtyom:function(){setTimeout(function(){GLOBAL.loader()},1500),GLOBAL.createSlidePanel(),setTimeout(function(){artyom.initialize({lang:"es-ES",continuous:!0,listen:!0,debug:!1,speed:1}),setTimeout(function(){GLOBAL.openSlidePanel()},2200)},2300)},simpleAppend:function(e,t){return $(e).append(t)},openSlidePanel:function(){$(".cd-panel").addClass("is-visible")},closeSlidePanel:function(){($(event.target).is(".cd-panel")||$(event.target).is(".cd-panel-close"))&&($(".cd-panel").removeClass("is-visible"),event.preventDefault())},createSlidePanel:function(){var e;_slide_panel_content={class:"cd-panel from-right",id:"this-panel"},NUPALI.prependOne("body","div",_slide_panel_content,"",1),_slide_panel_header=[["div",{class:"cd-panel-container",id:"this-container"},"",1],["header",{class:"cd-panel-header",id:"this-header"},"",1]],NUPALI.prependMulti("#this-panel",_slide_panel_header),e=[["a",{class:"cd-panel-close",href:"#0"},"Cerrar",1],["h5",{},"Identificador de voz",1]],NUPALI.prependMulti("#this-header",e)}}}();var sections={initialized:!1,initialize:function(e){"use strict";this.initialized||(this.initialize=!0,this.build(e))},build:function(e){"use strict";this.events(e)},events:function(e){"use strict";switch(e){case"home":home.initialize()}}},home={initialized:!1,initialize:function(){"use strict";this.initialized||(this.initialize=!0,this.build())},build:function(){"use strict";global.initialize(),this.onReady(),this.onScroll(),this.onResize()},onReady:function(){"use strict";$(document).ready(function(){})},onScroll:function(){},onResize:function(){}},browser={init:function(){"use strict";""!==this.getClassName()&&$("html").addClass(this.getClassName())},getBrowser:function(){"use strict";var e;return e=navigator.userAgent.toLowerCase(),/edge/i.test(e)?_edge:/rv:11/i.test(e)?_ie11:/msie 10/i.test(e)?_ie10:/opr/i.test(e)?_opera:/chrome/i.test(e)?_chrome:/firefox/i.test(e)?_firefox:navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)?_safari:void 0},getClassName:function(){"use strict";var e;return(e=this.getBrowser())===_edge?"edge":e===_ie11?"ie11":e===_ie10?"ie10":e===_opera?"opera":e===_chrome?"chrome":e===_firefox?"firefox":e===_safari?"safari":""}},isMobile={Android:function(){"use strict";return navigator.userAgent.match(/Android/i)},BlackBerry:function(){"use strict";return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){"use strict";return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){"use strict";return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){"use strict";return navigator.userAgent.match(/IEMobile/i)},any:function(){"use strict";return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()},load:function(){"use strict";isMobile.any()},matchMedia:function(){}},mobile_detected={is_mobile:function(){"use strict";var e;e=navigator.userAgent||navigator.vendor||window.$opera,(_browser_mobile=/android.+mobile|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))?($("#set_body").addClass("mobile"),GHIA.setValue("#device","mobile")):($("#set_body").addClass("desktop"),GHIA.setValue("#device","desktop"))}},section=NUPALI.getValue("#section");sections.initialize(section),VOLU=function(){"use strict";return{sendFromContacto:function(e,t,i,n){var o,a;o=n+"core/contacto/send_form_contacto.php",a=$(".loader_gif"),$.ajax({type:"POST",url:o,data:{nombre:e,correo:t,mensaje:i,host:n},beforeSend:function(){setTimeout(function(){a.fadeIn(500).html('<img src="'+n+'img/loader.gif">').delay(1e3).fadeOut(500)},1e3)},success:function(e){setTimeout(function(){alertify.success("Tu mensaje se enviado exitosamente")},4e3)}}).done(function(){setTimeout(function(){$("#form-contacto")[0].reset()},4500)})},sendFromVoluntarios:function(e,t,i,n,o,a,r,s,c){var l,d;l=c+"core/voluntarios/send_form_voluntarios.php",d=$(".loader_gif"),$.ajax({type:"POST",url:l,data:{nombre:e,correo:t,edad:i,residencia:n,gustos_pasatiempos:o,experiencia:a,horario:r,apoyo:s,host:c},beforeSend:function(){setTimeout(function(){d.fadeIn(500).html('<img src="'+c+'img/loader.gif">').delay(1e3).fadeOut(500)},1e3)},success:function(e){setTimeout(function(){alertify.success("Tu mensaje se enviado exitosamente")},4e3)}}).done(function(){setTimeout(function(){$("#form-voluntarios")[0].reset()},4500)})}}}(),$(document).ready(function(){$("#gallery-logos").bxSlider({pager:!1,controls:!1,minSlides:5,maxSlides:13,slideWidth:235,ticker:!0,speed:9e4}),$("#gallery-logros").bxSlider({pager:!1,controls:!1,minSlides:1,maxSlides:8,slideWidth:235,ticker:!0,speed:2e4});var e=$(".top");$(window).on("scroll",function(){300<$(this).scrollTop()?e.addClass("is-visible"):e.removeClass("is-visible fade-out"),1200<$(this).scrollTop()&&e.addClass("fade-out")}),e.on("click",function(e){e.preventDefault(),$("body,html").animate({scrollTop:0},700)})});