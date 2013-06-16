/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl('b-custom-select', {

    onSetMod : {
        'js' : function() {
            //console.log('123');
            //console.log($(this.domElem[0]));
            $(this.domElem[0]).customSelect();
        }
    }
});

})();
