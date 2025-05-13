import {Directory, isDirectory, isFile, withSchema} from 'renoun/file-system';

const PATHS = [
	'core',
	'alert',
	'form',
	'autocomplete',
	'badge',
	'breadcrumb',
	'button',
	'card',
	'color-picker',
	'data-provider',
	'date-picker',
	'drop-down',
	'empty-state',
	'icon',
	'label',
	'layout',
	'link',
	'list',
	'loading-indicator',
	'localized-input',
	'management-toolbar',
	'modal',
	'multi-select',
	'multi-step-nav',
	'nav',
	'navigation-bar',
	'pagination',
	'pagination-bar',
	'panel',
	'popover',
	'progress-bar',
	'provider',
	'slider',
	'sticker',
	'table',
	'tabs',
	'time-picker',
	'toolbar',
	'tooltip',
	'upper-toolbar',
];

type ComponentSchema = Record<string, React.ComponentType>;

export const ComponentsCollection = new Directory({
	path: '../packages/clay-icon/src',
	tsConfigPath: '../packages/tsconfig.json',
	loaders: {
		ts: withSchema<ComponentSchema>(
			(path) => import(`../../packages/clay-icon/src/${path}.ts`)
		),
		tsx: withSchema<ComponentSchema>(
			(path) => import(`../../packages/clay-icon/src/${path}.tsx`)
		),
	},
	include: (entry) => {
		if (isFile(entry, ['ts', 'tsx'])) {
			const path = entry.getPath();

			return PATHS.some((item) => path.includes(item));
		}

		return isDirectory(entry);
	},
});
