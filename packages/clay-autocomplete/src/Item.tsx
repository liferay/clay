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

export interface IProps
	extends React.HTMLAttributes<
		HTMLSpanElement | HTMLButtonElement | HTMLAnchorElement
	> {
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
	 * Flag that indicates if item is selected.
	 * @deprecated since v3.151.0 - uses the `selectedKeys` property on the
	 * root component.
	 */
	active?: boolean;

	/**
	 * Flag that indicates if item is disabled or not.
	 */
	disabled?: boolean;

	/**
	 * @ignore
	 */
	'data-index'?: number;

	/**
	 * Flag to indicate if matched text is highlighted
	 */
	highlightMatch?: boolean;

	/**
	 * Path for item to link to.
	 */
	href?: string;

	/**
	 * Sets the role accessibility property of the item. Set the item's
	 * container (<li />) role use the role="" prop instead of roleItem="".
	 */
	roleItem?: string;

	/**
	 * Path to icon spritemap from clay-css.
	 */
	spritemap?: string;

	/**
	 * Flag that indicates if there is an icon symbol on the left side.
	 */
	symbolLeft?: string;

	/**
	 * Flag that indicates if there is an icon symbol on the right side.
	 */
	symbolRight?: string;

	/**
	 * The item content.
	 */
	children?: React.ReactNode;

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

	/**
	 * Sets a text value if the component's content is not plain text. This value
	 * is used in the combobox element to show the selected option.
	 */
	textValue?: string;
}

const optionsFuzzy = {post: '|}', pre: '}|'};

const NewItem = React.forwardRef<HTMLLIElement, IProps>(function NewItem(
	{
		'aria-describedby': ariaDescribedby,
		'aria-label': ariaLabel,
		'aria-labelledby': ariaLabelledby,
		'aria-posinset': ariaPosInset,
		'aria-setsize': ariaSetSize,
		children,
		className,
		disabled,
		highlightMatch = true,
		innerRef,
		keyValue,
		match = '',
		textValue,
		value,
		...otherProps
	}: IProps,
	ref
) {
	const {activeDescendant, onActiveDescendant, selectedKeys} =
		useAutocompleteState();
	const {isFocusVisible} = useInteractionFocus();

	const isFocus = isFocusVisible();

	const isSelected = selectedKeys?.includes(keyValue!) ?? false;

	const hoverProps = useHover({
		disabled,
		onHover: useCallback(
			() => !isFocus && onActiveDescendant(keyValue!),
			[keyValue, isFocus]
		),
	});

	const currentValue = textValue ?? value ?? String(children);
	const fuzzyMatch = fuzzy.match(match, currentValue, optionsFuzzy);

	return (
		<DropDown.Item
			{...otherProps}
			{...hoverProps}
			{...(isSelected ? {active: isSelected} : {})}
			{...(isSelected ? {symbolLeft: 'check-small'} : {})}
			aria-describedby={ariaDescribedby}
			aria-label={ariaLabel}
			aria-labelledby={ariaLabelledby}
			aria-posinset={ariaPosInset}
			aria-setsize={ariaSetSize}
			className={classnames(className, {
				focus: activeDescendant === keyValue && isFocus,
				hover: activeDescendant === keyValue && !isFocus,
			})}
			id={String(keyValue)}
			innerRef={innerRef}
			ref={ref}
			tabIndex={-1}
		>
			{highlightMatch &&
			match &&
			fuzzyMatch &&
			typeof children === 'string'
				? fuzzyMatch.rendered
						.split('|')
						.map((item, index) => {
							const Text = item.includes('}') ? 'span' : 'strong';
							const value = item.replace(/\}/g, '');

							return value ? (
								<Text
									className={
										!item.includes('}') ? 'mark' : undefined
									}
									key={index}
								>
									{value}
								</Text>
							) : null;
						})
						.filter(Boolean)
				: children ?? currentValue}
		</DropDown.Item>
	);
});

const ItemLegacy = React.forwardRef<HTMLLIElement, IProps>(function ItemLegacy(
	{children, innerRef, match = '', value, ...otherProps}: IProps,
	ref
) {
	const currentValue = value ?? String(children);
	const fuzzyMatch = fuzzy.match(match, currentValue, optionsFuzzy);

	return (
		<DropDown.Item {...otherProps} innerRef={innerRef} ref={ref}>
			{match && fuzzyMatch
				? fuzzyMatch.rendered
						.split('|')
						.map((item, index) => {
							const Text = item.includes('}') ? 'span' : 'strong';
							const value = item.replace(/\}/g, '');

							return value ? (
								<Text key={index}>{value}</Text>
							) : null;
						})
						.filter(Boolean)
				: currentValue}
		</DropDown.Item>
	);
});

const Item = React.forwardRef<HTMLLIElement, IProps>(
	({children, match = '', ...otherProps}: IProps, ref) => {
		const {onActiveDescendant} = useAutocompleteState();

		const Component = onActiveDescendant! ? NewItem : ItemLegacy;

		return (
			<Component match={match} {...otherProps} ref={ref}>
				{children}
			</Component>
		);
	}
);

Item.displayName = 'Item';

export default Item;
