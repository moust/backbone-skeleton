define([
	'jquery',
	'underscore',
	'backbone',
	'router',
	'jquery.i18n',
	'jquery.i18n.messages',
	'jquery.i18n.fallbacks',
	'jquery.i18n.parser',
	'jquery.i18n.emitter',
	'jquery.i18n.language'
], function($, _, Backbone, Router) {

	var Application = {

		initialize: function() {
			$(document).ready(function(context){
				context.onDomReady();
			}(this));
		},

		onDomReady: function() {
			console.log("Application start");
			// init I18n
			this.initI18n();
			// init Router
			window.Router = Router.initialize();
		},

		initI18n: function () {
			// get locale
			var locale = getLocale();
			// Initialize jQuery i18n plugin
			// $.i18n.debug = true;
			window.i18n = $.i18n({ locale: locale });
			// load i18n strings
			$.i18n().load({
				'en': 'locale/en.json',
				'fr': 'locale/fr.json'
			});
			// update locale
			setLocale(locale);
		}

	};


	// Helpers

	getLocale = function () {
		if (!window.localStorage.getItem('locale')) {
			// handle user preferences
			var locale = typeof navigator === "undefined" ? "root" : (navigator.language || navigator.userLanguage || "root").toLowerCase();
			locale = locale.substr(0, 2); // keep only lang information
			window.localStorage.setItem('locale', locale);
		}
		return window.localStorage.getItem('locale');
	};

	setLocale = function (locale) {
		locale = locale.substr(0, 2).toLowerCase();
		console.log("locale:", locale);
		// store locale
		window.localStorage.setItem('locale', locale);
		// update DOM
		this.setDOMLocale(locale);
		// switch jQuery i18n plugin locale
		window.i18n.locale = locale;
	};

	setDOMLocale = function (locale) {
		var docElement = document.documentElement;
		// set lang attribute
		docElement.lang = locale;
		// set dir attribute
		if ('ar' === locale) { // TODO: update for right-to-left languages
			docElement.dir = 'rtl';
		} else {
			docElement.dir = 'ltr';
		}
	};


	return Application;

});