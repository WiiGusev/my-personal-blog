'use strict';
//Отрисовка страницы #about
(function() {

	var resultNode = document.querySelector('.dinamic-content');
	var sidebarNode = document.querySelector('.sidebar__text');
	var about;

	window.about = {
		setData: function(data) {
			about = data;
		},

		render: function() {
			resultNode.innerHTML = window.view.render('about', about);
			sidebarNode.innerHTML = window.view.render('sidebarDefault', ' ');
		}
	};	
})();