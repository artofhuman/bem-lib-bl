/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('roundabout-slider', {

    onSetMod : {

        // TODO: Set default option, remove project related options
        'js' : function() {
            var _this = this;
            $(this.domElem).roundabout({
                'minScale': 0.6,
                'maxScale': 1,
                'minOpacity': 1,
                'maxOpacity': 1,
                'btnNext': '.b-header__slider-next',
                'btnPrev': '.b-header__slider-prev'
            });
        }
    }

}, {

    live : false

});

})();
