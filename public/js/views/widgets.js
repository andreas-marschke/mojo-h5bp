define([
    "jquery",
    "ui",
    "underscore",
    "backbone",
    "collections/widget-categories",
    "text!templates/widgets.html",
], function($,ui, _, Backbone,WidgetCategories,WidgetsTemplate) {
    var WidgetView = Backbone.View.extend({
	collection: WidgetCategories,
	initialize: function() {
	    var that = this;
	    this.collection.on("finished",function() {  
		that.render();
	    });
	    this.collection.fetch();
	},
	events : {
	    "click .widgets-hide": "hideWidgets",
	},
	hideWidgets: function (ev) {
	    $('#widgets').animate({left: '-300px'},500,function() {
		$('.widgets-show').removeClass('hide');
		$('.widgets-show').animate({left: '0'},500,function() {
		});
	    });
	},
	render: function() {
	    var template = _.template(WidgetsTemplate,{ categories: this.collection});
	    this.$el.html(template);
	    $('.widgets-show').click(function(){ 
		$('.widgets-show').animate({left: '-300px'},500,function(){
		    $('.widgets-show').addClass('hide');
		    $('#widgets').animate({left: '0'},500);
		});
	    });
	    $('.element').draggable({ 
		cursor: "move",
		helper: "clone",
		containment: "#dashboard",
		
	    });
	    $('#dashboard .design.element').droppable({ drop: function( ) {
		console.log(arguments);
	    }});
	}
    });
    return WidgetView;
});
