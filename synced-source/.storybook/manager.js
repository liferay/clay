import {addons} from '@storybook/addons';
import {create} from '@storybook/theming';

const clayTheme = create({
	base: 'light',
	brandTitle: 'Clay Storybook',
});

addons.setConfig({
	theme: clayTheme,
});
