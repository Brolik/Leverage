const { dest, parallel, series, src, watch } = require('gulp');
const autoprefixer = require('autoprefixer');
const debug = require('gulp-debug');
const flatten = require('gulp-flatten');
const postcss = require('gulp-postcss');
const sass = require('gulp-dart-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

const outputPath = './dist';

const imageGlob = [
  './src/images/**/*.{gif,jpg,jpeg,svg}'
];

const sassGlob = [
  './src/components/**/*.{sass,scss}',
  './examples/**/*.{sass,scss}',
  './sass/**/*.{sass,scss}'
];

const globalJsGlob = [];

const site = {
  images: () => {
    return src(imageGlob)
      .pipe(flatten())
    .pipe(dest(`${outputPath}/images`))
  },
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
    watch(imageGlob, series(site.images));
    watch(sassGlob, series(site.sass));
  }
}

exports.default = series(parallel(site.images, site.sass), site.watcher);
