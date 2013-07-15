define([
	'jquery',
	'underscore',
	'backbone',
	'views/HelloView'
], function($, _, Backbone, HelloView) {

	var Router = Backbone.Router.extend({

		routes: {
			// Define some URL routes
			'locale/:locale': 'localeAction',
			// Default
			'*actions': 'defaultAction'
		},

		render: function(view) {
			// close the current view
			if (this.currentView) {
				// same as this.$el.remove();
				this.currentView.remove();
				// unbind events that are set on this view
				this.currentView.off();
				// remove all models bindings made by this view
				if (this.currentView.model) {
					this.currentView.model.off( null, null, this );
				}
			}

			//render the new view
			$("#page").html( view.render().el );

			$(document).trigger('PagerRendered');

			//Set the current view
			this.currentView = view;

			// Handle external links
			this.handleExternalLinks();

			return this;
		},

		// open external links in new tab
		handleExternalLinks: function() {
			$(document).on("click", 'a[href^="http://"]', function(e){
				e.preventDefault();
				window.open(this.href, '_blank', 'location=yes');
				return false;
			});
		},

		defaultAction: function(actions) {
			console.log('defaultAction', actions);
			var view = new HelloView();
			this.render(view);
		},

		localeAction: function(locale) {
			setLocale(locale);
			this.navigate("/", {trigger: true, replace: true});
		}

	});

	var initialize = function() {
		console.log('initialize Router');
		var router = new Router();
		Backbone.history.start();
		return router;
	};

	return {
		initialize: initialize
	};

});