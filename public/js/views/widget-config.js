define([
    "jquery",
    "jquery-ui",
    "underscore",
    "backbone",
    "text!templates/"
], function($, ui,  _, Backbone) {
    var WidgetConfigView = Backbone.View.extend({
	initialize: function(options) {
	    this.options = options || {};
	}
    });
    return WidgetConfigView;
});
