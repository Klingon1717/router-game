(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
$(document).ready(function () {
	var Router = Backbone.Router.extend({
		routes: {
			' ': 'goLoad',
			'load': 'goLoad',
			'menu': 'goMenu',
			'board': 'goBoard',
			'settings': 'goSettings',
			'play': 'goPlay'
		},
		goLoad: function goLoad() {
			$('section').hide();
			$('#loadScreen').show();
		},
		goMenu: function goMenu() {
			$('#loadScreen').hide();
			$('#boardScreen').hide();
			$('#settingsScreen').hide();
			$('#playScreen').hide();
			$('#menuScreen').show();
		},
		goBoard: function goBoard() {
			$('section').hide();
			$('#boardScreen').show();
		},
		goSettings: function goSettings() {
			$('section').hide();
			$('#settingsScreen').show();
		},
		goPlay: function goPlay() {
			$('section').hide();
			$('#playScreen').show();
		}
	});
	$('section').hide();
	$('#loadScreen').show();
	setTimeout(function () {
		$('#loadScreen').hide();
	}, 4000);

	var game = new Router();
	Backbone.history.start();
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map