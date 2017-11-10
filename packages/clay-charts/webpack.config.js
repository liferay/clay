const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		charts: './src/charts.js',
		'charts-jsx': './src/jsx/charts.js',
		styles: './src/scss/main.scss'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					compact: false,
					presets: ['babel-preset-es2015'],
					plugins: ['babel-plugin-transform-node-env-inline']
				}
			}
		}, {
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader']
			})
		}]
	},
	devtool: 'cheap-module-source-map',
	output: {
		library: 'metal',
		libraryTarget: 'this',
		filename: './build/globals/metal-[name].js'
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		new ExtractTextPlugin('./build/metal-charts.css'),
	]
};
