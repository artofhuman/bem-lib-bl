/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl({ block: 'b-link-fancybox', modName: 'fancybox', modVal: 'default'}, {

    onLinkClick: function(e) {

        var _this = e.data.domElem;

        // Check if has attr for group
        if (_this.attr('rel')) {
            var ar_images = [],
                cur_link_index = $(".b-link-fancybox[rel='gallery']").index($(_this));

            $(".b-link-fancybox[rel='gallery']").each(function (i, e) {
                ar_images.push($(e).attr('href'));
            });

            $.fancybox(
              ar_images,
              {
                titleShow : false,
                padding : 0,
                type: "image",
                index: cur_link_index
            });

        } else { // Else if image not in group
            $.fancybox(
              {
                titleShow : false,
                padding : 0,
                href: _this.attr('href'),
                type: "image"
            });
        }

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
