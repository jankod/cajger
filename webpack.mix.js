let mix = require('laravel-mix');

let dirStatic = "./src/main/resources/static";

mix.autoload({
    jquery: ['$', 'window.jQuery']
});
//


mix
    .js(dirStatic + '/src/index.js', dirStatic + '/dist/')
    .sass(dirStatic + '/src/index.scss', dirStatic + '/dist/')
    .setPublicPath('./')
    .extract(['bootstrap', 'jquery', 'fullcalendar', 'fullcalendar-scheduler'])
;

mix.autoload({
    jquery: ['$', 'window.jQuery']
});

// mix.js('resources/assets/js/user.js', 'public/js')
//     .sass('resources/assets/sass/user.scss', 'public/css');

//mix.disableNotifications();

//console.log(mix);
console.log("finish");