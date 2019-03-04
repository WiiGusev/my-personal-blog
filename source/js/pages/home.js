'use strict';
//Отрисовка страницы #home
(function() {
	var ITEMS = 7;
	var CurrentCountItems = 0;
	var newsFeed;

	var resultNode = document.querySelector('.dinamic-content');
	var sidebarNode = document.querySelector('.sidebar__text');

	var renderPosts = function(data) {
		var posts = [];
		var count = CurrentCountItems;

		if (CurrentCountItems+ITEMS < data.length) { 	
			for (var i = count; i<(count+ITEMS); i++) { 
				posts.push(data[i]);
				CurrentCountItems = i+1;
			}
		}
		else {
			for (var i = count; i<data.length; i++) {
				posts.push(data[i]);
				CurrentCountItems = i+1;
			}
		}
		return posts;
	};


	window.home = {
		addPosts: function() {
			var articleFeed = resultNode.querySelector('.article-feed');
			var addpost = {
				post: []
			};
			addpost.post = renderPosts(newsFeed);

			var posts = articleFeed.innerHTML;
			posts += window.view.render('article', addpost);

			articleFeed.innerHTML = posts;
		},
		setData: function(data) {
			newsFeed = data;
		},

		render: function() {;
			CurrentCountItems = 0;

			resultNode.innerHTML = window.view.render('home', ' ');
			sidebarNode.innerHTML = window.view.render('sidebarDefault', ' ');

			this.addPosts(newsFeed);		
		}
	};	

	/*

	var renderPosts = function(data) {
		var posts = '';
		var count = CurrentCountItems;

		if (CurrentCountItems+ITEMS < data.length) { 	
			for (var i = count; i<(count+ITEMS); i++) {
				var templatePost = '<article class="article-feed__article">'
					+ '<h1 class="title article-feed__title">'+ data[i].title +'</h1> '
						+ '<div class="article-feed__date-category">' 
							+ '<p class="article-feed__dc article-feed__date">March 2, 2016</p>'
							+ '<span class="article-feed__dc article-feed__symbol">&#448;</span>'
							+ '<p class="article-feed__dc article-feed__category">Travel</p>'
						+ '</div>'
						+ '<p class="paragraph article-feed__paragraph">'+data[i].body+'</p>'
						+ '<a class="button article-feed__continue-button" href="#posts/'+data[i].id+'">Continue reading</a>'
					+ '</article>';
					
				posts+=templatePost;	
				CurrentCountItems = i+1;
			}
		}
		else {
			for (var i = count; i<data.length; i++) {
				var templatePost = '<article class="article-feed__article">'
					+ '<h1 class="title article-feed__title">'+data[i].title+'</h1> '
						+ '<div class="article-feed__date-category">' 
							+ '<p class="article-feed__dc article-feed__date">March 2, 2016</p>'
							+ '<span class="article-feed__dc article-feed__symbol">&#448;</span>'
							+ '<p class="article-feed__dc article-feed__category">Travel</p>'
						+ '</div>'
						+ '<p class="paragraph article-feed__paragraph">'+data[i].body+'</p>'
						+ '<a class="button article-feed__continue-button" href="#posts/'+data[i].id+'">Continue reading</a>'
					+ '</article>';
				posts+=templatePost;
				CurrentCountItems = i+1;

			}
			var button = document.querySelector('.dinamic-content__article-feed');
				button.classList.add('visually-hidden');	

		}
		return posts;
	};


	window.home = {
		addPosts: function() {
			var articleFeed = resultNode.querySelector('.article-feed');
			var posts = articleFeed.innerHTML;
			posts += renderPosts(newsFeed);

			articleFeed.innerHTML = posts;
		},
		setData: function(data) {
			newsFeed = data;
		},

		render: function() {;
			CurrentCountItems = 0;

			resultNode.innerHTML = window.view.render('home', ' ');
			sidebarNode.innerHTML = window.view.render('sidebarDefault', ' ');

			this.addPosts(newsFeed);		
		}
	};	

	*/
})();