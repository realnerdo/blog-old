var elixir      = require('laravel-elixir'),
    jade        = require('laravel-elixir-jade'),
    livereload  = require('laravel-elixir-livereload');

elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix.sass([
        '../../../public/bower/medium-editor/dist/css/medium-editor.min.css',
        '../../../public/bower/medium-editor/dist/css/themes/default.min.css',
        '../../../public/bower/medium-editor-insert-plugin/dist/css/medium-editor-insert-plugin.min.css',
        'master.sass'
    ], 'public/css/all.css');
});

elixir(function(mix) {
    mix.jade({
        search: '**/*.jade',
        src: '/assets/jade/'
    });
});

elixir(function(mix) {
    mix.scripts([
        '../../../public/bower/jquery/dist/jquery.min.js',
        '../../../public/bower/medium-editor/dist/js/medium-editor.min.js',
        '../../../public/bower/handlebars/handlebars.runtime.min.js',
        '../../../public/bower/jquery-sortable/source/js/jquery-sortable-min.js',
        '../../../public/bower/blueimp-file-upload/js/vendor/jquery.ui.widget.js',
        '../../../public/bower/blueimp-file-upload/js/jquery.iframe-transport.js',
        '../../../public/bower/blueimp-file-upload/js/jquery.fileupload.js',
        '../../../public/bower/medium-editor-insert-plugin/dist/js/medium-editor-insert-plugin.min.js',
        'magic.js'
    ], 'public/js/all.js');
});

elixir(function(mix) {
    mix.livereload();
});
