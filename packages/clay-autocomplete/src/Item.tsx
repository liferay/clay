/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import DropDown from '@clayui/drop-down';
import fuzzy from 'fuzzy';
import React from 'react';

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
}

const optionsFuzzy = {post: '|+', pre: '+|'};

const ClayAutocompleteItem = React.forwardRef<HTMLLIElement, IProps>(
	({children, innerRef, match = '', value, ...otherProps}: IProps, ref) => {
		const currentValue = value ?? String(children);
		const fuzzyMatch = fuzzy.match(match, currentValue, optionsFuzzy);

		return (
			<DropDown.Item {...otherProps} innerRef={innerRef} ref={ref}>
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

ClayAutocompleteItem.displayName = 'ClayAutocompleteItem';

export default ClayAutocompleteItem;
