import type {StorybookConfig} from '@storybook/core-common';

const config: StorybookConfig = {
	stories: ['../packages/*/stories/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		{
			name: '@storybook/addon-essentials',
			options: {
				docs: false,
			},
		},
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

		'@storybook/addon-a11y',
		'@storybook/preset-scss',
	],
	typescript: {
		reactDocgen: false,
	},
	framework: '@storybook/react',
	core: {
		builder: 'webpack5',
	},
	features: {
		storyStoreV7: true,
		postcss: false,
	},
};

module.exports = config;
