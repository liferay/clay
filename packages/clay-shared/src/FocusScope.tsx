/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
import {useFocusManagement} from './useFocusManagement';

interface IProps {
	/**
	 * Flag that indicates if the focus will be controlled by the arrow keys.
	 * Disabling means that it will still be controlled by tab and shift + tab.
	 */
	arrowKeys?: boolean;

	children: React.ReactElement;
}

const ARROW_DOWN_KEY_CODE = 40;
const ARROW_UP_KEY_CODE = 38;
const TAB_KEY_CODE = 9;

/**
 * FocusScope is a component only for controlling focus and listening
 * for children's key down events, since the component handles the `onKeyDown`
 * event.
 */
export const FocusScope: React.FunctionComponent<IProps> = ({
	arrowKeys = true,
	children,
}) => {
	const focusManager = useFocusManagement(children);

	const onKeyDown = (event: React.KeyboardEvent<any>) => {
		const {keyCode, shiftKey} = event;

		if (
			(arrowKeys && keyCode === ARROW_DOWN_KEY_CODE) ||
			(keyCode === TAB_KEY_CODE && !shiftKey)
		) {
			event.preventDefault();
			focusManager.focusNext();
		} else if (
			(arrowKeys && keyCode === ARROW_UP_KEY_CODE) ||
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
	});
};
