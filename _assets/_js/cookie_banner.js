;let cookieBanner = (function(window, document, undefined){
    "use strict";
    
    // Defaults
    let _defaults = {
        element     : undefined,
        removeClass : "",
        threshold   : 50,
    };
    
    // Globals
    let _settings = {};
    
    
    /* Public methods */
    return {
        "init"      : init,
        "remove"    : remove,
    };
    
    function init(options){
        _settings = extend({}, _defaults, options);
        if (_settings.element) {
            document.addEventListener("scroll", scrollHandler);
        }
    }
    
    function remove(element){
        if (_settings.removeClass) {
            element.classList.add(_settings.removeClass);
        } else {
            element.remove();
        }
        document.removeEventListener("scroll", scrollHandler);
    }
    
    
    /* Private methods */
    function extend(){
        for (let i = 1; i < arguments.length; i++) {
            for (let key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key)) {
                    arguments[0][key] = arguments[i][key];
                }
            }
        }
        return arguments[0];
    }
    
    
    function scrollHandler(){
        if (window.pageYOffset >= _settings.threshold) {
            remove(_settings.element);
        }
    };
    
})(window, document);