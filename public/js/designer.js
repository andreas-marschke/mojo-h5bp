require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        'bootstrap': { deps: [ 'jquery' ] },
        'ui':        { deps: [ 'jquery' ] },
	'chosen':    { deps: [ 'jquery' ] },
        'underscore': { exports: '_' },
        'backbone': {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },

    },
    paths: {
        text: 'vendor/text',
        jquery: 'vendor/jquery',
	ui: 'vendor/jquery-ui',
        bootstrap: 'vendor/bootstrap',
	chosen: 'vendor/chosen.min.js',
        underscore: 'vendor/underscore',
        backbone: 'vendor/backbone'
    }
});
require([
    "jquery",
    "ui",
    "underscore",
    "backbone",
    "collections/layouts",
    "collections/widget-categories",
    "views/toolbar",
    "views/dashboard",
    "views/widgets",
], function($,ui,_,Backbone,Layouts,WidgetCategories, Toolbar, Dashboard, WidgetView){
    console.log($.ui);
    var layouts = new Layouts();
    var toolbar = new Toolbar({ el : $('#toolbar'), layouts : layouts });
    var dasboard = new Dashboard({ el : $("#dashboard"), toolbar: toolbar});
    var widgetview = new WidgetView({ el : $("#widgets"), collection:  new WidgetCategories()});
    layouts.fetch();

});






