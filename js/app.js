define([
	'jquery',
	'underscore',
	'backbone',
	'router'
], function($, _, Backbone, Router) {

	var initialize = function() {
		if (window.cordova || window.Cordova) {
			document.addEventListener("deviceready", onDeviceReady, false);
		} else {
			$(document).ready(onDeviceReady);
		}
	};

	var onDeviceReady = function() {
		console.info("deviceready");
		Router = Router.initialize();
	};

	return {
		initialize: initialize
	};

});