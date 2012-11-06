Блок слайдера на основе jcarousel

Привет использования
--------------------
{
    block: 'b-slider',
    next: '',
    prev: '',
    content: [
        {
            elem: 'item',
            content: 'carousel item'
        },
        {
            ...
        }
        
    ]
}

Для использования необходимы скрипты
https://github.com/jsor/jcarousel.git

Пример javascript инициализации
-------------------------------
if ($.fn.jcarousel) {

    $('.b-slider__wrap').jcarousel({
        list: '> ul',
        items: '> li'
    });

    $('.b-slider__prev').jcarouselControl({'target': '-=1'});
    $('.b-slider__next').jcarouselControl({'target': '+=1'});
}