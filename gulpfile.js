var gulp    = require('gulp'),
	sass    = require('gulp-sass'),
	concat  = require('gulp-concat'),
	uglify  	 = require('gulp-uglifyjs'),
	cssnano 	 = require('gulp-cssnano'),
	rename  	 = require('gulp-rename'),
	del     	 = require('del'),
	imagemin 	 = require('gulp-imagemin'),
	pngquant 	 = require('imagemin-pngquant'),
	cache 		 = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
	return gulp.src('app/sass/*.scss')
	.pipe(sass())
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
	.pipe(gulp.dest('app/css'));
});

gulp.task('scripts', function(){
	return gulp.src([
		'app/libs/bootstrap.min.js',
		'app/libs/wow.min.js',
		'app/libs/owl.carousel.min.js'
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', ['sass'], function(){
	return gulp.src('app/css/libs.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('watch', ['css-libs', 'scripts'], function(){
	gulp.watch('app/sass/*.scss', ['sass']);
});


gulp.task('clean', function(){
	return del.sync('dist');
});

gulp.task('clear', function(){
	return cache.clearAll();
});

gulp.task('img', function(){
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin({
		interlaced:true,
		progressive: true,
		svgoplugind:[{removeViewBox:false}],
		use:[pngquant()]
	})))
	.pipe(gulp.dest('dist/img'));
});


gulp.task('build',['clean', 'img', 'sass', 'scripts'], function(){
	var buildCss = gulp.src([
		'app/css/libs.min.css',
		'app/css/main.css'
	])
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*')
	.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*html')
	.pipe(gulp.dest('dist'));
});