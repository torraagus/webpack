const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",

	entry: path.resolve(__dirname, "src", "index.js"),

	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.ico$/,
				loader: "file-loader",
				options: {
					name: "[name].[ext]",
				},
			},
			{
				test: /\.(png|jpe?g|svg|gif)$/,
				loader: "file-loader",
				options: {
					name: "[name].[ext]",
					outputPath: "images",
					publicPath: "/images",
				},
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)$/,
				loader: "file-loader",
				options: {
					name: "[name].[ext]",
					outputPath: "fonts",
					publicPath: "/fonts",
				},
			},
			{
				test: /\.(css|sass|scss)$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "styles.css",
		}),
	],

	devServer: {
		port: 3000,
		contentBase: path.resolve(__dirname, "src"),
		// proxy: {
		// 	"/**": {
		//         target: "/index.html",
		//         secure: false,
		// 		bypass(req) {
		// 			if (req.headers.accept.indexOf("html") !== -1) {
		// 				return "/index.html";
		// 			}
		// 			return;
		// 		},
		// 	},
		// },
	},

	devtool: "source-map",
};
