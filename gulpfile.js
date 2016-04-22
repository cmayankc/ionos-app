var gulp 			= require('gulp');
var ngtemplatecache = require('gulp-angular-templatecache');
var uglify          = require('gulp-uglify');
var concat          = require('gulp-concat');   
var clean           = require('gulp-clean');  
var rename          = require('gulp-rename');
var minifyCSS       = require('gulp-minify-css');
var jshint          = require('gulp-jshint');
var jshint_stylish  = require('jshint-stylish');
var sourcemaps 		= require('gulp-sourcemaps');

var src 	= './app/'
var dest 	= './dist/';

var distributionPaths = {
	app 		: dest + 'app/',
	scripts 	: dest + 'app/scripts/',
	stylesheets : dest + 'app/stylesheets/',
	images 		: dest + 'app/images/',
	fonts 		: dest + 'app/fonts/'
};

gulp.task('clean', function() {
	return gulp.src(dest, {read: false})
			.pipe(clean())
});

gulp.task('lint', ['clean'], function() {
	return gulp.src(src + 'js/**/*.js')
    		.pipe(jshint('.jshintrc'))
    		.pipe(jshint.reporter(jshint_stylish))
});

gulp.task('scripts', ['clean', 'lint'], function() {
	return gulp.src([
	    	'bower_components/jquery/dist/jquery.min.js',
	    	'bower_components/bootstrap/dist/js/bootstrap.min.js',
	    	'bower_components/angular/angular.min.js',
	    	'bower_components/angular-ui-router/release/angular-ui-router.min.js',
	    	src + 'js/**/*.js'
    	])
        .pipe(concat('app.js'))
        .pipe(gulp.dest(distributionPaths.scripts))
        .pipe(uglify({compress: true}))
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest(distributionPaths.scripts))
});

gulp.task('styles', ['clean', 'lint'], function() {
	return gulp.src([
    		'bower_components/bootstrap/dist/css/bootstrap.min.css', 
    		src + 'css/**/*.css'
    	])
        .pipe(concat('app.css'))
        .pipe(gulp.dest(distributionPaths.stylesheets))
        .pipe(minifyCSS())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest(distributionPaths.stylesheets))
})

gulp.task('ngTemplates', ['clean', 'lint'], function() {
	return gulp.src([
				src + 'js/**/*.html'
			])
			.pipe(ngtemplatecache( { filename: 'templates.js', root: 'js', module: 'ionos-app' } ))
			.pipe(gulp.dest(distributionPaths.scripts))
			.pipe(uglify({compress: true}))
			.pipe(rename('templates.min.js'))
			.pipe(gulp.dest(distributionPaths.scripts))
});

gulp.task('copy', ['clean', 'lint'], function() {
	return gulp.src([
				src + 'fonts',
				src + 'img'
			])
			.pipe(gulp.dest(distributionPaths.app))
});

gulp.task('render', ['clean', 'lint'], function() {
	return gulp.src([src + 'index.prod.html'])
			.pipe(rename('index.html'))
			.pipe(gulp.dest(distributionPaths.app))
});

// The default task (called when you run 'gulp' from cli)
gulp.task('default', ['clean', 'lint', 'scripts', 'styles', 'ngTemplates', 'copy', 'render']);