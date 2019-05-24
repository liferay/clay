/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import React from 'react';

import classNames from 'classnames';

import Context from './Context';

type CardDescriptionDisplayType = 'text' | 'title' | 'subtitle';

interface CardDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactText;

	/**
	 * Type of description that can be applied for a text.
	 */
	displayType: CardDescriptionDisplayType;

	/**
	 * Truncates the text inside a description.
	 */
	truncate?: boolean;
}

export const Description: React.FunctionComponent<CardDescriptionProps> = ({
	children,
	className,
	displayType,
	truncate = true,
	...otherProps
}) => {
	const {interactive} = React.useContext(Context);

	const TagName = interactive ? 'span' : 'div';

	return (
		<TagName
			className={classNames(className, `card-${displayType}`, {
				'text-truncate': truncate,
			})}
			{...otherProps}
		>
			{children}
		</TagName>
	);
};
