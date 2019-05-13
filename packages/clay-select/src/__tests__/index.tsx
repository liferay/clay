/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClaySelect from '..';

const options = [
	{
		label: 'Option 1',
		value: '1'
	},
	{
		label: 'Option 2',
		value: '2'
	},
	{
		label: 'Option 3',
		value: '3'
	}
];

describe('Rendering', () => {
	it('with required attributes', () => {
		const testRenderer = TestRenderer.create(
			<ClaySelect 
				label='Select Label'
				options={options}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('with container properties', () => {
		const testRenderer = TestRenderer.create(
			<ClaySelect 
				containerProps={{
					className:"customContainerClassName"
				}}
				label='Select Label'
				options={options}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('with id', () => {
		const testRenderer = TestRenderer.create(
			<ClaySelect 
				id="mySelectId"
				label='Select Label'
				options={options}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('with name', () => {
		const testRenderer = TestRenderer.create(
			<ClaySelect 
				label='Select Label'
				name="mySelectName"
				options={options}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('disabled', () => {
		const testRenderer = TestRenderer.create(
			<ClaySelect 
				disabled
				label='Select Label'
				options={options}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('with multiple options allowed', () => {
		const testRenderer = TestRenderer.create(
			<ClaySelect 
				label='Select Label'
				multiple
				options={options}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('inline', () => {
		const testRenderer = TestRenderer.create(
			<ClaySelect 
				inline={true}
				label='Select Label'
				options={options}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
