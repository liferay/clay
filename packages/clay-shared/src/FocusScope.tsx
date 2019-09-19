/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useRef} from 'react';
import {useFocusManagement} from './useFocusManagement';

interface IProps {
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
}

const ARROW_DOWN_KEY_CODE = 40;
const ARROW_UP_KEY_CODE = 38;
const ARROW_RIGHT_KEY_CODE = 39;
const ARROW_LEFT_KEY_CODE = 37;
const TAB_KEY_CODE = 9;

/**
 * FocusScope is a component only for controlling focus and listening
 * for children's key down events, since the component handles the `onKeyDown`
 * event.
 */
export const FocusScope: React.FunctionComponent<IProps> = ({
	arrowKeysLeftRight = false,
	arrowKeysUpDown = true,
	children,
}) => {
	const elRef = useRef<null | HTMLElement>(null);
	const focusManager = useFocusManagement(elRef);

	const onKeyDown = (event: React.KeyboardEvent<any>) => {
		const {keyCode, shiftKey} = event;

		if (
			(arrowKeysUpDown && keyCode === ARROW_DOWN_KEY_CODE) ||
			(arrowKeysLeftRight && keyCode === ARROW_RIGHT_KEY_CODE) ||
			(keyCode === TAB_KEY_CODE && !shiftKey)
		) {
			event.preventDefault();
			focusManager.focusNext();
		} else if (
			(arrowKeysUpDown && keyCode === ARROW_UP_KEY_CODE) ||
			(arrowKeysLeftRight && keyCode === ARROW_LEFT_KEY_CODE) ||
			(keyCode === TAB_KEY_CODE && shiftKey)
		) {
			event.preventDefault();
			focusManager.focusPrevious();
		}
	};

	return React.cloneElement(children, {
		onKeyDown: (event: React.KeyboardEvent) => {
			onKeyDown(event);

			// If the element already exists a `onKeyDown` event should
			// invoke it as well.
			if (children.props.onKeyDown) {
				children.props.onKeyDown(event);
			}
		},
		ref: (r: HTMLElement) => {
			elRef.current = r;
			const {ref} = children;
			if (ref) {
				if (typeof ref === 'object') {
					ref.current = r;
				}
			}
		},
	});
};
