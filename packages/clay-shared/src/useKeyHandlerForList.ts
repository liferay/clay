/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

const ENTER_KEY_CODE = 13;
const UP_ARROW_KEY_CODE = 38;
const DOWN_ARROW_KEY_CODE = 40;

interface IArgs {
	activeListItemRef: React.RefObject<HTMLLIElement>;
	index: number;
	inputRef: React.RefObject<HTMLInputElement>;
	onIndexChange: (newVal: number) => void;
	onIndexSelect: (activeIndex: number) => void;
	totalItems: number;
}

/**
 * Hook that returns a function for handling arrow keys
 * and enter key for a list.
 */
export function useKeyHandlerForList({
	activeListItemRef,
	index,
	inputRef,
	onIndexChange,
	onIndexSelect,
	totalItems,
}: IArgs): React.KeyboardEventHandler {
	React.useEffect(() => {
		if (activeListItemRef.current && inputRef.current) {
			activeListItemRef.current.scrollIntoView({block: 'nearest'});
		}
	}, [activeListItemRef.current]);

	return event => {
		const {keyCode} = event;

		if (keyCode === UP_ARROW_KEY_CODE || keyCode === DOWN_ARROW_KEY_CODE) {
			event.preventDefault();

			const nextIndex = index === totalItems - 1 ? -1 : index + 1;
			const prevIndex = index === -1 ? totalItems - 1 : index - 1;

			onIndexChange(
				keyCode === UP_ARROW_KEY_CODE ? prevIndex : nextIndex
			);
		} else if (keyCode === ENTER_KEY_CODE) {
			onIndexChange(0);
			onIndexSelect(index);
		}
	};
}
