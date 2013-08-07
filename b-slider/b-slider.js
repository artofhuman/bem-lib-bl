/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-slider', {

    onSetMod : {

        'js' : function() {
            this._initSlider();
            this._bindNav();
        }

    },

    _initSlider : function() {
        var wrap = this.findElem('wrap');

        $(wrap).jcarousel({
            list: '> ul',
            items: '> li'
        });
    },

    _bindNav : function() {
        var prev = this.findElem('prev'),
        next = this.findElem('next');

        $(prev).jcarouselControl({'target': '-=1'});
        $(next).jcarouselControl({'target': '+=1'});
    }

});
})();
