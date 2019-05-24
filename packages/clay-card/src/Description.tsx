/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import React from 'react';

import classNames from 'classnames';

import Context from './Context';

import {CardDescriptionDisplayType} from './types';

interface CardDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactText;

	/**
	 * Truncates the text inside a description.
	 */
	truncate?: boolean;

	/**
	 * Type of description that can be applied for a text.
	 */
	type: CardDescriptionDisplayType;
}

export type CardDescriptionType = React.FunctionComponent<CardDescriptionProps>;

export const Description: CardDescriptionType = ({
	children,
	className,
	truncate = true,
	type,
	...otherProps
}) => {
	const {displayType} = React.useContext(Context);
	const isCardType = {
		horizontalInteractive: displayType === 'horizontal-interactive',
		interactive: displayType === 'interactive',
	};
	const TagName =
		isCardType.interactive || isCardType.horizontalInteractive
			? 'span'
			: 'div';

	return (
		<TagName
			className={classNames(className, `card-${type}`, {
				'text-truncate': truncate,
			})}
			{...otherProps}
		>
			{children}
		</TagName>
	);
};
