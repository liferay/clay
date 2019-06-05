/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import Context from './Context';
import React from 'react';

export const Detail: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = ({
	children,
	className,
	...otherProps
}) => {
	const {interactive} = React.useContext(Context);

	const TagName = interactive ? 'span' : 'div';

	return (
		<TagName
			className={classNames(className, 'card-detail')}
			{...otherProps}
		>
			{children}
		</TagName>
	);
};
