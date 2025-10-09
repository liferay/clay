import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import React, {useEffect} from 'react';
import svg4everybody from 'svg4everybody';
import {Provider} from '@clayui/provider';

export const decorators = [
	(Story) => {
		useEffect(() => {
			svg4everybody({
				polyfill: true,
			});
		}, []);

		return (
			<Provider spritemap={spritemap}>
				<div>
					<Story />
				</div>
			</Provider>
		);
	},
];

export const parameters = {
	options: {
		storySort: {
			order: ['Design System', ['Application', 'Components', 'Charts']],
		},
	},
};
