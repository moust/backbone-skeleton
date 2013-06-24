define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {

	var Router = Backbone.Router.extend({

		routes: {
			// Define some URL routes
			// Default
			'*actions': 'defaultAction'
		},

		render: function(view) {
			//Close the current view
			if (this.currentView) {

				// remove touchmove event listener (added by iScroll)
				if (this.currentView.touchmoveHandler) {
					document.removeEventListener('touchmove', this.currentView.touchmoveHandler, false);
				}

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

		handleExternalLinks: function() {
			$(document).on("click", 'a[href^="http://"]', function(e){
				e.preventDefault();
				window.open(this.href, '_blank', 'location=yes');
				return false;
			});
		},

		defaultAction: function(actions) {
			console.log('defaultAction', actions);
			var view = new Views.Home();
			this.render(view);
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