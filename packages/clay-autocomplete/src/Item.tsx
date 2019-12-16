/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayDropDown from '@clayui/drop-down';
import * as fuzzy from 'fuzzy';
import * as React from 'react';

export interface IProps extends React.ComponentProps<typeof ClayDropDown.Item> {
	innerRef?: React.Ref<HTMLAnchorElement>;

	/**
	 * Match is the string that will be compared with value.
	 */
	match?: string;

	/**
	 * Value is the string that will be compared to the characters of
	 * the match property.
	 */
	value: string;
}

const optionsFuzzy = {post: '</strong>', pre: '<strong>'};

const ClayAutocompleteItem = React.forwardRef<HTMLLIElement, IProps>(
	({innerRef, match = '', value, ...otherProps}: IProps, ref) => {
		const fuzzyMatch = fuzzy.match(match, value, optionsFuzzy);

		return (
			<ClayDropDown.Item {...otherProps} innerRef={innerRef} ref={ref}>
				{match && fuzzyMatch ? (
					<div
						dangerouslySetInnerHTML={{
							__html: fuzzyMatch.rendered,
						}}
					/>
				) : (
					value
				)}
			</ClayDropDown.Item>
		);
	}
);

export default ClayAutocompleteItem;
