(async () => {
	try {
		if (process.env.NODE_ENV === 'development') {
			await import('@clayui/css/src/scss/atlas.scss');
		}
		else {
			await import('@clayui/css/lib/css/atlas.css');
		}
	}
	catch (error) {
		console.error(`${error.name}: ${error.message}`);
	}
})();

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
