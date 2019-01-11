const path = require('path');
const webpack = require('webpack');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		rep_log: './assets/js/rep_log.js',
		login: './assets/js/login',
		layout: './assets/js/layout',
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
				test: /\.scss$/,
				use: [
				{
					loader:	'style-loader',
					options: {
						sourceMap: true
					}
				},

		        {	
		        	loader: 'css-loader',
		        	options: {
		        		sourceMap: true
		        	}
		      	},

		    	{
		        	loader: 'sass-loader',
		        	options: {
		        		sourceMap: true
		        	}
		      	}

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
			'window.jQuery': 'jquery',
		}),

		new copyWebpackPlugin([
			{
				from: './assets/static',
				to: 'static'
			}
		])
	],

	devtool: 'inline-source-map'
}