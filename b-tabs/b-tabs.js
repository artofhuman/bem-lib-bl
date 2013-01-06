/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl('b-tabs', {

    onTabClick: function(e) {

        var tab = this._getItemByEvent(e);
        var index = this.elem('toggles').find('.b-tabs__tab').index(tab);

        $(this.elem('body')).find('.b-tabs__item_state_active').removeClass('b-tabs__item_state_active');
        $(this.elem('item')).eq(index).addClass('b-tabs__item_state_active');
        $(this.elem('tab')).removeClass('b-tabs__tab_state_active');
        $(tab).addClass('b-tabs__tab_state_active');
    },

    _getItemByEvent : function(e) {
        return e.data.domElem.closest(this.buildSelector('tab'));
    }

}, {

    live : function() {
        this.liveBindTo('tab', 'leftclick', function(e) {
            this.onTabClick(e);
        });
    }

});

})();
