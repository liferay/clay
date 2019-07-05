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

	/**
	 * Match is the string that will be compared with value.
	 */
	match: string;

	/**
	 * Value is the string that will be compared to the characters of
	 * the match property.
	 */
	value: string;
}

const optionsFuzzy = {post: '</strong>', pre: '<strong>'};

const ClayAutocompleteItem: React.FunctionComponent<IProps> = ({
	forwardRef,
	match,
	value,
	...otherProps
}: IProps) => {
	const fuzzyMatchResult = fuzzy.match(match, value, optionsFuzzy);

	return (
		<ClayDropDown.Item {...otherProps} ref={forwardRef}>
			{fuzzyMatchResult ? (
				<div
					dangerouslySetInnerHTML={{
						__html: fuzzyMatchResult.rendered,
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
