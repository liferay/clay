/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayModal, {useModal} from '..';
import Button from '@clayui/button';
import {act, cleanup, render} from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

const spritemap = 'icons.svg';

describe('ClayModal', () => {
	beforeAll(() => {

		// @ts-ignore

		ReactDOM.createPortal = jest.fn((element) => {
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
					<ClayModal.Header>Foo</ClayModal.Header>

					<ClayModal.Body>
						<h1>Hello world!</h1>
					</ClayModal.Body>

					<ClayModal.Footer
						last={<Button onClick={onClose}>Primary</Button>}
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
					<ClayModal.Header>Foo</ClayModal.Header>
				</ClayModal>
			);
		};

		render(<ModalWithState />);

		act(() => {
			jest.runAllTimers();
		});

		expect(document.body).toMatchSnapshot();
	});

	it('renders Header w/ low-level API', () => {
		const ModalWithState = () => {
			const {observer} = useModal({onClose: () => {}});

			return (
				<ClayModal observer={observer} spritemap={spritemap}>
					<ClayModal.Header withTitle={false}>
						<ClayModal.ItemGroup>
							<ClayModal.Item>
								<ClayModal.TitleSection>
									<ClayModal.Title>
										Modal Title
									</ClayModal.Title>
								</ClayModal.TitleSection>
							</ClayModal.Item>

							<ClayModal.Item shrink>
								<ClayModal.SubtitleSection>
									<ClayModal.Subtitle>
										Modal Subtitle
									</ClayModal.Subtitle>
								</ClayModal.SubtitleSection>
							</ClayModal.Item>
						</ClayModal.ItemGroup>
					</ClayModal.Header>
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

	it('renders with center', () => {
		const ModalWithState = () => {
			const {observer} = useModal({onClose: () => {}});

			return (
				<ClayModal center observer={observer} spritemap={spritemap} />
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
						first={<Button>Bar</Button>}
						last={<Button onClick={onClose}>Foo</Button>}
						middle={<Button>Baz</Button>}
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

	it('renders footer item wrappers only when props are provided', () => {
		const {rerender} = render(<ClayModal.Footer />);

		expect(document.querySelector('.modal-item-first')).toBeNull();
		expect(document.querySelector('.modal-item')).toBeNull();
		expect(document.querySelector('.modal-item-last')).toBeNull();

		rerender(<ClayModal.Footer first={<Button>First</Button>} />);

		expect(document.querySelector('.modal-item-first')).not.toBeNull();
		expect(document.querySelector('.modal-item')).toBeNull();
		expect(document.querySelector('.modal-item-last')).toBeNull();

		rerender(<ClayModal.Footer middle={<Button>Middle</Button>} />);

		expect(document.querySelector('.modal-item-first')).toBeNull();
		expect(document.querySelector('.modal-item')).not.toBeNull();
		expect(document.querySelector('.modal-item-last')).toBeNull();

		rerender(<ClayModal.Footer last={<Button>Last</Button>} />);

		expect(document.querySelector('.modal-item-first')).toBeNull();
		expect(document.querySelector('.modal-item')).toBeNull();
		expect(document.querySelector('.modal-item-last')).not.toBeNull();
	});
});
