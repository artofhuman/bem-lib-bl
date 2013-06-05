/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl('b-vk-like', {

    onSetMod : {

        'js' : function() {
            //TODO: инициализация дефолтных параметров
            if (typeof VK != 'undefined') {
                VK.init({apiId: this.params.APP_ID, onlyWidgets: true});
                VK.Widgets.Like("vk_like", {type: this.params.type });
            }
        }

    }

}, {
    live : false
});

})();
