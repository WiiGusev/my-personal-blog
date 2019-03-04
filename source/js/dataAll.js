'use strict';
(function(){
	//Получение данных
	window.dataAll = {
		getHome: function() {
			var posts = 'https://jsonplaceholder.typicode.com/posts';
			var home = window.load.load(posts);
			return home;
		},

		getPosts: function(idpost) {
			var URLPost = 'https://jsonplaceholder.typicode.com/posts/'+idpost;
			var URLComments = 'https://jsonplaceholder.typicode.com/posts/'+idpost+'/comments'; 

			var post = {
				post: window.load.load(URLPost),
				comments: [],
				author: []
			};
			post.author = window.load.load('https://jsonplaceholder.typicode.com/users/'+post.post.userId);

			var comments = window.load.load(URLComments);

			for (var i = 0; i<comments.length; i++) {
				if (comments[i].postId === post.post.id) {
					post.comments.push(comments[i]);
				}
			}

			return post;
		},

		getAbout: function() {
			return ' ';
		}
	};

})();