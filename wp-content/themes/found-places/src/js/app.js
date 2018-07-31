import Utils from 'utils';

// Import jQuery and make it a global object
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// Global component loader.
$(function() {
	Utils.loadComponents();
	Utils.initGlobalEvents();
});
