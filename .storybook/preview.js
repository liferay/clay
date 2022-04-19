import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import React from 'react';
import {Provider} from '@clayui/provider';

export const decorators = [
	(Story) => (
		<Provider spritemap={spritemap}>
			<div>
				<Story />
			</div>
		</Provider>
	),
];

export const parameters = {
	options: {
		storySort: {
			order: ['Design System', ['Application', 'Components', 'Charts']],
		},
	},
};
