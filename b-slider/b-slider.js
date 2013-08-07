/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-slider', {

    onSetMod : {

        'js' : function() {
            this._init();
        },

        '_init' : function() {
            var wrap = this.findElem('wrap');

            $(wrap).jcarousel({
                list: '> ul',
                items: '> li'
            });
        },

        '_bindNavigation' : function() {
            var prev = this.findElem('prev'),
                next = this.findElem('next');

                $(prev).jcarouselControl({'target': '-=1'});
                $(next).jcarouselControl({'target': '+=1'});
        }
    }

});
})();
