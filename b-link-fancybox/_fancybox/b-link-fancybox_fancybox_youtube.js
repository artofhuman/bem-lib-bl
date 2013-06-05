/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl({ block: 'b-link-fancybox', modName: 'fancybox', modVal: 'youtube'}, {

    onLinkClick: function(e) {

        var _this = e.data.domElem;
        var href = _this.attr('href');

        $.fancybox({
            'titleShow' : false,
            'padding' : 0,
            'href': href.replace(new RegExp('youtu.be', 'i'), 'www.youtube.com/v').replace(new RegExp('watch\\?v=([a-z0-9\_\-]+)(&|\\?)?(.*)', 'i'), 'embed/$1?version=3&$3'),
            'type' : 'swf',
            'swf' : {
                'wmode':'transparent',
                'allowfullscreen':'true'
            }
        });

        return false;
    }
}, {
    live : function() {

        this.liveBindTo('leftclick', function(e){
            this.onLinkClick(e);
            return false;
        });
    }
});

})();
