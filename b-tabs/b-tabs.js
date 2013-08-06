/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl('b-tabs', {

    onTabClick: function(e) {

        var tab = this._getItemByEvent(e);

        if (this.hasMod(tab, 'state', 'active')) {
            return;
        }

        this._deactivateCurrentTab();
        this._activateClickedTab(tab);
    },

    /**
     * Прячет активный таб
     */
    _deactivateCurrentTab: function() {
        var current_tab_item = this.findElem('item', 'state', 'active'),
            current_tab = this.findElem('tab', 'state', 'active');

        this.delMod(current_tab_item, 'state');
        this.delMod(current_tab, 'state');

    },

    /**
     * Активирует таб на котором кликнули
     */
    _activateClickedTab: function(tab) {
        var index = this.elem('toggles').find('.b-tabs__tab').index(tab),
            target_item = this.findElem('item').eq(index);

        this.setMod(target_item, 'state', 'active');
        this.setMod(tab, 'state', 'active');
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
