let project_folder = "dist";
let source_folder = "src";

let path = {
	build: {
		html: project_folder + "/",
		css: project_folder + "/css/",
		js: project_folder + "/js/",
		img: project_folder + "/img/",
		fonts: project_folder + "/fonts/",
	},
	src: {
		html: [source_folder + "/*.html", "!" + source_folder + "_/*.html"],
		css: source_folder + "/scss/main.scss",
		js: source_folder + "/js/script.js",
		img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
		fonts: source_folder + "/fonts/*.ttf",
	},
	watch: {
		html: source_folder + "/**/*.html",
		css: source_folder + "/scss/**/*.scss",
		js: source_folder + "/js/**/*.js",
		img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
	},
	clean: "./" + project_folder + "/"
}

let { src, dest } = require('gulp'),
	gulp = require('gulp'),
	browsersync = require('browser-sync').create(),
	fileinclude = require("gulp-file-include"),
	del = require("del"),
	scss = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	group_media = require("gulp-group-css-media-queries"),
	clean_css = require("gulp-clean-css"),
	rename = require("gulp-rename"),
	uglify = require("gulp-uglify-es").default,
	babel = require("gulp-babel"),
	imagemin = require("gulp-imagemin"),
	webp = require("gulp-webp"),
	// webphtml = require("gulp-webp-html");
	// webpcss = require("gulp-webpcss"),
	// webp_converter = require("webp-converter");
	svgSprite = require("gulp-svg-sprite"),
	ttf2woff = require("gulp-ttf2woff"),
	ttf2woff2 = require("gulp-ttf2woff2"),
	fonter = require("gulp-fonter");




function browserSync(params) {
	browsersync.init({
		server: {
			baseDir: project_folder + "/"
		},
		port: 3000,
		notify: false
	})
}

function html() {
	return src(path.src.html)
		.pipe(fileinclude())
		// .pipe(webphtml())
		.pipe(dest(path.build.html))
		.pipe(browsersync.stream())
}

function css() {
	return src(path.src.css)
		.pipe(
			scss({
				outputStyle: "expanded"
			})
		)
		.pipe(
			group_media()
		)
		.pipe(
			autoprefixer({
				overrideBrowserslist: ["last 5 versions"],
				cascade: true
			})
		)
		// .pipe(webpcss())
		.pipe(dest(path.build.css))
		.pipe(clean_css())
		.pipe(
			rename({
				extname: ".min.css"
			})
		)
		.pipe(dest(path.build.css))
		.pipe(browsersync.stream());

}

function js() {
	return src(path.src.js)
		.pipe(fileinclude())
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(dest(path.build.js))
		.pipe(
			uglify()
		)
		.pipe(
			rename({
				extname: ".min.js"
			})
		)
		.pipe(dest(path.build.js))
		.pipe(browsersync.stream());

}

function images() {
	return src(path.src.img)
		.pipe(
			webp({
				quality: 70
			})
		)
		.pipe(dest(path.build.img))
		.pipe(src(path.src.img))
		.pipe(
			imagemin({
				progressive: true,
				svgoPlugins: [{ removeViewBox: false }],
				interlaced: true,
				optimizationLevel: 3 // 0 to 7
			})
		)
		.pipe(dest(path.build.img))
		.pipe(browsersync.stream());

}

function fonts() {
	src(path.src.fonts)
		.pipe(ttf2woff())
		.pipe(dest(path.build.fonts));
	return src(path.src.fonts)
		.pipe(ttf2woff2())
		.pipe(dest(path.build.fonts));
}

gulp.task('otf2ttf', function () {
	return gulp.src([source_folder + '/fonts/*.otf'])
		.pipe(fonter({
			formats: ['ttf']
		}))
		.pipe(dest(source_folder + '/fonts/'));
})

// gulp.task('svgSprite', function () {
// 	return gulp.src([source_folder + '/sprite/*.svg'])
// 		.pipe(svgSprite({
// 			mode: {
// 				stack: {
// 					sprite: "../sprite/sprite.svg",
// 					// example: true
// 				}
// 			},
// 		}
// 		))
// 		.pipe(dest(path.build.img))
// })

const sprite = () => {
	return src([source_folder + '/sprite/*.svg'])
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: "../sprite/sprite.svg",
					// example: true
				}
			},
		}
		))
		.pipe(dest(path.build.img))
}

function vendorJS() {
	const modules = [
		'node_modules/swiper/swiper-bundle.min.js',
		'node_modules/swiper/swiper-bundle.min.js.map',
	];

	return src(modules)
		.pipe(dest(path.build.js));
};

function vendorCSS() {
	const modules = [
		'node_modules/swiper/swiper-bundle.min.css',
	];

	return src(modules)
		.pipe(dest(path.build.css));
};

function watchFiles() {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.css], css);
	gulp.watch([path.watch.js], js);
	gulp.watch([path.watch.img], images);
}

function clean() {
	return del(path.clean);
}


let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts, vendorJS, vendorCSS, sprite));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.sprite = sprite;
exports.vendorCSS = vendorCSS;
exports.vendvendorJS =vendorJS;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;