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

	/**
	 * Instance of `useFocusManagement` hook so FocusScope can control focus
	 * via tab or arrow keys.
	 */
	focusManager: ReturnType<typeof useFocusManagement>;
}

const ARROW_DOWN_KEY_CODE = 40;
const ARROW_UP_KEY_CODE = 38;
const TAB_KEY_CODE = 9;

/**
 * FocusScope is a component only for controlling focus and listening
 * for children's key down events, since the component handles the `onKeyDown`
 * event, the component has assumed that you have scoped all focusable items
 * and should be controlled if only a part of your scope being added on
 * `createScope` there may be problems of focus experience.
 */
export const FocusScope: React.FunctionComponent<IProps> = ({
	arrowKeys = true,
	children,
	focusManager,
}) => {
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
