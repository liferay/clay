/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as TestRenderer from 'react-test-renderer';
import Button from '@clayui/button';
import ClayModal from '..';
import React from 'react';
import ReactDOM from 'react-dom';

const spritemap = 'icons.svg';

describe('ClayModal', () => {
	beforeAll(() => {
		// @ts-ignore
		ReactDOM.createPortal = jest.fn(element => {
			return element;
		});
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayModal onClose={() => {}} spritemap={spritemap}>
				{onClose => (
					<>
						<ClayModal.Header>{'Foo'}</ClayModal.Header>
						<ClayModal.Body>
							<h1>{'Hello world!'}</h1>
						</ClayModal.Body>
						<ClayModal.Footer
							last={
								<Button onClick={onClose}>{'Primary'}</Button>
							}
						/>
					</>
				)}
			</ClayModal>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with Header', () => {
		const testRenderer = TestRenderer.create(
			<ClayModal onClose={() => {}} spritemap={spritemap}>
				{() => <ClayModal.Header>{'Foo'}</ClayModal.Header>}
			</ClayModal>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with size', () => {
		const testRenderer = TestRenderer.create(
			<ClayModal onClose={() => {}} size="lg" spritemap={spritemap} />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with status', () => {
		const testRenderer = TestRenderer.create(
			<ClayModal
				onClose={() => {}}
				spritemap={spritemap}
				status="success"
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders a body component with url', () => {
		const testRenderer = TestRenderer.create(
			<ClayModal onClose={() => {}} spritemap={spritemap}>
				{() => <ClayModal.Body url="http://localhost" />}
			</ClayModal>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders a footer component with buttons', () => {
		const testRenderer = TestRenderer.create(
			<ClayModal onClose={() => {}} spritemap={spritemap}>
				{onClose => (
					<ClayModal.Footer
						first={<Button>{'Bar'}</Button>}
						last={<Button onClick={onClose}>{'Foo'}</Button>}
						middle={<Button>{'Baz'}</Button>}
					/>
				)}
			</ClayModal>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
