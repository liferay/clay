/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {cleanup, render} from '@testing-library/react';
import React from 'react';

import ClayCheckbox from '../Checkbox';

describe('ClayCheckbox', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(
			<ClayCheckbox checked={false} onChange={() => {}} />
		);

		expect(container).toMatchSnapshot();
	});

	it('renders with a label', () => {
		const {container} = render(
			<ClayCheckbox
				checked={false}
				label="Unchecked"
				onChange={() => {}}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders as checked', () => {
		const {container} = render(
			<ClayCheckbox checked label="Checked" onChange={() => {}} />
		);

		expect(container).toMatchSnapshot();
	});

	it('renders with an indeterminate value', () => {
		const {container} = render(
			<ClayCheckbox
				checked
				indeterminate
				label="Indeterminate"
				onChange={() => {}}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders as disabled', () => {
		const {container} = render(
			<ClayCheckbox
				checked={false}
				disabled
				label="Unchecked disabled"
				onChange={() => {}}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders as checked and disabled', () => {
		const {container} = render(
			<ClayCheckbox
				checked
				disabled
				label="Checked disabled"
				onChange={() => {}}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders with an indeterminate value and disabled', () => {
		const {container} = render(
			<ClayCheckbox
				checked
				disabled
				indeterminate
				label="Indeterminate disabled"
				onChange={() => {}}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('render as read only', () => {
		const {container} = render(
			<ClayCheckbox checked label="Indeterminate disabled" readOnly />
		);

		expect(container).toMatchSnapshot();
	});
});
