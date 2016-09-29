'use strict';
$(document).ready(function() {
var Router = Backbone.Router.extend({
	routes: {
		' ': 'goLoad',
		'load': 'goLoad',
		'menu':'goMenu',
		'board': 'goBoard',
		'settings': 'goSettings',
		'play': 'goPlay'
	},
	goLoad: function(){
		$('section').hide();
		$('#loadScreen').show();
	},
	goMenu: function(){
		$('#loadScreen').hide();
		$('#boardScreen').hide();
		$('#settingsScreen').hide();
		$('#playScreen').hide();
		$('#menuScreen').show();
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
});	
$('section').hide();
$('#loadScreen').show();
setTimeout(function() {
		$('#loadScreen').hide();
	}, 4000);
	
	var game = new Router();
	Backbone.history.start();
})
