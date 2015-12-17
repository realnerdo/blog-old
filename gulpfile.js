var elixir      = require('laravel-elixir'),
    jade        = require('laravel-elixir-jade'),
    livereload  = require('laravel-elixir-livereload'),
    bw          = '../../../public/bower/';

elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix.sass([
        bw + 'medium-editor/dist/css/medium-editor.min.css',
        bw + 'medium-editor/dist/css/themes/default.min.css',
        bw + 'medium-editor-insert-plugin/dist/css/medium-editor-insert-plugin.min.css',
        bw + 'datetimepicker/dist/DateTimePicker.min.css',
        bw + 'select2/src/scss/core.scss',
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
        bw + 'jquery/dist/jquery.min.js',
        bw + 'autosize/dist/autosize.min.js',
        bw + 'medium-editor/dist/js/medium-editor.min.js',
        bw + 'handlebars/handlebars.runtime.min.js',
        bw + 'jquery-sortable/source/js/jquery-sortable-min.js',
        bw + 'blueimp-file-upload/js/vendor/jquery.ui.widget.js',
        bw + 'blueimp-file-upload/js/jquery.iframe-transport.js',
        bw + 'blueimp-file-upload/js/jquery.fileupload.js',
        bw + 'medium-editor-insert-plugin/dist/js/medium-editor-insert-plugin.min.js',
        bw + 'datetimepicker/dist/DateTimePicker.min.js',
        bw + 'date.format/date.format.js',
        bw + 'select2/dist/js/select2.js',
        'magic.js'
    ], 'public/js/all.js');
});

elixir(function(mix) {
    mix.livereload();
});
