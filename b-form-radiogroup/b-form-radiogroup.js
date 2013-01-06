/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-form-radiogroup', {
    _onClick : function(e) {

        var radio_blocks = this.findBlocksInside('b-custom-form-radio');

        $(radio_blocks).each(function(i, radio_block){
            radio_inp = radio_block.elem('radio');
            if (!radio_inp.prop('checked')){
                radio_block.setMod('checked', '');
            }
        });
    }

}, {

    live : function () {
        this.liveBindTo('click', function(e) {
            this._onClick(e);
        });
    }

});

})();
