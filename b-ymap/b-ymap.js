/** @requires BEM */
/** @requires BEM.DOM */

(function() {


BEM.DOM.decl('b-ymap', {

    onSetMod : {

        'js' : function() {
            var _this = this;

            ymaps.ready(function(){
                // Создаем карту
                var map = _this.initMap(_this._getParams());

                // Раставляем точки на карте
                _this.initPlaceholders(map);

                // Контролы
                map.controls.add(new ymaps.control.ZoomControl());

            });
        }
    },

    /**
     * Инициализирует карту
     */
    initMap: function(params) {
        var _this = this;
        var _map = null;

        _map = new ymaps.Map(_this.domElem.get(0), params);
        return _map;

    },
    /**
     * Расставляет на карте точки
     * @param {Object} map
     */
    initPlaceholders: function(map) {

        var placeholders = this._getPlaceholdersParams();
        if (placeholders) {
            myCollection = new ymaps.GeoObjectCollection();

            for (var i = 0; i < placeholders.length; i++) {
                myCollection.add(new ymaps.Placemark(placeholders[i].coords, placeholders[i].params, {preset: 'twirl#blueStretchyIcon'}));
            }

            map.geoObjects.add(myCollection);
        }

    },

    /**
     * Возвращает параметры для инициализации карты
     * По умолчанию ставит Центр Екб
     */
    _getParams: function() {

        var default_params = {
           center: [56.837944, 60.596653],
           zoom: 15
        };

        return jQuery.extend(default_params, this.params.map);
    },

    _getPlaceholdersParams: function() {
        return this.params.placeholders || null;
    }

}, {});

})();
