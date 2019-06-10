module.exports = ({config}) => {
	config.module.rules.push({
		test: /stories\/.*\.tsx$/,
		loaders: [
			{
				loader: require.resolve('@storybook/addon-storysource/loader'),
				options: {parser: 'typescript'},
			},
		],
		enforce: 'pre',
	});

	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		use: [require.resolve('awesome-typescript-loader')],
	});
	config.resolve.extensions.push('.ts', '.tsx');
	return config;
};
