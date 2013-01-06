/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-custom-form-radio', {

    _onClick : function(e) {
        this._setStateChecked();
    },

    _setStateChecked: function() {
        this.elem('radio').prop('checked', 'checked');
        this.setMod('checked', 'yes');
    },

    _initModChecked: function() {
        if (this.elem('radio').prop('checked')) {
            this._setStateChecked();
        }
    },

    onSetMod : {

        'js' : function() {

            // Инициализируем начальное состояние
            this._initModChecked();

            // Навешиваем изменение события по клику
            this.bindTo('click', function(e) {
                this._onClick(e);
            });
        }

    }

}, {

    live : false

});

})();
