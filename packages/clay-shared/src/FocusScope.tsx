/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useContext} from 'react';

import {Keys} from './Keys';
import {useFocusManagement} from './useFocusManagement';

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

	children: React.ReactElement & {
		ref?: React.MutableRefObject<HTMLElement>;
	};
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
			if (focusManager.focusNext()) {
				event.preventDefault();
			}
		} else if (
			(arrowKeysUpDown && key === Keys.Up) ||
			(arrowKeysLeftRight && key === Keys.Left) ||
			(key === Keys.Tab && shiftKey)
		) {
			if (focusManager.focusPrevious()) {
				event.preventDefault();
			}
		}
	};

	return (
		<FocusConflictContext.Provider value>
			{React.cloneElement(children, {
				onKeyDown: (event: React.KeyboardEvent) => {
					if (hasParentFocus) {
						event.stopPropagation();
					}

					// If the element already exists a `onKeyDown` event should
					// invoke it as well.
					if (children.props.onKeyDown) {
						children.props.onKeyDown(event);
					}
					onKeyDown(event);
				},
				ref: (r: HTMLElement) => {
					if (r) {
						elRef.current = r;
						const {ref} = children;
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
