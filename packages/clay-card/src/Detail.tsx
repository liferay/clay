/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import React from 'react';

import classNames from 'classnames';

import Context from './Context';

interface CardDetailProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export const Detail: React.FunctionComponent<CardDetailProps> = ({
	children,
	className,
	...otherProps
}) => {
	const {displayType} = React.useContext(Context);

	const TagName =
		displayType === 'interactive' || displayType === 'horizontal-interactive'
			? 'span'
			: 'div';

	return (
		<TagName
			className={classNames(className, 'card-detail')}
			{...otherProps}
		>
			{children}
		</TagName>
	);
};
