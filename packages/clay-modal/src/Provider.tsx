/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';

import ClayModal from './Modal';
import {Size, Status} from './types';
import {useModal} from './useModal';

enum Action {
	Close = 0,
	Open = 1,
}

interface IProps {
	/**
	 * The path to the SVG spritemap file containing the icons.
	 */
	spritemap?: string;
}

type TState = {
	/**
	 * Renders an element in the modal body.
	 */
	body: React.ReactElement | React.ReactText;

	/**
	 * Render the action buttons on the footer following the order of `ClayModal.Footer`:
	 * - first
	 * - middle
	 * - last
	 */
	footer: Array<React.ReactElement | undefined>;

	/**
	 * Renders an element in the modal header.
	 */
	header?: React.ReactElement | React.ReactText;

	/**
	 * The size of element modal.
	 */
	size?: Size;

	/**
	 * Status messages.
	 */
	status?: Status;

	/**
	 * Url to place an iframe in the body of the modal.
	 */
	url?: string;
};

type TAction = {type: Action.Open; payload: TState} | {type: Action.Close};

type TProvider = [TState & {onClose: () => void}, React.Dispatch<TAction>];

const initialState = {
	body: <div />,
	footer: [],
	onClose: () => {},
	visible: false,
};

const reducer = (
	state: TState,
	action: TAction
): TState & {visible: boolean} => {
	switch (action.type) {
		case Action.Open:
			return {...action.payload, visible: true};
		case Action.Close:
			return initialState;
		default:
			throw new TypeError();
	}
};

const Context = React.createContext<TProvider>([initialState, () => {}]);

const ClayModalProvider: React.FunctionComponent<IProps> = ({
	children,
	spritemap,
}) => {
	const [{visible, ...otherState}, dispatch] = React.useReducer(
		reducer,
		initialState
	);
	const {observer, onClose} = useModal({
		onClose: () => dispatch({type: Action.Close}),
	});
	const {body, footer, header, size, status, url} = otherState;
	const [first, middle, last] = footer;
	const state = {
		...otherState,
		onClose,
	};

	return (
		<>
			{visible && (
				<ClayModal
					observer={observer}
					size={size}
					spritemap={spritemap}
					status={status}
				>
					<ClayModal.Header>{header}</ClayModal.Header>
					<ClayModal.Body url={url}>{body}</ClayModal.Body>
					<ClayModal.Footer
						first={first}
						last={last}
						middle={middle}
					/>
				</ClayModal>
			)}
			<Context.Provider value={[state, dispatch]}>
				{children}
			</Context.Provider>
		</>
	);
};

export {Context};
export default ClayModalProvider;
