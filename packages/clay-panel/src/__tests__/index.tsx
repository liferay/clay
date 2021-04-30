/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayPanel from '..';
import {act, cleanup, fireEvent, render} from '@testing-library/react';
import React from 'react';

describe('ClayPanel', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(
			<ClayPanel displayTitle="Display Title" spritemap="/foo/bar">
				<ClayPanel.Header>{'Header!'}</ClayPanel.Header>
				<ClayPanel.Body>{'Body!'}</ClayPanel.Body>
				<ClayPanel.Footer>{'Footer!'}</ClayPanel.Footer>
			</ClayPanel>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders with different displayType', () => {
		const {container} = render(
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

		expect(container).toMatchSnapshot();
	});

	it('renders with multiple panels', () => {
		const {container} = render(
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

		expect(container).toMatchSnapshot();
	});

	it('renders with multiple small panels', () => {
		const {container} = render(
			<ClayPanel.Group small>
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

		expect(container.querySelector('.panel-group-sm')).toBeTruthy();
	});

	it('renders with custom displayTitle', () => {
		const {container} = render(
			<ClayPanel
				collapsable
				displayTitle={
					<ClayPanel.Title>
						<h3>{'Custom Panel Title'}</h3>
					</ClayPanel.Title>
				}
				displayType="secondary"
				showCollapseIcon
				spritemap="/foo/bar"
			>
				<ClayPanel.Header>{'Header!'}</ClayPanel.Header>
				<ClayPanel.Body>{'Body!'}</ClayPanel.Body>
				<ClayPanel.Footer>{'Footer!'}</ClayPanel.Footer>
			</ClayPanel>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders without displayTitle', () => {
		const {container} = render(
			<ClayPanel
				collapsable
				displayType="secondary"
				showCollapseIcon
				spritemap="/foo/bar"
			>
				<ClayPanel.Header>{'Header!'}</ClayPanel.Header>
				<ClayPanel.Body>{'Body!'}</ClayPanel.Body>
				<ClayPanel.Footer>{'Footer!'}</ClayPanel.Footer>
			</ClayPanel>
		);

		expect(container).toMatchSnapshot();
	});
});

describe('ClayPanel Interactions', () => {
	afterEach(cleanup);

	it('clicking the title should expand and close the content', () => {
		jest.useFakeTimers();
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

		act(() => {
			jest.runAllTimers();
		});

		expect(
			container.querySelector('.panel-collapse.collapsing')
		).toBeFalsy();
		expect(container.querySelector('.panel-collapse.show')).toBeTruthy();

		fireEvent.click(closeButton as HTMLButtonElement, {});

		expect(
			container.querySelector('.panel-collapse.collapsing')
		).toBeTruthy();

		act(() => {
			jest.runAllTimers();
		});

		expect(container.querySelector('.panel-collapse.show')).toBeFalsy();
		expect(
			container.querySelector('.panel-collapse.collapse')
		).toBeTruthy();
	});
});
