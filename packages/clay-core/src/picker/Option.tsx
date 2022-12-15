/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Icon from '@clayui/icon';
import {useHover, useInteractionFocus} from '@clayui/shared';
import classNames from 'classnames';
import React, {useCallback} from 'react';

import {usePickerState} from './context';

type Props = {
	/**
	 * The contents of the component.
	 */
	children?: React.ReactNode;

	/**
	 * Flag that indicates if option is disabled.
	 */
	disabled?: boolean;

	/**
	 * Internal property.
	 * @ignore
	 */
	keyValue?: React.Key;

	/**
	 * Sets a text value if the component's content is not plain text. This value
	 * is used in the combobox element to show the selected option.
	 */
	textValue?: string;
};

export function Option({children, disabled, keyValue, textValue}: Props) {
	const {
		activeDescendant,
		isMobile,
		onActiveDescendant,
		onSelectionChange,
		selectedKey,
	} = usePickerState();

	const {isFocusVisible} = useInteractionFocus();

	const hoverProps = useHover({
		disabled,
		onHover: useCallback(
			() => onActiveDescendant(String(keyValue)),
			[keyValue]
		),
	});

	const isFocus = isFocusVisible();

	if (isMobile) {
		return (
			<option disabled={disabled} value={keyValue}>
				{typeof children === 'string' ? children : textValue}
			</option>
		);
	}

	return (
		<li role="presentation">
			<button
				{...hoverProps}
				aria-selected={selectedKey === keyValue}
				className={classNames('dropdown-item', {
					active: selectedKey === keyValue,
					focus: activeDescendant === String(keyValue) && isFocus,
					hover: activeDescendant === String(keyValue) && !isFocus,
				})}
				disabled={disabled}
				id={String(keyValue)}
				onClick={() => onSelectionChange(keyValue!)}
				role="option"
				tabIndex={-1}
			>
				{selectedKey === keyValue && (
					<span className="dropdown-item-indicator-start">
						<Icon symbol="check" />
					</span>
				)}

				{children}
			</button>
		</li>
	);
}
