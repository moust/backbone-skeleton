requirejs.config({
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },
    baseUrl: "js/",
    paths: {
        router: 'router',
        jquery: 'vendor/jquery-min',
        underscore: 'vendor/underscore-min',
        backbone: 'vendor/backbone-min',
        templates: '../templates'
    }
});

require([
    'app'
], function(App){
    App.initialize();
});