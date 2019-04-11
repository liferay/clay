/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import Button from '@clayui/button';
import ClayModal from '../ClayModal';
import ReactDOM from 'react-dom';

const spritemap = 'icons.svg';

describe('ClayModal', () => {
	beforeAll(() => {
		// @ts-ignore
		jest.spyOn(global.console, 'error').mockImplementation(() => {});
		// @ts-ignore
		ReactDOM.createPortal = jest.fn((element, node) => {
			return element;
		});
	});

	afterEach(() => {
		// @ts-ignore
		ReactDOM.createPortal.mockClear();
		// @ts-ignore
		// eslint-disable-next-line no-console
		console.error.mockClear();
	});

	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayModal
				onClose={() => {}}
				spritemap={spritemap}
				visible={false}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('should renders with visible `true`', () => {
		const testRenderer = TestRenderer.create(
			<ClayModal
				onClose={() => {}}
				spritemap={spritemap}
				visible
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('should renders with title', () => {
		const testRenderer = TestRenderer.create(
			<ClayModal
				onClose={() => {}}
				spritemap={spritemap}
				title="Foo"
				visible={false}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('should renders with size', () => {
		const testRenderer = TestRenderer.create(
			<ClayModal
				onClose={() => {}}
				size="lg"
				spritemap={spritemap}
				visible={false}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('should renders with status', () => {
		const testRenderer = TestRenderer.create(
			<ClayModal
				onClose={() => {}}
				spritemap={spritemap}
				status="success"
				visible={false}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('should renders with url', () => {
		const testRenderer = TestRenderer.create(
			<ClayModal
				onClose={() => {}}
				spritemap={spritemap}
				url="http://localhost"
				visible={false}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('should renders with one element in renderFooter', () => {
		const testRenderer = TestRenderer.create(
			<ClayModal
				onClose={() => {}}
				renderFooter={
					<ClayModal.FooterContainer>
						<Button>{'Bar'}</Button>
					</ClayModal.FooterContainer>
				}
				spritemap={spritemap}
				url="http://localhost"
				visible={false}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('should renders with two element in renderFooter', () => {
		const testRenderer = TestRenderer.create(
			<ClayModal
				onClose={() => {}}
				renderFooter={
					<>
						<ClayModal.FooterContainer>
							<Button>{'Bar'}</Button>
						</ClayModal.FooterContainer>
						<ClayModal.FooterContainer>
							<Button>{'Baz'}</Button>
						</ClayModal.FooterContainer>
					</>
				}
				spritemap={spritemap}
				url="http://localhost"
				visible={false}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('should render but emit error when wrapping FooterContainer with HTML tag', () => {
		const testRenderer = TestRenderer.create(
			<ClayModal
				onClose={() => {}}
				renderFooter={
					<div>
						<ClayModal.FooterContainer>
							<Button>{'Bar'}</Button>
						</ClayModal.FooterContainer>
					</div>
				}
				spritemap={spritemap}
				url="http://localhost"
				visible={false}
			/>
		);

		// eslint-disable-next-line no-console
		expect(console.error).toBeCalled();
	});

	it('should render but emit error when using more than two <FooterContainer /> components', () => {
		const testRenderer = TestRenderer.create(
			<ClayModal
				onClose={() => {}}
				renderFooter={
					<>
						<ClayModal.FooterContainer>
							<Button>{'Foo'}</Button>
						</ClayModal.FooterContainer>
						<ClayModal.FooterContainer>
							<Button>{'Bar'}</Button>
						</ClayModal.FooterContainer>
						<ClayModal.FooterContainer>
							<Button>{'Baz'}</Button>
						</ClayModal.FooterContainer>
					</>
				}
				spritemap={spritemap}
				url="http://localhost"
				visible={false}
			/>
		);

		// eslint-disable-next-line no-console
		expect(console.error).toBeCalled();
	});
});
