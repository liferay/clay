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
	 * The global aria-describedby attribute identifies the element (or elements)
	 * that describes the element on which the attribute is set.
	 */
	'aria-describedby'?: string;

	/**
	 * The `aria-label` attribute defines a string value that labels an interactive
	 * element.
	 */
	'aria-label'?: string;

	/**
	 * The `aria-labelledby` attribute identifies the element (or elements) that
	 * labels the element it is applied to.
	 */
	'aria-labelledby'?: string;

	/**
	 * Sets the number or position in the current set of listitems
	 * or treeitems when not all items are present in the DOM.
	 */
	'aria-posinset'?: number;

	/**
	 * Sets the number of items in the current set of listitems
	 * or treeitems when not all items in the set are present in the DOM.
	 */
	'aria-setsize'?: number;

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

export function Option({
	'aria-describedby': ariaDescribedby,
	'aria-label': ariaLabel,
	'aria-labelledby': ariaLabelledby,
	'aria-posinset': ariaPosInset,
	'aria-setsize': ariaSetSize,
	children,
	disabled,
	keyValue,
	textValue,
}: Props) {
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
			<option
				aria-describedby={ariaDescribedby}
				disabled={disabled}
				value={keyValue}
			>
				{typeof children === 'string' ? children : textValue}
			</option>
		);
	}

	return (
		<li role="presentation">
			<button
				{...hoverProps}
				aria-describedby={ariaDescribedby}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledby}
				aria-posinset={ariaPosInset}
				aria-selected={selectedKey === keyValue}
				aria-setsize={ariaSetSize}
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
						<Icon symbol="check-small" />
					</span>
				)}

				{children}
			</button>
		</li>
	);
}

Option.passthroughKey = true;
Option.displayName = 'Item';
