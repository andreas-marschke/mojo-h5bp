define([
    "jquery",
    "underscore",
    "backbone",
    "collections/widgets"
], function($,  _, Backbone, Widgets) {
    var WidgetCategory = Backbone.Model.extend({
	defaults: {
	    name : "StubCategory",
	    id : "stub",
	    elements: []
	},
	initialize: function(options) {
	    var that = this;
	    _.keys(this.defaults,function(key){
		that.attributes[key] = options[key] || that.defaults[key];
	    });
	    var widgets = new Widgets();
	    _.each(this.get("elements"), function(element){
		widgets.add(element);
	    });
	    this.attributes.elements = widgets;
	}
    });
    return WidgetCategory;
});
