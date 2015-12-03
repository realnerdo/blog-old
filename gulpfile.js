var elixir  = require('laravel-elixir'),
    jade    = require('laravel-elixir-jade');

elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix.sass([
        'master.sass'
    ], 'public/css/all.css');
});

elixir(function(mix) {
    mix.jade({
        search: '**/*.jade',
        src: '/assets/jade/'
    });
});
