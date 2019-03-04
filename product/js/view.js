'use strict';
//Функция шаблонизатор
//Принимает название шаблона и данные, которые нужно вставить в шаблон
//Работается через handlebars.min.js
(function() {
	window.view = {
		render: function(templateName, data) {
			templateName = templateName + 'Template';
			//console.log(templateName);
			var templateElement = document.querySelector('#'+templateName);
			//console.log(templateElement);
			var templateSource = templateElement.innerHTML;
			var renderFn = Handlebars.compile(templateSource);

			return renderFn(data);
		}
	};
})();