//var etp = require("extract-text-webpack-plugin");
var htmlWebpackPlugin = require("html-webpack-plugin");
var extractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	plugins:[new htmlWebpackPlugin({
		template:"./index.html"
//	}),new extractTextPlugin("[hash]-bundle.css")],
	}),new extractTextPlugin("my-bundle.css")],
	entry:{
		main:"./main.js"
	},
	output:{
		path:"./dist/",
//		filename:"[hash]-bundle.js"
		filename:"my-bundle.js"
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:extractTextPlugin.extract("css")
			},
			{
				test:/\.html/,
				loader:"html"
			},
			{
				test:/\.(jpg|png|gif)$/,
				loader:"file-loader?name=img/[name].[ext]"
			}
//			{
//				test:/\.(css|less)$/,
//				loader:etp.extract("css!less")
//			},
//			{
//				test:/\.css$/,
//				loader:"style!css"
//			},
//			{
//				test:/\.less$/,
//				loader:"style!css!less?sourceMap"
//			}
		]
	},
	resolve:{
		extensions:["",".css"],
//		extensions:["",".js",".less"],//扩展名
		alias:{//别名
//			my:"./math_.js",
			introduceCss:"./introduce.css",
			swiperCss:"./swiper_animate/swiper.min.css",
			swiperAnimateCss:"./swiper_animate/animate.min.css",
			swiperJs:"./swiper_animate/swiper.min.js",			
			swiperAnimateJs:"./swiper_animate/swiper.animate1.0.2.min.js"
			
		}	
	}
}
