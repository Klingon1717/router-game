'use strict';
$(document).ready(function() {
var Router = Backbone.Router.extend({
	routes: {
		'board': 'goBoard',
		'settings': 'goSettings',
		'play': 'goPlay'
	},
	goBoard: function(){
		$('section').hide();
		$('#boardScreen').show();
	},
	goSettings: function(){
		$('section').hide();
		$('#settingsScreen').show();
	},
	goPlay: function(){
		$('section').hide();
		$('#playScreen').show();
	}
})
	
	var game = new Router();
	Backbone.history.start();

});
