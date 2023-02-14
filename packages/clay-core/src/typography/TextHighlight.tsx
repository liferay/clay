/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import fuzzy from 'fuzzy';
import React from 'react';

type Props = {
	/**
	 * The component content.
	 */
	children: string;

	/**
	 * Match is the string that will be compared with value.
	 */
	match: string;
};

const optionsFuzzy = {post: '|+', pre: '+|'};

export function TextHighlight({children, match}: Props) {
	const fuzzyMatch = fuzzy.match(match, children, optionsFuzzy);

	return (
		<>
			{match && fuzzyMatch
				? fuzzyMatch.rendered
						.split('|')
						.map((item, index) => {
							const Text = item.includes('+') ? 'span' : 'strong';
							const value = item.replace(/\+/g, '');

							return value ? (
								<Text key={index}>{value}</Text>
							) : null;
						})
						.filter(Boolean)
				: children}
		</>
	);
}
