const RepLogApp = require('./Components/RepLogApp');
const $ = require('jquery');
require('bootstrap-sass');

global.$ = $;

$(document).ready(function() {
	initializeRepLogs = $('.js-rep-log-table').data('rep-logs');
    var $wrapper = $('.js-rep-log-table');
    var repLogApp = new RepLogApp($wrapper, initializeRepLogs);
});