const path = require('path');

const config = {
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
	webpackFinal: (config) => {
		config.resolve.mainFields = ['ts:main', ...config.resolve.mainFields];

		config.resolve.alias = {
			'@clayui/alert': path.resolve(
				__dirname,
				'../packages/clay-alert/src'
			),
			'@clayui/autocomplete': path.resolve(
				__dirname,
				'../packages/clay-autocomplete/src'
			),
			'@clayui/badge': path.resolve(
				__dirname,
				'../packages/clay-badge/src'
			),
			'@clayui/breadcrumb': path.resolve(
				__dirname,
				'../packages/clay-breadcrumb/src'
			),
			'@clayui/button': path.resolve(
				__dirname,
				'../packages/clay-button/src'
			),
			'@clayui/card': path.resolve(
				__dirname,
				'../packages/clay-card/src'
			),
			'@clayui/charts': path.resolve(
				__dirname,
				'../packages/clay-charts/src'
			),
			'@clayui/color-picker': path.resolve(
				__dirname,
				'../packages/clay-color-picker/src'
			),
			'@clayui/core': path.resolve(
				__dirname,
				'../packages/clay-core/src'
			),
			'@clayui/data-provider': path.resolve(
				__dirname,
				'../packages/clay-data-provider/src'
			),
			'@clayui/date-picker': path.resolve(
				__dirname,
				'../packages/clay-date-picker/src'
			),
			'@clayui/drop-down': path.resolve(
				__dirname,
				'../packages/clay-drop-down/src'
			),
			'@clayui/empty-state': path.resolve(
				__dirname,
				'../packages/clay-empty-state/src'
			),
			'@clayui/form': path.resolve(
				__dirname,
				'../packages/clay-form/src'
			),
			'@clayui/icon': path.resolve(
				__dirname,
				'../packages/clay-icon/src'
			),
			'@clayui/label': path.resolve(
				__dirname,
				'../packages/clay-label/src'
			),
			'@clayui/layout': path.resolve(
				__dirname,
				'../packages/clay-layout/src'
			),
			'@clayui/link': path.resolve(
				__dirname,
				'../packages/clay-link/src'
			),
			'@clayui/list': path.resolve(
				__dirname,
				'../packages/clay-list/src'
			),
			'@clayui/loading-indicator': path.resolve(
				__dirname,
				'../packages/clay-loading-indicator/src'
			),
			'@clayui/localized-input': path.resolve(
				__dirname,
				'../packages/clay-localized-input/src'
			),
			'@clayui/management-toolbar': path.resolve(
				__dirname,
				'../packages/clay-management-toolbar/src'
			),
			'@clayui/modal': path.resolve(
				__dirname,
				'../packages/clay-modal/src'
			),
			'@clayui/multi-select': path.resolve(
				__dirname,
				'../packages/clay-multi-select/src'
			),
			'@clayui/multi-step-nav': path.resolve(
				__dirname,
				'../packages/clay-multi-step-nav/src'
			),
			'@clayui/nav': path.resolve(__dirname, '../packages/clay-nav/src'),
			'@clayui/navigation-bar': path.resolve(
				__dirname,
				'../packages/clay-navigation-bar/src'
			),
			'@clayui/pagination': path.resolve(
				__dirname,
				'../packages/clay-pagination/src'
			),
			'@clayui/pagination-bar': path.resolve(
				__dirname,
				'../packages/clay-pagination-bar/src'
			),
			'@clayui/panel': path.resolve(
				__dirname,
				'../packages/clay-panel/src'
			),
			'@clayui/popover': path.resolve(
				__dirname,
				'../packages/clay-popover/src'
			),
			'@clayui/progress-bar': path.resolve(
				__dirname,
				'../packages/clay-progress-bar/src'
			),
			'@clayui/provider': path.resolve(
				__dirname,
				'../packages/clay-provider/src'
			),
			'@clayui/shared': path.resolve(
				__dirname,
				'../packages/clay-shared/src'
			),
			'@clayui/slider': path.resolve(
				__dirname,
				'../packages/clay-slider/src'
			),
			'@clayui/sticker': path.resolve(
				__dirname,
				'../packages/clay-sticker/src'
			),
			'@clayui/table': path.resolve(
				__dirname,
				'../packages/clay-table/src'
			),
			'@clayui/tabs': path.resolve(
				__dirname,
				'../packages/clay-tabs/src'
			),
			'@clayui/time-picker': path.resolve(
				__dirname,
				'../packages/clay-time-picker/src'
			),
			'@clayui/toolbar': path.resolve(
				__dirname,
				'../packages/clay-toolbar/src'
			),
			'@clayui/tooltip': path.resolve(
				__dirname,
				'../packages/clay-tooltip/src'
			),
			'@clayui/upper-toolbar': path.resolve(
				__dirname,
				'../packages/clay-upper-toolbar/src'
			),
		};

		return config;
	},
};

module.exports = config;
