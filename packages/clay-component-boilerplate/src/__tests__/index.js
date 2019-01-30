import React from 'react';
import TestRenderer from 'react-test-renderer';
import ClayComponentBoilerplate from '../index';

describe('ClayComponentBoilerplate', function() {
	it('should render', () => {
		const testRenderer = TestRenderer.create(<ClayComponentBoilerplate />);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
