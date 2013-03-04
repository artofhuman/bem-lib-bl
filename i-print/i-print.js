/** @requires BEM */
/** @requires BEM */

(function() {

BEM.DOM.decl('i-print', {

    onSetMod : {

        'js' : function() {
            this.bindTo('leftclick', function(){
                window.print();
                return false;
            });
        }
    }

}, {
    live : false
});

})();
