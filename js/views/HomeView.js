define([
	'jquery',
	'underscore',
	'backbone'
],
function($, _, Backbone){

	var HomeView = Backbone.View.extend({

		initialize: function(){},

		render: function(){
			console.log('render Home view');
			this.$el.text('Hello world');
			return this;
		}

	});

	return HomeView;

});