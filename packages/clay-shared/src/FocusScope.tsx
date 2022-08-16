/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {Children, useContext} from 'react';

import {Keys} from './Keys';
import {useFocusManagement} from './useFocusManagement';

type Children = React.ReactElement & {
	ref?: React.MutableRefObject<HTMLElement>;
};

type ChildrenFunction =
	| Children
	| ((focusManager: ReturnType<typeof useFocusManagement>) => Children);

type Props = {
	/**
	 * Flag indicates whether the focus will also be controlled with the right
	 * and left arrow keys.
	 */
	arrowKeysLeftRight?: boolean;

	/**
	 * Flag that indicates if the focus will be controlled by the arrow keys.
	 * Disabling means that it will still be controlled by tab and shift + tab.
	 */
	arrowKeysUpDown?: boolean;

	children: ChildrenFunction;

	onFocus?: (element: HTMLElement) => void;
};

/**
 * The context helps to identify if the FocusScope is being declared nested, to
 * avoid focus being controlled by more than one focus manager, we stop event
 * propagation to prevent the parent focus generator from doing anything.
 */
const FocusConflictContext = React.createContext<boolean>(false);

/**
 * FocusScope is a component only for controlling focus and listening
 * for children's key down events, since the component handles the `onKeyDown`
 * event.
 */
export const FocusScope = ({
	arrowKeysLeftRight = false,
	arrowKeysUpDown = true,
	children,
	onFocus,
}: Props) => {
	const elRef = React.useRef<null | HTMLElement>(null);
	const focusManager = useFocusManagement(elRef);

	const hasParentFocus = useContext(FocusConflictContext);

	const onKeyDown = (event: React.KeyboardEvent<any>) => {
		const {key, shiftKey} = event;

		if (
			(arrowKeysUpDown && key === Keys.Down) ||
			(arrowKeysLeftRight && key === Keys.Right) ||
			(key === Keys.Tab && !shiftKey)
		) {
			const next = focusManager.focusNext();

			if (next) {
				event.preventDefault();

				if (onFocus) {
					onFocus(next);
				}
			}
		} else if (
			(arrowKeysUpDown && key === Keys.Up) ||
			(arrowKeysLeftRight && key === Keys.Left) ||
			(key === Keys.Tab && shiftKey)
		) {
			const previous = focusManager.focusPrevious();

			if (previous) {
				event.preventDefault();

				if (onFocus) {
					onFocus(previous);
				}
			}
		}
	};

	const child =
		typeof children === 'function' ? children(focusManager) : children;

	return (
		<FocusConflictContext.Provider value>
			{React.cloneElement(child, {
				onKeyDown: (event: React.KeyboardEvent) => {
					if (hasParentFocus) {
						event.stopPropagation();
					}

					// If the element already exists a `onKeyDown` event should
					// invoke it as well.
					if (child.props.onKeyDown) {
						child.props.onKeyDown(event);
					}
					onKeyDown(event);
				},
				ref: (r: HTMLElement) => {
					if (r) {
						elRef.current = r;
						const {ref} = child;
						if (ref) {
							if (typeof ref === 'object') {
								ref.current = r;
							}
						}
					}
				},
			})}
		</FocusConflictContext.Provider>
	);
};
