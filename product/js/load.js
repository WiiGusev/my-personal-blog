'use strict';
(function() {
	//Загрузка JSON
	window.load = { 
		load: function(URL_CONTENT) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', URL_CONTENT, false);
			xhr.send();
				if (xhr.status === 200) {
					var data = JSON.parse(xhr.responseText);
					return(data);
				}
				else {
					alert(xhr.status+':'+xhr.statusText);
			}

		}
	};
})();