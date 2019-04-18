/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayRadioGroup from '..';

describe('ClayRadioGroup', () => {
	it('renders with options', () => {
		const testRenderer = TestRenderer.create(
			<ClayRadioGroup
				onSelectedValueChange={() => {}}
				selectedValue={'one'}
			>
				<ClayRadioGroup.Radio label="One" value="one" />
				<ClayRadioGroup.Radio label="Two" value="two" />
				<ClayRadioGroup.Radio label="Three" value="three" />
			</ClayRadioGroup>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
