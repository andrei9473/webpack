const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		rep_log: './web/assets/js/rep_log.js',
		login: './web/assets/js/login',
		layout: './web/assets/js/layout',
	},
	output: {
		path: path.resolve(__dirname, 'web', 'build'),
		filename: '[name].js',
		publicPath: '/build/'

	},
	module: {
		rules: [
			{
				test:  /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
					}
				}

			},
			
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				]
			},

			{
				test: /\.(svg|png|jpg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name]-[hash:6].[ext]'
					}
				}
			},

			{
				test: /\.(woff|woff2|ttf|eot|otf)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name]-[hash:6].[ext]'
					}
				}
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
		})
	]
}