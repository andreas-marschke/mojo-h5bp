define([
    "jquery",
    "underscore",
    "backbone",
    "models/widget"
], function($,  _, Backbone,Widget) {
    var Widgets = Backbone.Collection.extend({
	model: Widget,
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
		    if (!callback === undefined) {
			callback.success();
		    }
		}
	    });
	}
    });
    return Widgets;
});
