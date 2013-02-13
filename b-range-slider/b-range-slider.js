/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl('b-range-slider', {

    onSetMod : {

        'js' : function() {
            var _this = this;

            if ($.fn.slider) {
                $(_this.elem('ui-slider')).slider({
                    range: true,
                    min: 0,
                    max: 3000,
                    step: 50,
                    values: [ $(".b-range-slider__min_val").val(), $(".b-range-slider__max_val").val() ],
                    slide: function( event, ui ) {
                        $(".b-range-slider__min_val").val(ui.values[0]);
                        $(".b-range-slider__max_val").val(ui.values[1]);
                    }
                });
            }
        }
    }
});

})();
