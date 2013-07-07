# Popup

Попап блок яндекса

- Изменено создание хелпере i-popup (теперь его нужно заранее деларировать в блоке с попамом)
это сделано для того чтобы избаиться от зависимости подключения bemhtml.js

# Пример использования

        {
            block: 'b-popup-trigger',
            content: [
                {
                    elem: 'trigger',
                    content:
                    {
                        block: 'b-link',
                        mods: {pseudo: 'yes'},
                        content:
                        [
                            {
                                elem: 'inner',
                                content: 'Триггер'
                            }
                        ]
                    }
                },
                {
                    block: 'popup',
                    mods: { direction: 'fixed', theme: 'default-modal' },
                    content: [
                        {
                            elem: 'content',
                            content: 'контент'
                        },
                        {
                            block: 'i-popup',
                            mods: { autoclosable: 'yes', fixed: 'yes' },
                            underMods: { color: 'white', type: 'paranja' }
                        }
                    ]
                }
            ]
        }