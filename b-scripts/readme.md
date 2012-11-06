Блок для вывода яваскипта в самом низу страницы перед закрытием body

Пример использоания
===================
{
    block: 'b-scripts',
    content: [
        {
            elem: 'js',
            url: '/js/jquery-1.7.2.min.js'
        },
        {
            elem: 'js',
            url: '/js/application.js'
        }
    ]
}