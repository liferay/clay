/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLabel from '..';
import {cleanup, fireEvent, render} from '@testing-library/react';
import * as TestRenderer from 'react-test-renderer';
import React from 'react';

const spritemap = 'path/to/spritemap';

describe('Rendering', () => {
	it('default', () => {
		const testRenderer = TestRenderer.create(
			<ClayLabel>{'Default Label'}</ClayLabel>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('with a different displayType ', () => {
		const testRenderer = TestRenderer.create(
			<ClayLabel displayType="success">{'Success Label'}</ClayLabel>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('as a link ', () => {
		const testRenderer = TestRenderer.create(
			<ClayLabel href="#/foo/bar">{'Label w/ link'}</ClayLabel>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as closable', () => {
		const testRenderer = TestRenderer.create(
			<ClayLabel
				closeButtonProps={{
					onClick: () => {},
				}}
				spritemap={spritemap}
			>
				{'Label Closable'}
			</ClayLabel>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as a link and closable ', () => {
		const testRenderer = TestRenderer.create(
			<ClayLabel
				closeButtonProps={{
					onClick: () => {},
				}}
				href="#/foo/bar"
				spritemap={spritemap}
			>
				{'Label Closable'}
			</ClayLabel>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});

describe('Interactions', () => {
	afterEach(cleanup);

	it('clicking the close button should call closeButtonProps.onClick', () => {
		const handleClose = jest.fn();

		const {container} = render(
			<ClayLabel
				closeButtonProps={{onClick: handleClose}}
				spritemap="foo/bar"
			/>
		);

		const closeButton = container.querySelector('button');

		fireEvent.click(closeButton as HTMLButtonElement, {});

		expect(handleClose).toHaveBeenCalledTimes(1);
	});
});
