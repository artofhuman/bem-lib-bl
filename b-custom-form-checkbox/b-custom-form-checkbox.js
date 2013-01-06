/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-custom-form-checkbox', {

    _onClick : function(e) {
        this.toggle();
    },

    onSetMod : {

        'js' : function() {
            // Проверяем если чекбокс в состоянии чекет ставим модификатор
            if (this.elem('checkbox').prop('checked')){
                this.setMod('checked', 'yes');
            }

            // Навешиваем изменение события по клику
            this.bindTo('click', function(e) {
                this._onClick(e);
            });
        }

    },

    toggle : function() {

        if (this.hasMod('checked')){
            // Убираем состояние чекед
            this.elem('checkbox').removeAttr('checked');
            this.setMod('checked', '');
        } else {
            // ставим чекбокс в состояние чекед
            this.elem('checkbox').attr('checked', 'checked');
            this.setMod('checked', 'yes');
        }
    }

}, {

    live: false

});

})();
