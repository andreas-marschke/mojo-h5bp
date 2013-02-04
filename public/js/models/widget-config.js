define([
    "jquery",
    "underscore",
    "backbone"
], function($,  _, Backbone) {
    var WidgetConfig = Backbone.Model.extend({
	initialize: function(options) {
	    this.attributes = options || {};
	}
    });
    return WidgetConfig;
});