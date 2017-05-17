let elixir = require('laravel-elixir');
let glob = require('glob');

require('laravel-elixir-vue');

elixir(function (mix) {
    mix.webpack(glob.sync('./resources/assets/js/components/*.{vue,js}'), './resources/assets/js/scripts.js');
});