const webpack = require('webpack');

module.exports = {
	entry: {
		'charts': './src/charts.js',
		'charts-jsx': './src/jsx/charts.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						compact: false,
						presets: ['babel-preset-es2015'],
						plugins: ['babel-plugin-transform-node-env-inline'],
					},
				},
			},
		],
	},
	devtool: 'cheap-module-source-map',
	output: {
		library: 'metal',
		libraryTarget: 'this',
		filename: './build/globals/clay-[name].js',
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin()
	],
};
