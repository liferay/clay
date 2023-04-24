/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import DropDown from '@clayui/drop-down';
import {useHover, useInteractionFocus} from '@clayui/shared';
import classnames from 'classnames';
import fuzzy from 'fuzzy';
import React, {useCallback} from 'react';

import {useAutocompleteState} from './Context';

export interface IProps extends React.ComponentProps<typeof DropDown.Item> {
	/**
	 * The item content.
	 */
	children?: React.ReactText;

	innerRef?: React.Ref<HTMLAnchorElement>;

	/**
	 * Match is the string that will be compared with value.
	 */
	match?: string;

	/**
	 * Value is the string that will be compared to the characters of
	 * the match property.
	 * @deprecated since v3.74.0 - use `children` instead.
	 */
	value?: string;

	/**
	 * Internal property.
	 * @ignore
	 */
	keyValue?: React.Key;
}

const optionsFuzzy = {post: '|+', pre: '+|'};

const Item = React.forwardRef<HTMLLIElement, IProps>(
	(
		{
			children,
			className,
			disabled,
			innerRef,
			keyValue,
			match = '',
			value,
			...otherProps
		}: IProps,
		ref
	) => {
		const {activeDescendant, onActiveDescendant} = useAutocompleteState();

		const {isFocusVisible} = useInteractionFocus();

		const hoverProps = useHover({
			disabled,
			onHover: useCallback(
				() => onActiveDescendant(keyValue!),
				[keyValue]
			),
		});

		const isFocus = isFocusVisible();

		const currentValue = value ?? String(children);
		const fuzzyMatch = fuzzy.match(match, currentValue, optionsFuzzy);

		return (
			<DropDown.Item
				{...otherProps}
				{...hoverProps}
				aria-selected={activeDescendant === keyValue}
				className={classnames(className, {
					focus: activeDescendant === keyValue && isFocus,
					hover: activeDescendant === keyValue && !isFocus,
				})}
				id={String(keyValue)}
				innerRef={innerRef}
				ref={ref}
				tabIndex={-1}
			>
				{match && fuzzyMatch
					? fuzzyMatch.rendered
							.split('|')
							.map((item, index) => {
								const Text = item.includes('+')
									? 'span'
									: 'strong';
								const value = item.replace(/\+/g, '');

								return value ? (
									<Text key={index}>{value}</Text>
								) : null;
							})
							.filter(Boolean)
					: currentValue}
			</DropDown.Item>
		);
	}
);

Item.displayName = 'Item';

export default Item;
