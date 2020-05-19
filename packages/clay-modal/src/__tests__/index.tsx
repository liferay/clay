/*eslint no-console: 0 */
/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import ClayModal, {useModal} from '..';
import React from 'react';
import ReactDOM from 'react-dom';
import {act, cleanup, render} from '@testing-library/react';

const spritemap = 'icons.svg';

describe('ClayModal', () => {
	beforeAll(() => {
		// @ts-ignore
		ReactDOM.createPortal = jest.fn(element => {
			return element;
		});
		jest.useFakeTimers();
	});

	afterAll(() => {
		jest.useRealTimers();
	});

	afterEach(() => {
		jest.clearAllTimers();
		jest.restoreAllMocks();
		cleanup();
	});

	it('renders', () => {
		const ModalWithState = () => {
			const {observer, onClose} = useModal({onClose: () => {}});

			return (
				<ClayModal observer={observer} spritemap={spritemap}>
					<ClayModal.Header>{'Foo'}</ClayModal.Header>
					<ClayModal.Body>
						<h1>{'Hello world!'}</h1>
					</ClayModal.Body>
					<ClayModal.Footer
						last={<Button onClick={onClose}>{'Primary'}</Button>}
					/>
				</ClayModal>
			);
		};

		render(<ModalWithState />);

		act(() => {
			jest.runAllTimers();
		});

		expect(document.body).toMatchSnapshot();
	});

	it('renders with Header', () => {
		const ModalWithState = () => {
			const {observer} = useModal({onClose: () => {}});
			return (
				<ClayModal observer={observer} spritemap={spritemap}>
					<ClayModal.Header>{'Foo'}</ClayModal.Header>
				</ClayModal>
			);
		};

		render(<ModalWithState />);

		act(() => {
			jest.runAllTimers();
		});

		expect(document.body).toMatchSnapshot();
	});

	it('renders with size', () => {
		const ModalWithState = () => {
			const {observer} = useModal({onClose: () => {}});
			return (
				<ClayModal
					observer={observer}
					size="lg"
					spritemap={spritemap}
				/>
			);
		};

		render(<ModalWithState />);

		act(() => {
			jest.runAllTimers();
		});

		expect(document.body).toMatchSnapshot();
	});

	it('renders with status', () => {
		const ModalWithState = () => {
			const {observer} = useModal({onClose: () => {}});
			return (
				<ClayModal
					observer={observer}
					spritemap={spritemap}
					status="success"
				/>
			);
		};

		render(<ModalWithState />);

		act(() => {
			jest.runAllTimers();
		});

		expect(document.body).toMatchSnapshot();
	});

	it('renders a body component with url', () => {
		const ModalWithState = () => {
			const {observer} = useModal({onClose: () => {}});
			return (
				<ClayModal observer={observer} spritemap={spritemap}>
					<ClayModal.Body url="http://localhost" />
				</ClayModal>
			);
		};

		render(<ModalWithState />);

		act(() => {
			jest.runAllTimers();
		});

		expect(document.body).toMatchSnapshot();
	});

	it('renders a footer component with buttons', () => {
		const ModalWithState = () => {
			const {observer, onClose} = useModal({onClose: () => {}});
			return (
				<ClayModal observer={observer} spritemap={spritemap}>
					<ClayModal.Footer
						first={<Button>{'Bar'}</Button>}
						last={<Button onClick={onClose}>{'Foo'}</Button>}
						middle={<Button>{'Baz'}</Button>}
					/>
				</ClayModal>
			);
		};

		render(<ModalWithState />);

		act(() => {
			jest.runAllTimers();
		});

		expect(document.body).toMatchSnapshot();
	});
});
