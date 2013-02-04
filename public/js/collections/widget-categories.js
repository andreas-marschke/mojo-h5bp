define([
    "jquery",
    "underscore",
    "backbone",
    "models/widget-category"
], function($,  _, Backbone,WidgetCategory) {
    var Widgets = Backbone.Collection.extend({
	model: WidgetCategory,
	url: "/widgets",
	initialize: function() {
	    _.extend(this,Backbone.Events);
	},
	fetch: function (callback) {
	    var that = this;
	    $.ajax({
		url: this.url,
		type: "GET",
		success: function(data) {
		    that.add(data);
		    that.trigger("finished");
		}
	    });
	}
    });
    return Widgets;
});
