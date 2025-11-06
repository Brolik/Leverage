const { dest, parallel, series, src, watch } = require('gulp');
const autoprefixer = require('autoprefixer');
const debug = require('gulp-debug');
const flatten = require('gulp-flatten');
const postcss = require('gulp-postcss');
const sass = require('gulp-dart-sass');
// Use the official Dart Sass JS implementation as the compiler to avoid
// legacy JS API usage. This keeps `gulp-dart-sass` while ensuring it calls
// into the modern `sass` package.
const dartSass = require('sass');
sass.compiler = dartSass;
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

const outputPath = './dist';

const imageGlob = [
  './src/images/**/*.{gif,jpg,jpeg,svg}'
];

const sassGlob = [
  './examples/**/*.{sass,scss}',
  './sass/**/*.{sass,scss}'
];

const globalJsGlob = [];

const site = {
  sass: () => {
    return src(sassGlob)
      .pipe(debug({ title: 'file:' }))
      .pipe(sourcemaps.init())
      .pipe(sass({
        outputStyle: 'expanded',
        includePaths: ['./sass', 'node_modules']
      })).on('error', sass.logError)
      .pipe(postcss([
        autoprefixer(),
      ]))
      .pipe(flatten())
      .pipe(sourcemaps.write('./maps'))
      .pipe(rename({
        suffix: '.min'
      }))
    .pipe(dest(`${outputPath}/css`))
  },
  watcher: () => {
    watch(sassGlob, series(site.sass));
  }
}

exports.default = series(parallel(site.sass), site.watcher);
