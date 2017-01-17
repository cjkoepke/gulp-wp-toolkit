'use strict';

var gulp = require('gulp'),
    config = require('../../config'),
    plumber = require('gulp-plumber'),
    sourcemap = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    normalize = require('node-normalize-scss').includePaths,
    bourbon = require('node-bourbon').includePaths,
    neat = require('node-neat').includePaths,
    postcss = require('gulp-postcss'),
    mqpacker = require('css-mqpacker'),
    autoprefix = require('autoprefixer'),
    pxtorem = require('postcss-pxtorem'),
    cssnano = require('cssnano'),
    banner = require('gulp-banner'),
    notify = require('gulp-notify');

module.exports = function () {

    var themeHeader = '/*\n' +
        ' * Theme Name: <%= config.theme.name %>\n' +
        ' * Theme URI: <%= config.theme.homepage %>\n' +
        ' * Description: <%= config.theme.description %>\n' +
        ' * Author: <%= config.theme.author %>\n' +
        ' * Version: <%= config.theme.version %>\n' +
        ' * License: <%= config.theme.license %>\n' +
        ' * Text Domain: <%= config.theme.textdomain %>\n' +
        ' * Template: <%= config.theme.template %>\n' +
        ' */\n\n';

    var postProcessors = [
        mqpacker({
            sort: true
        }),
        autoprefix(),
        pxtorem({
            root_value: 16,
            replace: false,
            media_query: true
        }),
        cssnano()
    ];

    // Don't minify if expanded CSS is desired.
    if ( 'expanded' === config.css.outputStyle ) {
        postProcessors.pop();
    }

    return gulp
        .src(config.src.css)
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass.sync({
            outputStyle: config.css.outputStyle,
            includePaths: [].concat(bourbon, neat, normalize)
        }))
        .pipe(postcss(postProcessors))
        .pipe(banner(themeHeader, {
            config: config
        }))
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest(config.dest.css))
        .pipe(notify({message: config.messages.css}));
};
