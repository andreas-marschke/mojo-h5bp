define([
    "jquery",
    "ui",
    "underscore",
    "backbone",
    "bootstrap",
    "text!templates/toolbar.html",
    "text!templates/infos/step1.html",
    "text!templates/infos/step2.html"
],function($,ui,_,Backbone,Bootstrap,ToolbarTemplate,InfoStep1,InfoStep2) {
    var Toolbar = Backbone.View.extend({
	initialize: function(options) {
	    this.options = options || {};
	    _.extend(this,Backbone.Events);
	    var that = this;
	    this.options.layouts.on('finished',function() { 
		that.render();
	    });
	    this.unbind();
	},
	events : {
	    "click li .layout-select" : "setLayout",
	    "click li .open" : "openLayout",
	    "click li .save" : "saveLayout",
	    "click li .info" : "showInfo"
	},
	setLayout : function(event) {
	    this.trigger("layout-change", this.options.layouts.get($(event.currentTarget).attr('id')));
	},
	openLayout : function() {
	    console.log('Open Layout');
	},
	saveLayout : function() {
	    console.log('Save Layout');
	},
	showInfo : function() { 
	    /* Animated Sequence explaining the normal Workflow in the Dashboard Designer */
	    /* 
	    console.log('Show Infos');
	    $('#layout-button').popover({
		animation: true,
		html: true,
		placement: "bottom",
		content: InfoStep1,
		title: "Tutorial Step #1"
	    }).popover('show');
	    setTimeout(function() {
		$('#layout-button').popover('hide');
		
		$('#widgets').popover({
		    animation: true,
		    html: true,
		    placement: "right",
		    content: InfoStep2,
		    title: "Tutorial Step #2"
		}).popover('show');
		
		setTimeout(function(){
		    $('#widgets').popover('hide');
		} ,7500);
	    },5000);
	    */
	},
	render : function() {
	    this.$el.html(_.template(ToolbarTemplate,{ 
		layouts: this.options.layouts
	    }));
	    $('.dropdown-toggle').dropdown();
	}
    });
    return Toolbar;
});
