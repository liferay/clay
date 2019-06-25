/*eslint no-console: 0 */
/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import ClayModal from '..';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {cleanup, fireEvent, render} from 'react-testing-library';

const spritemap = 'icons.svg';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	initialVisible?: boolean;
	children?: any;
}

const ModalWithState: React.FunctionComponent<IProps> = ({
	children,
	initialVisible = false,
	...props
}) => {
	const [visible, setVisible] = useState(initialVisible);

	return (
		<>
			{visible && (
				<ClayModal
					onClose={() => setVisible(false)}
					spritemap={spritemap}
					{...props}
				>
					{children}
				</ClayModal>
			)}
			<Button aria-label="button" onClick={() => setVisible(true)}>
				{'Foo'}
			</Button>
		</>
	);
};

describe('Modal -> IncrementalInteractions', () => {
	afterEach(() => {
		jest.clearAllTimers();

		cleanup();
	});

	// this is just a little hack to silence a warning that we'll get until react
	// fixes this: https://github.com/facebook/react/pull/14853
	// https://github.com/testing-library/react-testing-library/issues/281
	const originalError = console.error;
	beforeAll(() => {
		jest.useFakeTimers();

		// @ts-ignore
		ReactDOM.createPortal = jest.fn(element => {
			return element;
		});
		console.error = (...args: any) => {
			if (/Warning.*not wrapped in act/.test(args[0])) {
				return;
			}
			originalError.call(console, ...args);
		};
	});

	afterAll(() => {
		jest.useRealTimers();

		console.error = originalError;
	});

	it('open the modal', () => {
		const {container, getByLabelText} = render(<ModalWithState />);

		expect(document.body.classList).not.toContain('modal-open');

		fireEvent.click(getByLabelText('button'), {});

		expect(document.body.classList).toContain('modal-open');
		expect(
			container.querySelector('.modal-backdrop.fade.show')
		).toBeDefined();
		expect(
			container.querySelector('.fade.modal.d-block.show')
		).toBeDefined();
	});

	it('close the modal by clicking on the overlay', () => {
		render(<ModalWithState initialVisible />);

		jest.runAllTimers();

		const backdropElSelector = '.modal-backdrop.fade.show';
		const modalElSelector = '.fade.modal.d-block.show';

		const backdropEl = document.querySelector(backdropElSelector);
		const modalEl = document.querySelector(modalElSelector);

		expect(backdropEl).toBeDefined();
		expect(modalEl).toBeDefined();

		fireEvent.click(backdropEl!, {});

		expect(document.body.classList).not.toContain('modal-open');
		expect(document.querySelector(backdropElSelector)).toBeNull();
		expect(document.querySelector(modalElSelector)).toBeNull();
	});

	it('close the modal when pressing ESC', () => {
		const {container} = render(<ModalWithState initialVisible />);

		jest.runAllTimers();

		const backdropElSelector = '.modal-backdrop.fade.show';
		const modalElSelector = '.fade.modal.d-block.show';

		const backdropEl = document.querySelector(backdropElSelector);
		const modalEl = document.querySelector(modalElSelector);

		expect(backdropEl).toBeDefined();
		expect(modalEl).toBeDefined();

		fireEvent.keyUp(container, {keyCode: 27});

		expect(document.body.classList).not.toContain('modal-open');
		expect(document.querySelector(backdropElSelector)).toBeNull();
		expect(document.querySelector(modalElSelector)).toBeNull();
	});

	it('close the modal when clicking on the close button of the Header component', () => {
		const {getByLabelText} = render(
			<ModalWithState initialVisible>
				<ClayModal.Header>{'Title'}</ClayModal.Header>
			</ModalWithState>
		);

		jest.runAllTimers();

		const backdropElSelector = '.modal-backdrop.fade.show';
		const modalElSelector = '.fade.modal.d-block.show';

		const backdropEl = document.querySelector(backdropElSelector);
		const modalEl = document.querySelector(modalElSelector);
		const buttonHeaderCloseEl = getByLabelText('close');

		expect(backdropEl).toBeDefined();
		expect(modalEl).toBeDefined();

		fireEvent.click(buttonHeaderCloseEl);

		expect(document.body.classList).not.toContain('modal-open');
		expect(document.querySelector(backdropElSelector)).toBeNull();
		expect(document.querySelector(modalElSelector)).toBeNull();
	});

	it('close the modal when click on the button of Footer component', () => {
		const {getByLabelText} = render(
			<ModalWithState initialVisible>
				{(onClose: any) => (
					<ClayModal.Footer
						last={
							<Button aria-label="buttonFooter" onClick={onClose}>
								{'Foo'}
							</Button>
						}
					/>
				)}
			</ModalWithState>
		);

		jest.runAllTimers();

		const backdropElSelector = '.modal-backdrop.fade.show';
		const modalElSelector = '.fade.modal.d-block.show';

		const backdropEl = document.querySelector(backdropElSelector);
		const modalEl = document.querySelector(modalElSelector);
		const buttonFooterCloseEl = getByLabelText('buttonFooter');

		expect(backdropEl).toBeDefined();
		expect(modalEl).toBeDefined();

		fireEvent.click(buttonFooterCloseEl);

		expect(document.body.classList).not.toContain('modal-open');
		expect(document.querySelector(backdropElSelector)).toBeNull();
		expect(document.querySelector(modalElSelector)).toBeNull();
	});
});
