/*
    Autor: Heriberto Velasco Mora
    Proyect: Computadoras Ghia

    Model
    Content
    [models] Moment Español
    [models] MOMENT's Models
        [function] momentToRoman(date, language)
        [function] momentToHuman(date, language)
    [models] Handlebars's Models
        [function] getTemplate(name, filler)
        [function] loadTemplate(name, wrapper, filler)
    [models] DOM's Models
        [function] getValue(domElement)
        [function] setValue(domElement, newValue)
        [function] existInDOM(domElement)
        [function] trimValue(domElement)
        [function] getHTML(domElement)
        [function] setHTML(domElement, information)
        [function] cryptElement(domElement)
        [function] appendOne(domElement, newElType, newElAttributes, newElContent, hasClosingTag)
        [function] appendMulti(domElement, elements)
        [function] prependOne(domElement, newElType, newElAttributes, newElContent, hasClosingTag)
        [function] prependMulti(domElement, elements)
        [function] resizeInput(domElement)
    [models] DATE TIME PICKER's Models
        [function] setDateTPCalendar(wrapper, futureDays, setterMode)
    [models] FORMS's Models
        [function] validFormFull(enteredInputs, requiredInputsNames)
        [function] validFormEmpty(enteredInputs, requiredInputsNames)
        [function] resetForm(form)
    [models] AJAX's Models
        [function] postalService(customUrl, json)
        [function] getInternalJSON(url)
    [models] OBJECTS's Models
        [function] hasOwnPropertyOptimized(obj, property)
        [function] filterArrayObjByKey(arrayObj, key, value, equal)
        [function] sumArrayObjByKey(arrayObj, numKey)
        [function] avgArrayObjByKey(arrayObj, numKey)
        [function] renameArrayObjKeys(arrayObj, renameKeys)
        [function] withoutArrayObjAND(arrayObj, withoutObj)
        [function] withoutArrayObjOR(arrayObj, withoutObj)
    [models] NUMBER FORMATS's Models
        [function] currencyFormat(number)
        [function] roundNDecimalFormat(number, nDecimals)
    [models] STRING Models
        [function] replaceAll(string, found, replace)
        [function] ucWords(string)
        [function] ucFirst(string)
        [function] advancedTrim(string)
    [models] OTHER Models
        [function] picturesLoader(domElement, barElement, urlHandler, urlApi)
        [function] randomString(name)
    [models] Returning all Models
**/
var GHIA = {};
GHIA = (function() {
    var $this = this;
    /*
     *  [models] Moment Español
     */
        /* */
            moment.lang('es', {months: "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"), monthsShort: "ene._feb._mar_abr._may_jun_jul._ago_sep._oct._nov._dic.".split("_"), weekdays: "Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"), weekdaysShort: "dom._lun._mar._mier._juev._vie._sab.".split("_"), weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[Hoy a las] LT", nextDay: '[Mañanaalas]LT', nextWeek: 'dddd[a]LT', lastDay: '[Ayera]LT', lastWeek: 'dddd[hasta]LT', sameElse: 'L'}, relativeTime: {future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d dias", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años"}, ordinal: function(number) {returnnumber + (number === 1 ? 'er' : 'a');}, week: {dow: 1, doy: 6}});
        /* end */
    /* end -> [models] Moment Español */
    /*
     *  [models] MOMENT's Models
     */
        /* [function] momentToRoman(date, language) */
            /*
             *
             *  This function transform a date in a friendly format to read to an human
             *  @params
             *          @date        Is a string with the date that will be transformed (mandatory).
             *          @language    Is the selected language (es, en, fr, etc) (mandatory).
             *
             *  @return
             *          New date format
             *
             *  @example
             *          @input
             *              THIS.momentToRoman('2015-02-16 17:18:00', 'es');
             *          @output
             *              Lunes, 16 Febrero 2015
             *
             *  @special requirements
             *          It's necesary to include 'moment.js' or 'moment.min.js' library before including 'model.js'
             *
             */
                function momentToRoman(date, language) {
                    moment.lang(language);
                    return moment(date).format('dddd[,] LL');
                }
        /* end */
        /* [function] momentToHuman(date, language) */
            /*
             *
             *  This function transform a date in a friendly format to read to an human
             *  @params
             *          @date        Is a string with the date that will be transformed (mandatory).
             *          @language    Is the selected language (es, en, fr, etc) (mandatory).
             *
             *  @return
             *          @string     New date format
             *
             *  @example
             *          @input
             *              THIS.momentToHuman('2017-02-16 17:18:00', 'es');
             *          @output
             *              8 meses
             *
             *  @special requirements
             *          It's necesary to include 'moment.js' or 'moment.min.js' library before including 'model.js'
             *
             */
                function momentToHuman(date, language) {
                    moment.lang(language);
                    return moment(date, "YYYY-MM-DD hh:mm:ss").fromNow(true);
                }
        /* end */
    /* end -> [models] MOMENT's Models */
    /*
     *  [models] Handlebars's Models
     */
        /* [function] getTemplate(name, filler) */
            /*
             *
             *  This function generates a handlebars' template (previously compiled)
             *  in a specific element from the DOM
             *  @params
             *          @name       Is a string with the template's name (mandatory).
             *          @filler     Is a JSON with the necesary dinamic info to be loaded in the template (optional).
             *
             *  @return
             *          @string     HTML value
             *
             *  @special requirements
             *          It's necesary to include 'handlebars.runtime.min.js' library and
             *          'templates.min.js' generated by precomplileing
             *          before including 'model.js'
             *
             */
                function getTemplate(name, filler) {
                    var template = Handlebars.templates[name];
                    return (filler) ? template(filler) : template;
                }
        /* end */
        /* [function] loadTemplate(name, wrapper, filler) */
            /*
             *
             *  This function loads a handlebars' template (previously compiled)
             *  in a specific element from the DOM
             *  @params
             *          @name       Is a string with the template's name (mandatory).
             *          @wrapper    Is a string with the id or class ('#domElement', '.domElement')
             *                      where the template will be loaded (mandatory).
             *          @filler     Is a JSON with the necesary dinamic info to be loaded in the template (optional).
             *
             *  @return
             *          @string     HTML value
             *
             *  @special requirements
             *          It's necesary to include 'handlebars.runtime.min.js' library and
             *          'templates.min.js' generated by precomplileing
             *          before including 'model.js'
             *
             */
                function loadTemplate(name, wrapper, filler) {
                    $(wrapper).html(getTemplate(name, filler));
                }
        /* end */
    /* end -> [models] MOMENT's Models */
    /*
     *  [models] DOM's Models
     */
        /* [function] getValue(domElement) */
            /*
             *  This function gets the value from an especific DOM element
             *
             *  @params
             *          @domElement     Is a string with the id or class ('#domElement', '.domElement')
             *                          of the DOM element whose value will be returned (mandatory).
             *          @newValue       Is a string with the value that will update 'domElement' vaue (mandatory).
             *
             *  @return
             *          @string     domElement value
             */
                function getValue(domElement) {
                    return $(domElement).val();
                }
        /* end */
        /* [function] setValue(domElement, newValue) */
            /*
             *  This function updates the value from an especific DOM element
             *
             *  @params:
             *          @domElement     Is a string with the id or class ('#domElement', '.domElement')
             *                          of the DOM element whose value will be updated (mandatory).
             *          @newValue       Is a string with the value that will update 'domElement' vaue (mandatory).
             */
                function setValue(domElement, newValue) {
                    $(domElement).val(newValue);
                }
        /* end */
        /* [function] existInDOM(domElement) */
            /*
             *  This function detects if elemnt defined by id or class, exist in DOM
             *
             *  @params
             *          @domElement     Is a string with the id or class ('#domElement', '.domElement')
             *                          Is going to look for in the DOM.
             *
             *  @return
             *          @boolean
             *              @true   if element exist in DOM
             *              @false  if element doesn't exist in DOM
             */
                function existInDOM(domElement) {
                    return ($(domElement).length > 0) ? true : false;
                }
        /* end */
        /* [function] trimValue(domElement) */
            /*
             *  This function trims the value from an especific DOM element
             *
             *  @params
             *          @domElement     Is a string with the id or class ('#domElement', '.domElement')
             *                          of the DOM element whose value will be trimmed (mandatory).
             */
                function trimValue(domElement) {
                    var value, clean;
                    value = $(domElement).val();
                    clean = $.trim(value);
                    $(domElement).val(clean);
                }
        /* end */
        /* [function] getHTML(domElement) */
            /*
             *  This function returns the HTML content wrapped in an specific DOM element
             *
             *  @params
             *          @domElement     Is a string with the id or class ('#domElement', '.domElement')
             *                          of the DOM element whose HTML will be returned (mandatory).
             *
             *  @return
             *          @string     domElement HTML
             */
                function getHTML(domElement) {
                    return $(domElement).html();
                }
        /* end */
        /* [function] setHTML(domElement, information) */
            /*
             *  This function updates the HTML content wrapped in an especific DOM element
             *
             *  @params
             *          @domElement     Is a string with the id or class ('#domElement', '.domElement')
             *                          of the DOM element whose HTML will be updated (mandatory).
             */
                function setHTML(domElement, information) {
                    $(domElement).html(information);
                }
        /* end */
        /* [function] cryptElement(domElement) */
            /*
             *This function crypts the value from an especific DOM element
             *It's sha512 crypting
             *
             *PARAMS:
             *   domElement: Is a string with the id or class ('#domElement', '.domElement')
             *               of the DOM element whose value will be crypted (mandatory).
             *
             *SPECIAL REQUIREMENTS:
             *   It's necesary to include 'sha512.js' library before including 'model.js'
             *
            **/
                function cryptElement(domElement) {
                    var pass, passSha;
                    pass = $(domElement).val();
                    passSha = hex_sha512(pass);
                    $(domElement).val(passSha);
                }
        /* end */
        /* [function] appendOne(domElement, newElType, newElAttributes, newElContent, hasClosingTag) */
            /*
             *This function appends one new element to an existent domElement
             *
             *PARAMS:
             *   domElement: Is a string with the id or class ('#domElement', '.domElement')
             *               of the element where we can't append the new element (mandatory).
             *   newElType: Is a string with the html type (div, input, etc) of the element
             *              be careful it's a correct one, because the method doesn't
             *              doesn't distinguish is it's correct or not (mandatory).
             *   newElAttributes: Is an objetc with the attributes to the new element, they
             *                    will be included in the exactly order they are in the object,
             *                    be careful to use correct attributes because the method dosen't
             *                    distinguish if they are or not correct (mandatory).
             *                    if you don't want atributes, send an empty object {}
             *   newElContent: Is a string with the content of the element (mandatory).
             *                   if you don't want content send an empty string.
             *   hasClosingTag: Is an integer who idicates if the element has (1) or not(0) a
             *                  closing tag.
             *EXAMPLE:
             *   Imagine we have the empty element <div id='my_div'></div>
             *
             *   newElAttributes = {'id': 'myId', 'class': 'myClass', 'value' : '2'}
             *   appendOne('div#my_div', 'div', newElAttributes, 'Hello Div', 1);
             *
             *   The result is:
             *
             *   <div id='my_div'>
             *       <div id='myId' class='myClass' value='2'>Hello Div</div>
             *   </div>
             *
             *   Imagine the same empty element.
             *
             *   newElAttributes = {'id': 'myId', 'class': 'myClass', 'value' : '2', 'data-my-data' : '2', 'name' : 'myName'}
             *   appendOne('div#my_div', 'div', newElAttributes, '', 0);
             *
             *   The result is:
             *
             *   <div id='my_div'>
             *       <input id='myId' class='myClass' value='2' data-my-data='2' name='myName' />
             *   </div>
             *
            **/
                function appendOne(domElement, newElType, newElAttributes, newElContent, hasClosingTag) {
                    var newDomElement;
                    newDomElement = '<' + newElType;
                    for(var key in newElAttributes) {
                        newDomElement += (newElAttributes.hasOwnProperty(key))
                                ? ' ' + key + "='" + newElAttributes[key] + "'"
                                : '';
                    }
                    if(hasClosingTag) {
                        newDomElement += '>';
                        newDomElement += newElContent;
                        newDomElement += '</' + newElType + '>';
                    } else {
                        newDomElement += ' />';
                        newDomElement += newElContent;
                    }
                    $(domElement).append(newDomElement);
                }
        /* end */
        /* [function] appendMulti(domElement, elements) */
            /*
             *This function appends multiple new elements to an existent domElement.
             *It uses de performance of the appenOne method. The elements are appended
             *in the exact order they are declared.
             *
             *PARAMS:
             *   domElement: Is a string with the id or class ('#domElement', '.domElement')
             *               of the element where we can't append the new elements (mandatory).
             *   elements: is an array of type [newElType, newElAttributes, newElContent, hasClosingTag]
             *             each one of this elements are explained in the appendOne method.
             *
             *EXAMPLE:
             *   <div id='my_div'></div>
             *
             *   elements = [
             *       ['div', {'id' : 'element1', 'class':'multiDiv'}, 'Hello element 1', 1],
             *       ['input', {'id' : 'element2', 'class':'inputDiv', 'value' : 1, 'name' : 'input_1'}, 'Text input', 0],
             *       ['input', {'id' : 'element3', 'class':'inputDiv', 'value' : 3, 'name' : 'input_2'}, '', 0],
             *       ['div', {'id' : 'element4', 'class':'multiDiv'}, 'Hello element 4', 1]
             *   ];
             *
             *   appendMulti(''div#my_div', elements);
             *
             *   The result is:
             *
             *   <div id='my_div'>
             *       <div id='element1' class='multiDiv'>Hello element 1</div>
             *       <input id='element2' class='inputDiv' value='1' name='input_1' />Text input
             *       <input id='element3' class='inputDiv' value='3' name='input_2' />
             *       <div id='element4' class='multiDiv'>Hello element 4</div>
             *   </div>
             *
            **/
                function appendMulti(domElement, elements) {
                    for(var i = 0; i < elements.length; i++) {
                        appendOne(domElement,
                            elements[i][0], //newElType
                            elements[i][1], //newElAttributes
                            elements[i][2], //newElContent
                            elements[i][3]  //hasClosingTag
                        );
                    }
                }
        /* end */
        /* [function] prependOne(domElement, newElType, newElAttributes, newElContent, hasClosingTag) */
            /*
             *This function prepends one new element to an existent domElement
             *
             *PARAMS:
             *   domElement: Is a string with the id or class ('#domElement', '.domElement')
             *               of the element where we can append the new element (mandatory).
             *   newElType: Is a string with the html type (div, input, etc) of the element
             *              be careful it's a correct one, because the method doesn't
             *              doesn't distinguish is it's correct or not (mandatory).
             *   newElAttributes: Is an objetc with the attributes to the new element, they
             *                    will be included in the exactly order they are in the object,
             *                    be careful to use correct attributes because the method dosen't
             *                    distinguish if they are or not correct (mandatory).
             *                    if you don't want atributes, send an empty object {}
             *   newElContent: Is a string with the content of the element (mandatory).
                                 if you don't want content send an empty string.
             *   hasClosingTag: Is an integer who idicates if the element has (1) or not(0) a
             *                  closing tag.
             *EXAMPLE:
             *   Imagine we have the empty element <div id='my_div'></div>
             *
             *   newElAttributes = {'id': 'myId', 'class': 'myClass', 'value' : '2'}
             *   prependOne('div#my_div', 'div', newElAttributes, 'Hello Div', 1);
             *
             *   The result is:
             *
             *   <div id='my_div'>
             *       <div id='myId' class='myClass' value='2'>Hello Div</div>
             *   </div>
             *
             *   Imagine the same empty element.
             *
             *   newElAttributes = {'id': 'myId', 'class': 'myClass', 'value' : '2', 'data-my-data' : '2', 'name' : 'myName'}
             *   prependOne('div#my_div', 'div', newElAttributes, '', 0);
             *
             *   The result is:
             *
             *   <div id='my_div'>
             *       <input id='myId' class='myClass' value='2' data-my-data='2' name='myName' />
             *   </div>
             *
            **/
                function prependOne(domElement, newElType, newElAttributes, newElContent, hasClosingTag) {
                    var newDomElement;
                    newDomElement = '<' + newElType;
                    for(var key in newElAttributes) {
                        newDomElement += (newElAttributes.hasOwnProperty(key))
                                ? ' ' + key + "='" + newElAttributes[key] + "'"
                                : '';
                    }
                    if(hasClosingTag) {
                        newDomElement += '>';
                        newDomElement += newElContent;
                        newDomElement += '</' + newElType + '>';
                    } else {
                        newDomElement += ' />';
                        newDomElement += newElContent;
                    }
                    $(domElement).prepend(newDomElement);
                }
        /* end */
        /* [function] prependMulti(domElement, elements) */
            /*
             *This function prepends multiple new elements to an existent domElement.
             *It uses de performance of the appenOne method. The elements are prepended
             *in the exact order they are declared.
             *
             *PARAMS:
             *   domElement: Is a string with the id or class ('#domElement', '.domElement')
             *               of the element where we can prepend the new elements (mandatory).
             *   elements: is an array of type [newElType, newElAttributes, newElContent, hasClosingTag]
             *             each one of this elements are explained in the prependOne method.
             *
             *EXAMPLE:
             *   <div id='my_div'></div>
             *
             *   elements = [
             *       ['div', {'id' : 'element1', 'class':'multiDiv'}, 'Hello element 1', 1],
             *       ['input', {'id' : 'element2', 'class':'inputDiv', 'value' : 1, 'name' : 'input_1'}, 'Text input', 0],
             *       ['input', {'id' : 'element3', 'class':'inputDiv', 'value' : 3, 'name' : 'input_2'}, '', 0],
             *       ['div', {'id' : 'element4', 'class':'multiDiv'}, 'Hello element 4', 1]
             *   ];
             *
             *   prependMulti(''div#my_div', elements);
             *
             *   The result is:
             *
             *   <div id='my_div'>
             *       <div id='element1' class='multiDiv'>Hello element 1</div>
             *       <input id='element2' class='inputDiv' value='1' name='input_1' />Text input
             *       <input id='element3' class='inputDiv' value='3' name='input_2' />
             *       <div id='element4' class='multiDiv'>Hello element 4</div>
             *   </div>
             *
            **/
                function prependMulti(domElement, elements) {
                    for(var i = 0; i < elements.length; i++) {
                        prependOne(domElement,
                            elements[i][0], //newElType
                            elements[i][1], //newElAttributes
                            elements[i][2], //newElContent
                            elements[i][3]  //hasClosingTag
                        );
                    }
                }
        /* end */
        /* [function] resizeInput(domElement) */
            /*
             *This function resize an input deppending on the width of the text inside.
             *
             *PARAMS:
             *   domElement: Input to resize.
             *
            **/
                function resizeInput(domElement) {
                    var input, value, length, fontSize, fontFamily, width, paddingTop, paddingBottom, lineHeight,
                        paddingLeft, paddingRight, canvas, canvasTxt, pxLength, realWidth, lines, newHeight;

                    $(domElement).each ( function() {

                        //GET THE CURRENT INPUT
                        input = $(this);


                        //GET THE CURRENT INPUT'S VALUE
                        value = $(input).val();
                        value = $.trim(value);


                        //GET VALUE'S LENGTH
                        length = value.length;


                        //GET STYLE ATTRIBUTES

                        //Font Size of the current input
                        fontSize = input.css('font-size');
                        fontSize = replaceAll(fontSize, 'px', '')
                        fontSize = +fontSize;

                        //Font Family of the current input
                        fontFamily = input.css('font-family');

                        //Width of the current input
                        width = input.css('width');
                        width = replaceAll(width, 'px', '')
                        width = +width;

                        //Height of the current input
                        height = input.css('height');

                        //Padding Top of the current input
                        paddingTop = input.css('padding-top');
                        paddingTop = replaceAll(paddingTop, 'px', '')
                        paddingTop = +paddingTop;

                        //Padding Bottom of the current input
                        paddingBottom = input.css('padding-bottom');
                        paddingBottom = replaceAll(paddingBottom, 'px', '')
                        paddingBottom = +paddingTop;

                        //Line Height of the current input
                        lineHeight = input.css('line-height');
                        lineHeight = replaceAll(lineHeight, 'px', '')
                        lineHeight = +lineHeight;

                        //Padding Left of the current input
                        paddingLeft = input.css('padding-left');
                        paddingLeft = replaceAll(paddingLeft, 'px', '')
                        paddingLeft = +paddingLeft;

                        //Padding Right of the current input
                        paddingRight = input.css('padding-right');
                        paddingRight = replaceAll(paddingRight, 'px', '')
                        paddingRight = +paddingRight;


                        //CALCULATE PIXELS FROM INPUT VALUE

                        //Create a dummy canvas (render invisible with css)
                        canvas = document.createElement('canvas');
                        //Get the context of the dummy canvas
                        canvasTxt = canvas.getContext('2d');
                        //Set the context.font to the font that you are using
                        canvasTxt.font = fontSize + 'px' + fontFamily;
                        //Measure the string
                        pxLength = canvasTxt.measureText(value).width;
                        pxLength = Math.ceil(pxLength);

                        //Real width of the current input
                        realWidth = width - paddingLeft - paddingRight;

                        //lines = 1;

                        newHeight = height;

                        //CALCULATE NEW HEIGHT

                        if(length && pxLength > realWidth) {
                            lines = pxLength / realWidth;
                            lines = Math.ceil(lines);
                            newHeight = paddingTop +
                                        (lines * fontSize)  +
                                        ((lines - 1) * lineHeight) +
                                        paddingBottom;
                            newHeight += 'px';
                        }

                        //Resize
                        input.css('word-break', 'break-word');
                        input.css('height', newHeight);
                        input.css('vertical-align', 'middle');
                    });
                }
        /* end */
    /* end -> [models] DOM's Models */

    /*
     ###################################################################################################
        DATE TIME PICKER's Models
     ###################################################################################################
    */
        /*
         *This function sets the data of a 'DateTimePicker' calendar
         *
         *PARAMS:
         *   wrapper: Is a string with the id of the input ('input#wrapper')
         *            that wraps the 'DateTimePicker' calendar.
         *   futureDays: Is an integer with the number of days we want to advance
         *               from the current date.
         *   setterMode: It's a flag that determins the properties to be setted
         *               0) Only date
         *               1) Date and min date
         *               2) Only min date
        **/
            function setDateTPCalendar(wrapper, futureDays, setterMode) {
                var today, yesterday, year, month, day, future;
                //Get today date
                today = new Date();
                //Get yesterday date from today
                yesterday = new Date(today);
                yesterday.setDate(today.getDate() + futureDays);
                //Get year, month and day from yesterday
                year = yesterday.getFullYear();
                month = +yesterday.getMonth();
                month = month + 1;
                day = yesterday.getDate();
                //Make future date string
                future = year + '-' + month + '-' + (+day + 1);
                //Disable time in data time picker
                $(wrapper).datetimepicker({pickTime: false});
                switch(setterMode) {
                    //Only set a default date at calendar
                    case 0:
                        //Set future as default time
                        $(wrapper).data('DateTimePicker').setDate(future);
                        break;
                    //Set a default date in calendar and  minimun date at calendar
                    case 1:
                        //Minimun date able to be selected at calendar
                        $(wrapper).data('DateTimePicker').setMinDate(yesterday);
                        //Set future as default time
                        $(wrapper).data('DateTimePicker').setDate(future);
                        break;
                    //Only minimun date at calendar
                    case 2:
                        //Minimun date able to be selected at calendar
                        $(wrapper).data('DateTimePicker').setMinDate(yesterday);
                }
            }
    /*
     ###################################################################################################
        FORMS's Models
     ###################################################################################################
    */
        /*
         *This function validates if an specific form is full
         *
         *PARAMS:
         *   enteredInputs: Is a JSON with the entered inputs from the form (mandatory).
         *   requiredInputsNames: Is an array with the names of the required inputs from the form (mandatory).
         *
         *RETURN: boolean
            true: if it is full
            false: if it is not full
        **/
            function validFormFull(enteredInputs, requiredInputsNames) {
                var size;
                for(var key in enteredInputs) {
                    enteredInputs[key] = $.trim(enteredInputs[key]);
                }
                size = _.size(_.compact(_.pick(enteredInputs, requiredInputsNames)));
                return (size === requiredInputsNames.length) ? true : false;
            }
        /*
         *This function validates if an specific form is not empty
         *
         *PARAMS:
         *   enteredInputs: Is a JSON with the entered inputs from the form (mandatory).
         *   requiredInputsNames: Is an array with the names of the required inputs from the form (mandatory).
         *
         *RETURN: boolean
            true: if it is empty
            false: if it is not empty
        **/
            function validFormEmpty(enteredInputs, requiredInputsNames) {
                var size;
                for(var key in enteredInputs) {
                    enteredInputs[key] = $.trim(enteredInputs[key]);
                }
                size = _.size(_.compact(_.pick(enteredInputs, requiredInputsNames)));
                return (!size) ? true : false;
            }
        /*
         *This function resets an specific form
         *
         *PARAMS:
         *   form: Is a string with the id or class ('form#some_form', 'form.some_form')
         *   of the for that will be rested
        **/
            function resetForm(form) {
                $(form).each ( function() {
                    this.reset();
                });
            }
    /*
     ###################################################################################################
        AJAX's Models
     ###################################################################################################
    */
        /*
         *This function sends a JSON to an especific url, using AJAX and POST method
         *It expects a JSON when it's succesful
         *
         *PARAMS:
         *   customUrl: Is the url where 'json' will be sent (mandatory).
         *   json: Is the JSON that will be sent to customUrl (mandatory).
         *
         *RETURN: $.ajax
            Shipping outcome.
            It doesn't have 'error' neither 'success' method, in order to customize the
            in every place where postalService is invoked
        **/
            function postalService(customUrl, json) {
                return $.ajax({
                    type: 'POST',
                    contentType: 'application/json',
                    url: customUrl,
                    dataType: "json",
                    data: JSON.stringify(json)
                });
            }
        /*
         *This function gets an internal JSON from an especific url, using AJAX
         *
         *PARAMS:
         *   url: Is the url from an internal json will be gotten (mandatory).
         *RETURN: JSON
            With the information from the url
        **/
            function getInternalJSON(url) {
                var extJSON;
                extJSON = (function() {
                    var intJSON = null;
                    $.ajax({
                        async: false,
                        global: false,
                        url: url,
                        dataType: 'json',
                    }).done(function(data) {
                        intJSON = data;
                    });
                    return intJSON;
                })();
                return extJSON;
            }
    /*
     ###################################################################################################
        OBJECTS's Models
     ###################################################################################################
    */
        /*
         *This function is an optimization of the 'hasOwnProperty', a native JavaScript method.
         *This optimization validates if the variable, in which the property will be sought is an object.
         *
         *PARAMS:
         *   obj: Is an expected variable to be an object, in which the property will be sought.
         *   property: Is a string variable with the name of the property it's necessary
                       to look for in obj, in case obj is an objet.
         *RETURN: boolean
         *   true: In case obj is an objet, and property is inside it.
         *   false: In case obj is not an objet, or in case obj is an objtect but property is not inside it.
        **/
            function hasOwnPropertyOptimized(obj, property) {
                return ((typeof(obj) === 'object')) ? obj.hasOwnProperty(property) : false;
            }
        /*
         *This function look for all the values from an array object while the especific
         *key has the same or difrent value (it depends on de condition) that the value
         *searched.
         *
         *PARAMS:
         *   arrayObj: Is an array of objects (mandatory).
         *   key: Is a string with the name of the key through which will filter arrayObj (mandatory).
         *   value: Is a string with the value we seek in the specified key (mandatory).
         *   equal: Is an integer that determines whether looking values whose key has
         *          the same (1) or different value (0) (mandatory).
         *
         *RETURN: array
         *   An array of values that fullfills the before mentioned condition.
         *
         *EXAMPLE:
         *   arrayObj = [
         *      {'key' : 'a', 'key2' : 'a', 'key3' : '1'},
         *      {'key' : 'b', 'key2' : 'c', 'key3' : '1'},
         *      {'key' : 'a', 'key2' : 'a', 'key3' : '2'},
         *      {'key' : 'a', 'key2' : 'd', 'key3' : '3'}
         *   ];
         *
         *   filterArrayObjByKey(arrayObj, 'key2', 'a', 1);
         *   returns ["a", "a"];
         *
         *   filterArrayObjByKey(arrayObj, 'key2', 'a', 0);
         *   returns ["c", "d"];
         *
         *SPECIAL REQUIREMENTS:
         *   It's necesary to include 'underscore.js' or 'underscore-min.js' library before including 'model.js'
         *
        **/
            function filterArrayObjByKey(arrayObj, key, value, equal) {
                return _.filter(
                        _.pluck(arrayObj, key),
                        function(currentElement) {
                            return (equal)
                                ? currentElement === value
                                : currentElement !== value;
                        }
                );
            }
        /*
         *This function sums all the values in an especific numeric key in an arrays of objects
         *
         *PARAMS:
         *   arrayObj: Is an array of objects where we expect there are a key whose all values
         *             are integer type (mandatory).
         *   numKey: Is a string with the name of the key whose numeric value we want to obtain,
         *           be careful all the values in the key are numeric, because the result couldn't
         *           be the expected one (mandatory).
         *
         *RETURN: number
         *   The result of the sum of the values in the key.
         *
         *EXAMPLE:
         *   arrayObj = [
         *      {'key' : true, 'key2' : 'd', 'key3' : 1.1},
         *      {'key' : false, 'key2' : 1, 'key3' : 1.78},
         *      {'key' : true, 'key2' : 'a', 'key3' : 2.67},
         *      {'key' : false, 'key2' : 'd', 'key3' : 3.11}
         *   ];
         *
         * sumArrayObjByKey(arrayObj, 'key3');
         * returns 8.66;
        **/
            function sumArrayObjByKey(arrayObj, numKey) {
                return _.reduce(
                        _.pluck(arrayObj, numKey),
                        function(sum, num) {
                            return (+sum) + (+num);
                        }
                );
            }
        /*
         *This function averages all the values in an especific numeric key in an arrays of objects
         *
         *PARAMS:
         *   arrayObj: Is an array of objects where we expect there are a key whose all values
         *             are integer type (mandatory).
         *   numKey: Is a string with the name of the key whose numeric value we want to obtain,
         *           be careful all the values in the key are numeric, because the result couldn't
         *           be the expected one (mandatory).
         *
         *RETURN: number
         *   The result of the sum of the values in the key.
         *
         *EXAMPLE:
         *   arrayObj = [
         *      {'key' : true, 'key2' : 'd', 'key3' : 1.1},
         *      {'key' : false, 'key2' : 1, 'key3' : 1.78},
         *      {'key' : true, 'key2' : 'a', 'key3' : 2.67},
         *      {'key' : false, 'key2' : 'd', 'key3' : 3.11}
         *   ];
         *
         * avgArrayObjByKey(arrayObj, 'key3');
         * returns 2.165;
        **/
            function avgArrayObjByKey(arrayObj, numKey) {
                var sum, length;
                length = arrayObj.length;
                sum = sumArrayObjByKey(arrayObj, numKey);
                return sum/length;
            }
        /*
         *This function rename the keys in an array of objects, it only gets the specified keys
         *and ignore the rest of them.
         *
         *PARAMS:
         *   arrayObj: An array of objects whose keys whe want to rename (mandatory).
         *   renameKeys: An object whit the old and new names of the keys
         *   {'new_name' : 'old_name'} (mandatory).
         *RETURN: Array of objets
         *   This new array has the objects with only the specified renamed keys an their
         *   related values.
         *EXAMPLE:
         *   arrayObj = [
         *       {'k1' : 'Javier', 'k2' : 'a', 'k3' : 25, 'k4' : 1.83},
         *       {'k1' : 'Melissa', 'k2' : 'b', 'k3' : 20, 'k4' : 1.60},
         *       {'k1' : 'Juan', 'k2' : 'c', 'k3' : 31, 'k4' : 1.75},
         *       {'k1' : 'Alicia', 'k2' : 'd', 'k3' : 17, 'k4' : 1.64}
         *   ];
         *   renameKeys = {
         *       'name' : 'k1',
         *       'age' : 'k3',
         *       'height' : 'k4'
         *   }
         *
         *   renameArrayObjKeys(arrayObj, renameKeys);
         *   returns [
         *       {'name' : 'Javier', 'age' : 25, 'height' : 1.83},
         *       {'name' : 'Melissa', 'age' : 20, 'height' : 1.60},
         *       {'name' : 'Juan', 'age' : 31, 'height' : 1.75},
         *       {'name' : 'Alicia', 'age' : 17, 'height' : 1.64}
         *   ];
         *
         *SPECIAL REQUIREMENTS:
         *   It's necesary to include 'underscore.js' or 'underscore-min.js' library before including 'model.js'
         *
        **/
            function renameArrayObjKeys(arrayObj, renameKeys) {
                var newArrayObj, pairs;
                newArrayObj = [];
                pairs = _.pairs(renameKeys);
                for(var i = 0; i < arrayObj.length; i++) {
                    newArrayObj[i] = {};
                    for(j = 0; j < pairs.length; j++) {
                        newArrayObj[i][pairs[j][0]] = arrayObj[i][pairs[j][1]];
                    }
                }
                return newArrayObj;
            }
        /*
         *This function removes from an array of objects, the objects
         *whose key values are the same to the specified in withoutObj
         *this fuction performs like AND.
         *
         *PARAMS:
         *   arrayObj: Is an array of objects tha we will clean of objects with
                       the specific values in one or more specific keys (mandatory).
         *   withoutObj: Is an objet with the keys and values we don't want (mandatory).
         *
         *RETURN: Array of objects
         *   The array without the objects with the specific values in the specific keys
         *
         *EXAMPLE:
         *   arrayObj = [
         *        {'name' : 'Javier', 'age' : 25, 'height' : 1.83},
         *        {'name' : 'Melissa', 'age' : 20, 'height' : 1.60},
         *        {'name' : 'Juan', 'age' : 31, 'height' : 1.75},
         *        {'name' : 'Alicia', 'age' : 25, 'height' : 1.64}
         *   ];
         *
         *   //Remove all the objects whose 'age' is 25
         *   withoutObj = {'age' : 25};
         *   withoutArrayObjAND(arrayObj, withoutObj);
         *   returns [
         *        {'name' : 'Melissa', 'age' : 20, 'height' : 1.60},
         *        {'name' : 'Juan', 'age' : 31, 'height' : 1.75},
         *   ];
         *
         *   //Remove all the objects whose 'age' is 25 and whose 'name' is 'Javier'
         *   withoutObj = {'age' : 25, 'name' : 'Javier'};
         *   withoutArrayObjAND(arrayObj, withoutObj);
         *   returns [
         *        {'name' : 'Melissa', 'age' : 20, 'height' : 1.60},
         *        {'name' : 'Juan', 'age' : 31, 'height' : 1.75},
         *        {'name' : 'Alicia', 'age' : 25, 'height' : 1.64}
         *   ];
         *
         *SPECIAL REQUIREMENTS:
         *   It's necesary to include 'underscore.js' or 'underscore-min.js' library before including 'model.js'
         *
        **/
            function withoutArrayObjAND(arrayObj, withoutObj) {
                var length, newLength;
                do{
                    length = arrayObj.length;
                    arrayObj = _.without(
                        arrayObj,
                        _.findWhere(
                            arrayObj,
                            withoutObj
                        )
                    );
                    newLength = arrayObj.length;
                } while(length !== newLength);
                return arrayObj;
            }
        /*
         *This function removes from an array of objects, the objects
         *whose key values are the same to the specified in withoutObj
         *this fuction performs like OR.
         *For each 'key' : 'value', it uses the performance from
         *'withoutArrayObjAND' method.
         *
         *PARAMS:
         *   arrayObj: Is an array of objects tha we will clean of objects with
         *             the specific values in one or more specific keys (mandatory).
         *   withoutObj: Is an objet with the keys and values we don't want (mandatory).
         *
         *RETURN: Array of objects
         *   The array without the objects with the specific values in the specific keys.
         *
         *EXAMPLE:
         *   arrayObj = [
         *        {'name' : 'Javier', 'age' : 25, 'height' : 1.83},
         *        {'name' : 'Melissa', 'age' : 20, 'height' : 1.60},
         *        {'name' : 'Juan', 'age' : 31, 'height' : 1.75},
         *        {'name' : 'Alicia', 'age' : 25, 'height' : 1.64}
         *   ];
         *
         *   //Remove all the objects whose 'age' is 25 or whose 'name' is 'Melissa'
         *   withoutObj = {'age' : 25, 'name' : 'Javier'};
         *   withoutArrayObjOR(arrayObj, withoutObj);
         *   returns [
         *        {'name' : 'Juan', 'age' : 31, 'height' : 1.75},
         *   ];
         *
         *SPECIAL REQUIREMENTS:
         *   It's necesary to include 'underscore.js' or 'underscore-min.js' library before including 'model.js'
         *
        **/
            function withoutArrayObjOR(arrayObj, withoutObj) {
                pairs = _.pairs(withoutObj);
                withoutArrayObj = [];
                for(var idx=0; idx < pairs.length; idx++) {
                    withoutArrayObj[idx] = new Object();
                    withoutArrayObj[idx][pairs[idx][0]] = pairs[idx][1];
                }
                for(idx = 0; idx < withoutArrayObj.length ; idx++) {
                    arrayObj = withoutArrayObjAND(arrayObj, withoutArrayObj[idx]);
                }
                return arrayObj;
            }
    /*
     ###################################################################################################
        NUMBER FORMATS's Models
     ###################################################################################################
    */
        /*
         *This function transfors a numeric value in money format
         *It's sha512 crypting
         *
         *PARAMS:
         *   number: Is a number that value will be changed in money format (mandatory).
         *
         *RETURN: string
         *   With number in money format
         *
         *SPECIAL REQUIREMENTS:
         *   It's necesary to include 'sha512.js' library before including 'model.js'
        **/
            function currencyFormat(number) {
                var formattedQuantity;
                formattedQuantity = accounting.formatMoney(number);
                return formattedQuantity;
            }
        /*
         *This function transfors a numeric value in money format
         *
         *PARAMS:
         *   number: Is a number which value will be changed into a ceil rounded format,
                     whitn an especific number of decimals
         *   nDecimals: Is the number of decimals that the number will have
         *
         *RETURN: number
         *   With the raounde number
         *
        **/
            function roundNDecimalFormat(number, nDecimals) {
                var numberParts, integerPart, decimalPart, decimalPartDiv,
                    divisor, roundedNumber, extra0s;

                roundedNumber = NaN;

                if(!isNaN(number)) {

                    //Convert the number value in a String
                    number = '' + number;

                    //Separate in Integer and Decimal Part
                    numberParts = number.split('.');
                    //There will alway be an integer part, the first in the array
                    integerPart = numberParts[0];

                    //By default the decimal part is 0
                    decimalPart = '0';

                    //If there is not a decimal part
                    if(numberParts.length === 2) {

                        //The decimal part is taken, the second one in the array
                        decimalPart = numberParts[1];

                        //Whe need the nDecimals first digits to be the integer and the rest to remain decimal
                        divisor = Math.pow(10, decimalPart.length - nDecimals);
                        decimalPartDiv = +decimalPart / divisor;

                        //The new decimal part is rounded ceil
                        decimalPart = Math.ceil(decimalPartDiv);

                        //Now this new decimal part y converted to a string
                        decimalPart = '' + decimalPart;

                        //If the length of the new decimal part is necessary to complete with 0s at the begining
                        for(idx = 0; idx < nDecimals - decimalPart.length; idx ++) {
                            decimalPart = '0' + decimalPart;
                        }

                    }

                    //The next step is joining the integer and the decimal part, in order to get a string with the new number
                    roundedNumber = integerPart + '.' + decimalPart;
                    //The is necessary to transform the value ina number
                    roundedNumber = +roundedNumber;
                    //Now the number is fixed with the number of decimals
                    roundedNumber = roundedNumber.toFixed(nDecimals);
                }

                //The new formatted number is returnd
                return roundedNumber;
            }
    /*
     ###################################################################################################
        STRING Models
     ###################################################################################################
    */
        /*
         *This function replaces all the ocurrences in a string with a new value
         *
         *PARAMS:
         *   string: The string with the original value.
         *   found: A string with the found value.
         *   replace: A string with the new value to replace the found value
         *
         *RETURN: string
         *   With number in money format
         *
         *SPECIAL REQUIREMENTS:
         *   It's necesary to include 'sha512.js' library before including 'model.js'
        **/
            function replaceAll(string, found, replace) {
                string = '' + string;
                expReg = new RegExp(found, 'g');
                return string.replace(expReg, replace);
            }
        /*
         *
        **/
            function ucWords(string) {
                var arrayWords, returnString, len, i;
                arrayWords = string.split(" ");
                len = arrayWords.length;
                returnString = "";
                for(i = 0; i < len; i++) {
                    if(i != (len - 1)) {
                        returnString = returnString + ucFirst(arrayWords[i]) + " ";
                    } else {
                        returnString = returnString + ucFirst(arrayWords[i]);
                    }
                }
                return returnString;
            }
        /*
         *
        **/
            function ucFirst(string) {
                return string.substr(0, 1).toUpperCase() + string.substr(1, string.length).toLowerCase();
            }
        /*
         *This function trims a string, also eliminates
         *all intermediate spaces between words, converting them into one.
         *
         *PARAMS:
         *   string: The string with the original value.
         *
         *RETURN: string
         *   With the trimed content
         *
         *SPECIAL REQUIREMENTS:
         *   It's necesary to include 'underscore.js' or 'underscore-min.js' library before including 'model.js'
        **/
            function advancedTrim(string) {
                var newString, newStringElements;
                newString = $.trim(string);
                newStringElements = newString.split(' ');
                newStringElements = _.without(newStringElements, '');
                newString = newStringElements.join(' ');
                newString = $.trim(newString);
                return newString;
            }
    /*
     ###################################################################################################
        OTHER Models
     ###################################################################################################
    */
        /*
         *
        **/
            function picturesLoader(domElement, barElement, urlHandler, urlApi) {
                'use strict';
                $(domElement).fileupload({
                    url: urlHandler,
                    dataType: 'json',
                    done: function (e, data) {
                        var picPromise, files;
                        files = data.result.files;
                        picPromise = postalService(urlApi, files);

                        picPromise.success( function (data) {
                            $.each(files, function (index, file) {
                                $('<p/>').text(file.name).appendTo('#files');
                            });
                        });

                    },
                    progressall: function (e, data) {
                        var progress = parseInt(data.loaded / data.total * 100, 10);
                        $(barElement).css(
                            'width', progress + '%',
                            'background-color', '#5cb85c'
                        );
                    }
                });

                /*
                $(domElement).prop('disabled', !$.support.fileInput)
                    .parent().addClass($.support.fileInput ? undefined : 'disabled');
                */
            }
        /*
         *This function
         *
         *PARAMS:
         *   name:
        **/
            function randomString(name) {
                var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
                var stringLength = 4;
                var randomStrinGb = '';
                for(var i = 0; i < stringLength; i++) {
                    var rnum = Math.floor(Math.random() * chars.length);
                    randomStrinGb += chars.substring(rnum, rnum + 1);
                }
                randomStrinGb;
                $(name).val(randomStrinGb);
            }
    /*
     ###################################################################################################
        Returning all Models
     ###################################################################################################
    */
    return {
                  momentToRoman : momentToRoman,
                  momentToHuman : momentToHuman,
                    getTemplate : getTemplate,
                   loadTemplate : loadTemplate,
                       getValue : getValue,
                       setValue : setValue,
                     existInDOM : existInDOM,
                      trimValue : trimValue,
                        getHTML : getHTML,
                        setHTML : setHTML,
                   cryptElement : cryptElement,
                      appendOne : appendOne,
                    appendMulti : appendMulti,
                     prependOne : prependOne,
                   prependMulti : prependMulti,
                    resizeInput : resizeInput,
              setDateTPCalendar : setDateTPCalendar,
                  validFormFull : validFormFull,
                 validFormEmpty : validFormEmpty,
                      resetForm : resetForm,
                  postalService : postalService,
                getInternalJSON : getInternalJSON,
        hasOwnPropertyOptimized : hasOwnPropertyOptimized,
            filterArrayObjByKey : filterArrayObjByKey,
               sumArrayObjByKey : sumArrayObjByKey,
               avgArrayObjByKey : avgArrayObjByKey,
             renameArrayObjKeys : renameArrayObjKeys,
             withoutArrayObjAND : withoutArrayObjAND,
              withoutArrayObjOR : withoutArrayObjOR,
                 currencyFormat : currencyFormat,
            roundNDecimalFormat : roundNDecimalFormat,
                     replaceAll : replaceAll,
                        ucWords : ucWords,
                        ucFirst : ucFirst,
                   advancedTrim : advancedTrim,
                 picturesLoader : picturesLoader,
                   randomString : randomString,
    }
}());