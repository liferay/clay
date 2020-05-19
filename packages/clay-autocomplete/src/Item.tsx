/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayDropDown from '@clayui/drop-down';
import fuzzy from 'fuzzy';
import React from 'react';

interface IProps extends React.ComponentProps<typeof ClayDropDown.Item> {
	forwardRef?: React.Ref<HTMLLIElement>;

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

const ClayAutocompleteItem: React.FunctionComponent<IProps> = ({
	forwardRef,
	innerRef,
	match = '',
	value,
	...otherProps
}: IProps) => {
	const fuzzyMatch = fuzzy.match(match, value, optionsFuzzy);

	return (
		<ClayDropDown.Item {...otherProps} innerRef={innerRef} ref={forwardRef}>
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
};

export default React.forwardRef(
	(props: Omit<IProps, 'forwardRef'>, ref?: React.Ref<HTMLLIElement>) => (
		<ClayAutocompleteItem {...props} forwardRef={ref} />
	)
);
