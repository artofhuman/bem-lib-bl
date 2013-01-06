Табы
---------------------------
{
    block: 'b-tabs',
    content: [
        {
            elem: 'toggles',
            content: [
                {
                    elem: 'tab',
                    elemMods: {state: 'active'},
                    content: '1 tab'
                },
                {
                    elem: 'tab',
                    content: '2 tab'
                }
            ]
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
}
