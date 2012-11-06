Табы
---------------------------

Javascript
---------------------------
$('.b-tabs__tab').click(function(){
    tabsWrap =  $(this).parents('.b-tabs');
    index = $(tabsWrap.find('.b-tabs__tab')).index(this);
    tabsWrap.find('.b-tabs__tab_state_active').removeClass('b-tabs__tab_state_active');
    $(this).addClass('b-tabs__tab_state_active');

    tabsWrap.find('.b-tabs__item_state_active').removeClass('b-tabs__item_state_active');
    tabsWrap.find('.b-tabs__item').eq(index).addClass('b-tabs__item_state_active');

    return false;
});

Html
-------------------------
block: 'b-tabs',
content: [
    {
        elem: 'tab',
        elemMods: {state: 'active'},
        content: '1 tab'
    },
    {
        elem: 'tab',
        content: '2 tab'
    },
    {
        elem: 'body',
        content: [
            {
                elem: 'item',
                elemMods: {state: 'active'},
                content: 'first tab content'
            },
            {
                elem: 'item',
                content: 'second tab content'
            }
        ]
    }
]
