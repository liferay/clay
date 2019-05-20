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

export type CardDetailType = React.FunctionComponent<CardDetailProps>;

export const Detail: CardDetailType = ({
	children,
	className,
	...otherProps
}) => {
	const {displayType} = React.useContext(Context);
	const isCardType = {
		horizontalInteractive: displayType === 'horizontal interactive',
		interactive: displayType === 'interactive',
	};

	const TagName =
		isCardType.interactive || isCardType.horizontalInteractive
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
