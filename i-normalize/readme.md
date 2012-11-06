Подтягивает normalize.css 

Использование
Для того чтобы блок заработал нужно переопределить блок b-page 
в технологии deps.js и добавить зависимость normalize

({
    mustDeps: [],
    shouldDeps: [
        { block: 'i-normalize' }
    ]
})

Теперь блок можно подключить на страницу

head: [
    { block: 'i-normalize'},
],
