/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as TestRenderer from 'react-test-renderer';
import ClayPanel from '..';
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';

describe('ClayPanel', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayPanel displayTitle="Display Title" spritemap="/foo/bar">
				<ClayPanel.Header>{'Header!'}</ClayPanel.Header>
				<ClayPanel.Body>{'Body!'}</ClayPanel.Body>
				<ClayPanel.Footer>{'Footer!'}</ClayPanel.Footer>
			</ClayPanel>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with different displayType', () => {
		const testRenderer = TestRenderer.create(
			<ClayPanel
				displayTitle="Display Title"
				displayType="secondary"
				spritemap="/foo/bar"
			>
				<ClayPanel.Header>{'Header!'}</ClayPanel.Header>
				<ClayPanel.Body>{'Body!'}</ClayPanel.Body>
				<ClayPanel.Footer>{'Footer!'}</ClayPanel.Footer>
			</ClayPanel>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with multiple panels', () => {
		const testRenderer = TestRenderer.create(
			<ClayPanel.Group>
				<ClayPanel displayTitle="Display Title" spritemap="/foo/bar">
					<ClayPanel.Body>{'Body!'}</ClayPanel.Body>
				</ClayPanel>

				<ClayPanel displayTitle="Display Title" spritemap="/foo/bar">
					<ClayPanel.Body>{'Body!'}</ClayPanel.Body>
				</ClayPanel>

				<ClayPanel
					collapsable
					displayTitle="Display Title"
					spritemap="/foo/bar"
				>
					<ClayPanel.Body>{'Body!'}</ClayPanel.Body>
				</ClayPanel>
			</ClayPanel.Group>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});

describe('ClayPanel Interactions', () => {
	afterEach(cleanup);

	it('clicking the title should expand and close the content', () => {
		const {container} = render(
			<ClayPanel
				collapsable
				displayTitle="Display Title"
				spritemap="/foo/bar"
			>
				<ClayPanel.Header>{'Header!'}</ClayPanel.Header>
				<ClayPanel.Body>{'Body!'}</ClayPanel.Body>
				<ClayPanel.Footer>{'Footer!'}</ClayPanel.Footer>
			</ClayPanel>
		);

		const closeButton = container.querySelector('.panel-header');

		expect(container.querySelector('.panel-collapse.show')).toBeFalsy();
		expect(
			container.querySelector('.panel-collapse.collapse')
		).toBeTruthy();

		fireEvent.click(closeButton as HTMLButtonElement, {});

		expect(
			container.querySelector('.panel-collapse.collapsing')
		).toBeTruthy();

		fireEvent.transitionEnd(
			container.querySelector(
				'.panel-collapse.collapsing'
			) as HTMLDivElement,
			{}
		);

		expect(
			container.querySelector('.panel-collapse.collapsing')
		).toBeFalsy();
		expect(container.querySelector('.panel-collapse.show')).toBeTruthy();

		fireEvent.click(closeButton as HTMLButtonElement, {});

		expect(
			container.querySelector('.panel-collapse.collapsing')
		).toBeTruthy();

		fireEvent.transitionEnd(
			container.querySelector(
				'.panel-collapse.collapsing'
			) as HTMLDivElement,
			{}
		);

		expect(container.querySelector('.panel-collapse.show')).toBeFalsy();
		expect(
			container.querySelector('.panel-collapse.collapse')
		).toBeTruthy();
	});
});
