define([
	'jquery',
	'underscore',
	'backbone'
],
function($, _, Backbone){

	var HelloView = Backbone.View.extend({

		initialize: function(){},

		render: function(){
			this.$el.text( $.i18n('hello world') );
			return this;
		}

	});

	return HelloView;

});