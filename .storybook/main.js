const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
	addons: [
		{
			name: '@storybook/addon-storysource',
			options: {
				rule: {
					test: /stories\/.*\.tsx$/,
				},
				loaderOptions: {
					parser: 'typescript',
				},
			},
		},

		'@storybook/addon-a11y/register',
		'@storybook/addon-knobs/register',
	],
	webpackFinal: config => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			loader: require.resolve('babel-loader'),
		});

		config.module.rules.push({
			test: /\.scss$/,
			use: [
				require.resolve('style-loader'),
				require.resolve('css-loader'),
				require.resolve('sass-loader'),
			],
		});

		config.resolve.mainFields = ['ts:main', 'module', 'main'];

		config.resolve.extensions.push('.ts', '.tsx');

		config.plugins.push(
			new ForkTsCheckerWebpackPlugin({
				reportFiles: ['packages/**/*.{ts,tsx}'],
			})
		);

		return config;
	},
};
