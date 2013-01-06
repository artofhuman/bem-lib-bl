/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-product-count-changer', {

    onButtonClick : function(e) {

        var button = this._getItemByEvent(e);
        var cur_val = parseInt(this.elem('input').val(), 0);
        if (button.hasClass('b-product-count-changer__button_action_plus')) {
            // Плюсуем
            this.elem('input').val(cur_val + 1).change();
        } else{

            cur_val > 1 ? this.elem('input').val(cur_val - 1).change() : 1;
        }
    },

    _getItemByEvent : function(e) {
        return e.data.domElem.closest(this.buildSelector('button'));
    }

}, {

    live : function() {
        this.liveBindTo('button', 'leftclick', function(e) {
            this.onButtonClick(e);
        });
    }

});

})();
