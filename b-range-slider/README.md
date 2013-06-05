Блок b-range-slider это разметка для ui слайдера
================================================

Для фунционирования слайдера нужно добавить яваскрипт

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