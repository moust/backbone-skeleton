requirejs.config({
    baseUrl: "js/",
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'jquery.i18n'          : ['jquery'],
        'jquery.i18n.messages' : ['jquery.i18n'],
        'jquery.i18n.fallbacks': ['jquery.i18n'],
        'jquery.i18n.parser'   : ['jquery.i18n'],
        'jquery.i18n.emitter'  : ['jquery.i18n'],
        'jquery.i18n.language' : ['jquery.i18n']
    },
    paths: {
        templates : '../templates',
        router    : 'router',
        modernizr : 'vendor/modernizr-min',
        jquery    : 'vendor/jquery-min',
        underscore: 'vendor/underscore-min',
        backbone  : 'vendor/backbone-min',
        'jquery.i18n'          : 'vendor/jquery.i18n/src/jquery.i18n',
        'jquery.i18n.messages' : 'vendor/jquery.i18n/src/jquery.i18n.messages',
        'jquery.i18n.fallbacks': 'vendor/jquery.i18n/src/jquery.i18n.fallbacks',
        'jquery.i18n.parser'   : 'vendor/jquery.i18n/src/jquery.i18n.parser',
        'jquery.i18n.emitter'  : 'vendor/jquery.i18n/src/jquery.i18n.emitter',
        'jquery.i18n.language' : 'vendor/jquery.i18n/src/jquery.i18n.language',
    }
});

require([
    'app'
], function(App){
    App.initialize();
});