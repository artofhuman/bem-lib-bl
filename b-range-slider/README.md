Блок b-range-slider это разметка для ui слайдера
================================================

Для фунционирования слайдера нужно добавить яваскрипт
if ($.fn.slider) {
    $('.b-range-slider__ui-slider').slider({
        range: true,
        min: 0,
        max: 3000,
        step: 50,
        values: [ $(".b-range-slider__min_val").val(), $(".b-range-slider__max_val").val() ],
        slide: function( event, ui ) {
            $(".b-range-slider__min_val").val(ui.values[0]);
            $(".b-range-slider__max_val").val(ui.values[1]);
        }
    });
}

Также нужно подключить jQuery UI
{ elem: 'js', url: 'http://yandex.st/jquery-ui/1.9.2/jquery-ui.min.js'},
{ elem: 'js', url: 'http://yandex.st/jquery-ui/1.9.2/jquery.ui.slider.min.js'},


и добавить нужные стили для визуализации :)
===============================================

# Стили для ползунка 
.ui-slider .ui-slider-handle{
    background: url('/images/slider1.png') 0 0 no-repeat;
}

# Стили для визуализации расстояния между ползунками 
.ui-slider .ui-slider-range {
    background: url('/images/track-line-active.png') repeat-x center;
}

# Стили для визуализации полоски слайдера
.b-range-slider__ui-slider{
    background: url("/images/track-line.png") repeat-x 0 center;
}

Использование
=============================

# 1 Простое объявление (Показыват только полосу слайдера. Блок с инпутами скрин. Инпуты hidden)
{
    block: 'b-range-slider'
}

# Можно задать положение ползунков (Если не установлено выставляется 50-1000)
{
    block: 'b-range-slider',
    min: '100',
    max: '1000'     
}
