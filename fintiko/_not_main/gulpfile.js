
import gulp from 'gulp';
import sass from 'gulp-sass';
import sassModule from 'sass';

const gulpSass = sass(sassModule);


import imagemin from 'gulp-imagemin';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import axis from 'axis';
import cssnano from 'gulp-cssnano';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import babel from 'gulp-babel';
import pug from 'gulp-pug';
import eslint from 'gulp-eslint';
import browserSync from 'browser-sync';
import htmlmin from 'gulp-htmlmin';

gulp.task('serve', function () {

	browserSync.init({
		server: {
			baseDir: "../"
		},
		port: 8080,
		notify: true
	});

	gulp.watch("../frontend/pug/*.pug", gulp.series('pug'));
	gulp.watch("../frontend/scss/**/*.scss", gulp.series('sass'));
	gulp.watch("../frontend/js/*.js", gulp.series('js'));
});


gulp.task('pug', function () {
	return gulp.src('../frontend/pug/*.pug')
		.pipe(pug({ pretty: false }))
		.pipe(gulp.dest('../'))
		.pipe(browserSync.stream());
});

gulp.task('sass', function () {
	return gulp.src('../frontend/scss/main.scss')
		.pipe(gulpSass({ use: [axis()] }))
		.pipe(cssnano())
		.pipe(autoprefixer(
			['> 0.5%', 'last 2 versions', "ie >= 9", 'Firefox >= 3'],
			{ cascade: true, add: true }
		))
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('../public/css/'))
		.pipe(browserSync.stream());
});

gulp.task('js', function () {
	return gulp.src('../frontend/js/*.js')
		.pipe(concat('main.min.js'))
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('../public/js/'))
		.pipe(browserSync.stream());
});


gulp.task('images', function () {
	return gulp.src('../frontend/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('../public/images/'));
});


gulp.task('lint', gulp.series('js', function () {
	return gulp.src('../frontend/js/*.js')
		.pipe(eslint({ configFile: './eslintrc.js' }))
		.pipe(eslint.format())
		.pipe(eslint.results(results => {
			// Called once for all ESLint results.
			console.log(`Total Results: ${results.length}`);
			console.log(`Total Warnings: ${results.warningCount}`);
			console.log(`Total Errors: ${results.errorCount}`);
		}))
		.pipe(eslint.failOnError());
}));

gulp.task('prod', gulp.series('lint'));

gulp.task('default', gulp.series('pug', 'sass', 'js', 'images', 'serve'));
