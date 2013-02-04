define([
    "jquery",
    "underscore",
    "backbone",
    "models/widget-config"
], function($,  _, Backbone,WidgetConfig) {
    var Widget = Backbone.Model.extend({
	defaults: {
	    id : "stub",
	    name : "Stub",
	    description: "A stub Widget",
	    preview : "/img/preview.png",
	    script : "widgets/script.js",
	    config : {},
	},
	initialize: function(options) {
	    var that = this;
	    _.keys(this.defaults,function(key){
		that.attributes[key] = options[key] || that.defaults[key];
	    });
	    this.config = new WidgetConfig(this.config);
	}
    });
    return Widget;
});