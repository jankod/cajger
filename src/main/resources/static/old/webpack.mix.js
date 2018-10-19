const mix = require('laravel-mix');

var conf = {};
conf.dirStatic = "./src/main/resources/static";
conf.dirStaticSrc = conf.dirStatic + '/src/';
conf.dirStaticDist = conf.dirStatic + '/dist/';

conf.mix = mix;

function js(jsPath) {
    conf.mix.js(conf.dirStaticSrc + '/' + jsPath, conf.dirStaticDist);
    return mix;
}

function sass(sassPath) {
    conf.mix.sass(conf.dirStaticSrc + '/' + sassPath, conf.dirStaticDist)
    return mix;
}

//


mix
//  .js(dirStaticSrc + '/index.js', dirStaticDist)
//  .sass(dirStaticSrc + '/index.scss', dirStaticDist)
    .setPublicPath('./')
// .extract(['bootstrap', 'jquery'])
//    .extract(['fullcalendar', 'fullcalendar-scheduler'])
//.js(dirStatic + 'bootstrap_jquery.js', dirStaticDist)
//.sass(dirStaticSrc + 'bootstrap_jquery.scss', dirStaticDist)
;
js('index.js')
sass('index.scss');
js('bootstrap_jquery.js');
sass('bootstrap_jquery.scss');


mix.autoload({
    jquery: ['$', 'window.jQuery']
});

// mix.js('resources/assets/js/user.js', 'public/js')
//     .sass('resources/assets/sass/user.scss', 'public/css');

//mix.disableNotifications();

//console.log(mix);
console.log("finish");