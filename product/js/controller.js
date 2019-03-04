'use strict';

(function(){
	var onClickButton = function(evt) {
		if (evt.target.classList[2] === 'dinamic-content__article-feed') {
			window.home.addPosts();
		}
	};

	var dinamicContent = document.querySelector('.dinamic-content');
	//При клике на кнопку показа дополнительных постов
	dinamicContent.addEventListener('click', function(evt) {
		onClickButton(evt);
	});
	//Получение данных для отрисовки и направляет на функции для отрисовки страниц 
	window.controller = {
		homeRoute: function() {
			var home = window.dataAll.getHome();
			window.home.setData(home);
			window.home.render(); 
		},
		postsRoute: function(params) {
			if (params.id) {
				var posts = window.dataAll.getPosts(params.id);
				window.post.setData(posts);
				window.post.render();
			}
			else {
				this.homeRoute();
			}
		},
		aboutRoute() {
			var about = window.dataAll.getAbout();
			window.about.setData(about);
			window.about.render();
		}
	};

})();