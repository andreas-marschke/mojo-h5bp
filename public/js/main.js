require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
	'underscore': {
	    exports: '_'
	},
	'backbone': {
	    deps: [
		'underscore',
		'jquery'
	    ],
	    exports: 'Backbone'
	}
    },
    paths: {
	jquery: 'vendor/jquery',
	underscore: 'vendor/underscore',
	backbone: 'vendor/backbone',
	text: 'vendor/text'
    }
});	      

require([
    'lib/view'
], function( ) {

});

