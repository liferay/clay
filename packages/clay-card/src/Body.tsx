/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import Context from './Context';
import React from 'react';

export const Body: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = ({
	children,
	className,
	...otherProps
}) => {
	const {horizontal, interactive} = React.useContext(Context);

	const TagName = interactive ? 'span' : 'div';

	const Content: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = ({children}) => (
		<TagName className={classNames('card-body', className)} {...otherProps}>
			{interactive && !horizontal ? (
				children
			) : (
				<TagName className="card-row">{children}</TagName>
			)}
		</TagName>
	);

	if (horizontal && !interactive) {
		return (
			<div className="card card-horizontal">
				<Content>{children}</Content>
			</div>
		);
	}

	return <Content>{children}</Content>;
};
