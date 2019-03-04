'use strict';
//Отрисовка страницы #post
(function() {

	var resultNode = document.querySelector('.dinamic-content');
	var sidebarNode = document.querySelector('.sidebar__text');

	var post;

	window.post = {
		setData: function(data) {
			post = data;
		},

		render: function() {
			resultNode.innerHTML = window.view.render('post', post);
			sidebarNode.innerHTML = window.view.render('sidebarPost', post.author);
		}
	};	
})();