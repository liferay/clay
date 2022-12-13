/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Icon from '@clayui/icon';
import {useHover} from '@clayui/shared';
import classNames from 'classnames';
import React, {useCallback, useEffect} from 'react';

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
	index?: React.Key;

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
	children,
	disabled,
	index,
	keyValue,
	textValue,
}: Props) {
	const {
		activeDescendant,
		onActiveDescendant,
		onItemRendered,
		onSelectionChange,
		selectedKey,
	} = usePickerState();

	if (typeof children !== 'string' && !textValue) {
		console.warn(
			'Clay: <Option /> with non-plain text content is not compatible with the type being selected. Please add a `textValue` prop.'
		);
	}

	// Sets the initial activeDescendant value when the first one is rendered if
	// it is empty.
	useEffect(() => {
		if (index === 0 && !activeDescendant) {
			onActiveDescendant(String(keyValue));
		}
	}, []);

	const hoverProps = useHover({
		disabled,
		onHover: useCallback(
			() => onActiveDescendant(String(keyValue)),
			[keyValue]
		),
	});

	return (
		<li role="presentation">
			<button
				{...hoverProps}
				aria-selected={selectedKey === keyValue}
				className={classNames('dropdown-item', {
					active:
						selectedKey === keyValue ||
						activeDescendant === String(keyValue),
				})}
				disabled={disabled}
				id={String(keyValue)}
				onClick={() => {
					onSelectionChange(keyValue!);
					onItemRendered(
						typeof children === 'string' ? children : textValue!
					);
				}}
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
