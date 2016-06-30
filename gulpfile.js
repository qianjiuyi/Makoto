var gulp = require("gulp"),
	webpack = require("gulp-webpack");
	webpackConfig = require("./webpack.config.js");
	
gulp.task("build",function(){
	gulp.src("./main.js").
	pipe(webpack(Object.create(webpackConfig))).
	pipe(gulp.dest("./build/"));
});

//服务器自动重启
var server = require("gulp-webserver");

gulp.task("server",function(){
	gulp.src("./").pipe(server({
		livereload:true,
		directoryListing:true,
		open:true
	}));
});

//文件变更 build任务自动执行  broswer  auto  refresh
gulp.task("watch",function(){
	gulp.watch("./cde.less",["build"]);
});

gulp.task("default",["build","watch","server"]);
