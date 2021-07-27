// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use

const concat = require('gulp-concat');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
var log = require('fancy-log');

var scene = "scene-1";
var version = "0.01";
var stagingURL = "https://samvestbyclarke.com/build";


function replaceScene() {

	return src(['yml-templates/main-template.yml'])
	.pipe(replace(/{{scene}}/, function(s) {
      return scene;
  }))
	.pipe(rename('main.yml'))
	.pipe(dest('.github/workflows'));
	
}


function replaceVersion() {

	return src(['yml-templates/main-template.yml'])
	.pipe(replace(/{{version}}/, function(s) {
      return version;
  }))
	.pipe(rename('main.yml'))
	.pipe(dest('.github/workflows'))
	.on('end', function() { 
		log('##################################################################');
		log('.yml file generated.');
		log('URL for game is: ');
		log('' + stagingURL + "/" + scene + "/" + version + "/" );
		log('##################################################################');
    });
	
}


exports.config = series(
    replaceScene,
    replaceVersion
);