/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl('b-popup-trigger', {

    onSetMod : {

        'js' : function() {
            var popup = this.findBlockInside('popup');
            this.findBlockInside('b-link').on('click', function() {
                popup.toggle(this.elem('inner'));
            });
        }
    }
});

})();
