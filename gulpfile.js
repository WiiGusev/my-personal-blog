"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var server = require("browser-sync").create();
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var del = require("del");
var run = require("run-sequence");
/*
var babel = require("gulp-babel");
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
*/
gulp.task("clean", function() { //удаляет папку
  return del("product");
});

gulp.task("copy", function() { //копирует файлы из одной папки в другую
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
  //  "source/img/**",
    "source/js/**/*.js",
    "source/*.html"
  ], {
    base: "source/"
  })
  .pipe(gulp.dest("product"));
});

gulp.task("htmlcopy", function() { //копирует файлы из одной папки в другую
  return gulp.src([
    "source/*.html"
  ], {
    base: "source/"
  })
  .pipe(gulp.dest("product"));
});

gulp.task("cssedit", function() {
	gulp.src("source/css/*.css")
		.pipe(postcss([ // ставит префиксы
			autoprefixer()
			]))
		.pipe(gulp.dest("product/css/")) 
		.pipe(csso()) //минимизирует css
		.pipe(rename(function (path) {// переименование мин файла css
		    path.basename += "-min";
		    path.extname = ".css";
		  })) 
		.pipe(gulp.dest("product/css")) 
		.pipe(server.stream());
});

gulp.task("imagesmin", function () { //сжимает изображения
   return gulp.src("source/img/*.{jpg,png,svg}")
        .pipe(imagemin([
        	imagemin.optipng({optimizationLevel: 3}),
        	imagemin.jpegtran({progressive: true}),
        	imagemin.svgo()
        	]))
        .pipe(gulp.dest("product/img/"))
});

gulp.task("webp", function() { //переводит формат изображение в webp
	return gulp.src("source/img/*.{png,jpg}")
	.pipe(webp({quality: 90}))
	.pipe(gulp.dest("product/img"));
});


gulp.task("servecss", ["cssedit"], function() {
	server.init({
		server: "product/",
		notify: false,
		open: true,
		cors: true,
		ui: false,
	});

	gulp.watch("source/css/*.css", ["cssedit"]);
	gulp.watch("source/*.html", ["htmlcopy"]).on("change", server.reload);

});

	gulp.task("build", function (done) {
 	run("clean", "copy", "cssedit", "imagesmin", "webp", done);

});