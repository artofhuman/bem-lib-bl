Блок с Яндекс картой

# Сначала необходимо подключить апи яндекс карт

    <script src="http://api-maps.yandex.ru/2.0-stable/?load=package.standard&amp;lang=ru-RU"></script>

## Простой  пример использования

    {
        block: 'b-ymap'
    }

## пример c использованием параметров

    {
        block: 'b-ymap',
        js:
        {
            map: {
               center: [56.837944,60.596653],
               zoom: 15
            }
        }
    }

## Пример с инициализацей балунов

    {
        block: 'b-ymap',
        js: {
            placeholders: [
                {
                    coords: [56.837944, 60.596653],
                    params: {iconContent: 'Магазин на 8 марта, 27В', balloonContentBody: 'Тел. / факс: +7 (343) 351-00-13'}
                }
            ]
        }
    }
