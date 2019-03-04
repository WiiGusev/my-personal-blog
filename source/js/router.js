'use strict';
(function() {

//Получение значения в URL после #
var getRouteInfo = function() {
    var hash = location.hash ? location.hash.slice(1) : 'home';
    var [name, id] = hash.split('/');
//Если Хэш URL не существующей страницы, то отобразить главную
    if (name !== 'about' && name !='posts' && name !='home') {
        name = 'home';
    }

    return { name, params: { id } }
};

var onChangeHash = function() {
    var { name, params } = getRouteInfo();

    if (name) {
        var routeName = name + 'Route';
        window.controller[routeName](params);
    }
};
//Обработчик при изменении Хэш URL
window.router = {
    init: function() {
        addEventListener('hashchange', onChangeHash);
        onChangeHash();
    }
}
})();