import {cleanup, render} from '@testing-library/react';
import React from 'react';
import <%= componentName %> from '..';

describe('<%= componentName %>', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(
			<<%= componentName %> />
		);

		expect(container).toMatchSnapshot();
	});
});
