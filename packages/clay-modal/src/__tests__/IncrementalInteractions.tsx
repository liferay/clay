/*eslint no-console: 0 */
/* eslint-disable no-sparse-arrays */
/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import ClayModal, {ClayModalProvider, Context, useModal} from '..';
import React, {useContext, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {cleanup, fireEvent, render} from '@testing-library/react';

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
	const {observer} = useModal({onClose: () => setVisible(false)});

	return (
		<>
			{visible && (
				<ClayModal observer={observer} spritemap={spritemap} {...props}>
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
	// https://github.com/testing-library/react/issues/281
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
		const ModalState = () => {
			const [visible, setVisible] = useState(true);
			const {observer, onClose} = useModal({
				onClose: () => setVisible(false),
			});

			if (!visible) {
				return null;
			}

			return (
				<ClayModal observer={observer} spritemap={spritemap}>
					<ClayModal.Footer
						last={
							<Button aria-label="buttonFooter" onClick={onClose}>
								{'Foo'}
							</Button>
						}
					/>
				</ClayModal>
			);
		};
		const {getByLabelText} = render(<ModalState />);

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

describe('ModalProvider -> IncrementalInteractions', () => {
	afterEach(() => {
		jest.clearAllTimers();

		cleanup();
	});

	const originalError = console.error;
	beforeAll(() => {
		console.error = (...args: any) => {
			if (/Warning.*not wrapped in act/.test(args[0])) {
				return;
			}
			originalError.call(console, ...args);
		};
		jest.useFakeTimers();

		// @ts-ignore
		ReactDOM.createPortal = jest.fn(element => {
			return element;
		});
	});

	afterAll(() => {
		console.error = originalError;
		jest.useRealTimers();
	});

	it('renders a modal when dispatching Open by provider', () => {
		const ModalWithProvider = () => {
			const [state, dispatch] = useContext(Context);

			return (
				<Button
					data-testid="button"
					displayType="primary"
					onClick={() =>
						dispatch({
							payload: {
								body: <h1>{'Hello world!'}</h1>,
								footer: [
									,
									,
									<Button key={3} onClick={state.onClose}>
										{'Primary'}
									</Button>,
								],
								header: 'Title',
								size: 'lg',
							},
							type: 1,
						})
					}
				>
					{'Open modal'}
				</Button>
			);
		};

		const {getByTestId} = render(
			<ClayModalProvider spritemap={spritemap}>
				<ModalWithProvider />
			</ClayModalProvider>
		);

		const button = getByTestId('button');

		fireEvent.click(button, {});

		jest.runAllTimers();

		expect(document.body).toMatchSnapshot();
	});

	it('renders a modal closed when dispatching Close by provider', () => {
		const ModalWithProvider = () => {
			const [state, dispatch] = useContext(Context);

			useEffect(() => {
				dispatch({
					payload: {
						body: <h1>{'Hello world!'}</h1>,
						footer: [
							,
							,
							<Button key={3} onClick={state.onClose}>
								{'Primary'}
							</Button>,
						],
						header: 'Title',
						size: 'lg',
					},
					type: 1,
				});
			}, []);

			return (
				<Button
					data-testid="button"
					displayType="primary"
					onClick={() => dispatch({type: 0})}
				>
					{'Open modal'}
				</Button>
			);
		};

		const {getByTestId} = render(
			<ClayModalProvider spritemap={spritemap}>
				<ModalWithProvider />
			</ClayModalProvider>
		);

		const button = getByTestId('button');

		const backdropElSelector = '.modal-backdrop.fade.show';
		const modalElSelector = '.fade.modal.d-block.show';

		const backdropEl = document.querySelector(backdropElSelector);
		const modalEl = document.querySelector(modalElSelector);

		expect(backdropEl).toBeDefined();
		expect(modalEl).toBeDefined();

		fireEvent.click(button, {});

		expect(document.body).toMatchSnapshot();
	});
});
