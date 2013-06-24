define([
	'jquery',
	'underscore',
	'backbone',
	'views/HomeView'
], function($, _, Backbone, HomeView) {

	var views = {
		Home: HomeView
	};

	var initialize = function() {
		console.log('initialize Views');
		return views;
	};

	return {
		initialize: initialize
	};

});