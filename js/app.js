define([
	'jquery',
	'underscore',
	'backbone',
	'router',
	'views'
], function($, _, Backbone, Router, Views) {

	var initialize = function() {
		if (window.cordova || window.Cordova) {
			document.addEventListener("deviceready", onDeviceReady, false);
		} else {
			$(document).ready(onDeviceReady);
		}
	};

	var onDeviceReady = function() {
		console.info("deviceready");
		window.Views = Views.initialize();
		Router = Router.initialize();
	};

	return {
		initialize: initialize
	};

});