define([
    "jquery",
    "ui",
    "underscore",
    "backbone",
    "text!templates/dashboard.html"
], function($, ui, _, Backbone,DashboardTemplate) {
    var Dashboard = Backbone.View.extend({
	initialize: function(options) {
	    this.options = options || {};
	    _.extend(this,Backbone.events);
	    this.options.toolbar.unbind('click');
	    var that = this;
	    this.options.toolbar.on('layout-change',function(layout){ 
		that.render(layout);
	    });
	},
	render: function(layout) {
	    var that = this;
	    this.$el.fadeOut({
		duration: 400, 
		complete: function() {
		    require(["text!" + layout.get("template") ],
			    function(Template){
				var template = _.template(DashboardTemplate,
							  {layout: layout,content : Template });
				that.$el.html(template);
				that.$el.find('.element').addClass('design');
				that.$el.find('.row').addClass('show-grid');
				that.$el.find('.row-fluid').addClass('show-grid');
				that.$el.find('.element')
				    .html('<div class="drop-info">Drag / Drop Things here!</div>');
			    });
		    that.$el.fadeIn();
		}
	    });
	    
	    $('#dashboard .element.design').droppable({ drop: function( event, ui ) {
		console.log(arguments);
	    }});
	}
    });
    return Dashboard;
});
