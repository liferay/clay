/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
import {useFocusManagement} from './useFocusManagement';

interface IProps {
	arrowKeys?: boolean;
	focusManager: ReturnType<typeof useFocusManagement>;
}

const ARROW_DOWN_KEY_CODE = 40;
const ARROW_UP_KEY_CODE = 38;
const TAB_KEY_CODE = 9;

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

	return React.cloneElement(children as React.FunctionComponentElement<any>, {
		onKeyDown: (event: React.KeyboardEvent) => {
			onKeyDown(event);

			// If the element already exists a `onKeyDown` event should invoke it as well.
			// Any here is because React interfaces do not expose what lies under the hood.
			if ((children as any).props.onKeyDown) {
				(children as any).props.onKeyDown(event);
			}
		},
	});
};
