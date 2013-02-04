define([
    "jquery",
    "underscore",
    "backbone",
    "models/layout"
], function($, _, Backbone,Layout) {
    var Layouts = Backbone.Collection.extend({
	model: Layout,
	url: "/layouts",
	initialize: function() {
	    _.extend(this,Backbone.Events);
	},
	fetch: function () {
	    var that = this;
	    $.ajax({
		url: this.url,
		type: "GET",
		success: function(data) {
		    that.add(data);
		    that.trigger("finished")
		}
	    });
	}
    });
    return Layouts;
});
