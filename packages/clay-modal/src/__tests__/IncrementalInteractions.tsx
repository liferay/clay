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
import {
	cleanup,
	fireEvent,
	render,
	wait,
	waitForElement,
} from 'react-testing-library';

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
	afterEach(cleanup);

	// this is just a little hack to silence a warning that we'll get until react
	// fixes this: https://github.com/facebook/react/pull/14853
	// https://github.com/testing-library/react-testing-library/issues/281
	const originalError = console.error;
	beforeAll(() => {
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
		console.error = originalError;
	});

	it('open the modal', async () => {
		const {container, getByLabelText} = render(<ModalWithState />);

		expect(document.body.classList).not.toContain('modal-open');

		fireEvent.click(getByLabelText('button'), {});

		const backdropEl = await waitForElement(() =>
			container.querySelector('.modal-backdrop.fade.show')
		);

		expect(document.body.classList).toContain('modal-open');
		expect(backdropEl).toBeDefined();
	});

	it('close the modal by clicking on the overlay', async done => {
		const {container} = render(<ModalWithState initialVisible />);

		const backdropEl: any = await waitForElement(() =>
			container.querySelector('.modal-backdrop.fade.show')
		);
		const modalEl: any = await waitForElement(() =>
			container.querySelector('.fade.modal.d-block.show')
		);

		expect(backdropEl.classList).toContain('show');
		expect(modalEl.classList).toContain('show');

		fireEvent.click(document.body, {});

		await wait(() => {
			expect(document.body.classList).not.toContain('modal-open');
			expect(backdropEl.classList).not.toContain('show');
			expect(modalEl.classList).not.toContain('show');
			done();
		});
	});

	it('close the modal when pressing ESC', async done => {
		const {container} = render(<ModalWithState initialVisible />);

		const backdropEl: any = await waitForElement(() =>
			container.querySelector('.modal-backdrop.fade.show')
		);
		const modalEl: any = await waitForElement(() =>
			container.querySelector('.fade.modal.d-block.show')
		);

		expect(backdropEl.classList).toContain('show');
		expect(modalEl.classList).toContain('show');

		fireEvent.keyUp(container, {keyCode: 27});

		await wait(() => {
			expect(document.body.classList).not.toContain('modal-open');
			expect(backdropEl.classList).not.toContain('show');
			expect(modalEl.classList).not.toContain('show');
			done();
		});
	});

	it('close the modal when clicking on the close button of the Header component', async done => {
		const {container, getByLabelText} = render(
			<ModalWithState initialVisible>
				<ClayModal.Header>{'Title'}</ClayModal.Header>
			</ModalWithState>
		);

		const backdropEl: any = await waitForElement(() =>
			container.querySelector('.modal-backdrop.fade.show')
		);
		const modalEl: any = await waitForElement(() =>
			container.querySelector('.fade.modal.d-block.show')
		);
		const buttonHeaderCloseEl: any = await waitForElement(() =>
			getByLabelText('close')
		);

		expect(backdropEl.classList).toContain('show');
		expect(modalEl.classList).toContain('show');

		fireEvent.click(buttonHeaderCloseEl);

		await wait(() => {
			expect(document.body.classList).not.toContain('modal-open');
			expect(backdropEl.classList).not.toContain('show');
			expect(modalEl.classList).not.toContain('show');
			done();
		});
	});

	it('close the modal when click on the button of Footer component', async done => {
		const {container, getByLabelText} = render(
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

		const backdropEl: any = await waitForElement(() =>
			container.querySelector('.modal-backdrop.fade.show')
		);
		const modalEl: any = await waitForElement(() =>
			container.querySelector('.fade.modal.d-block.show')
		);
		const buttonFooterCloseEl: any = await waitForElement(() =>
			getByLabelText('buttonFooter')
		);

		expect(backdropEl.classList).toContain('show');
		expect(modalEl.classList).toContain('show');

		fireEvent.click(buttonFooterCloseEl);

		await wait(() => {
			expect(document.body.classList).not.toContain('modal-open');
			expect(backdropEl.classList).not.toContain('show');
			expect(modalEl.classList).not.toContain('show');
			done();
		});
	});
});
