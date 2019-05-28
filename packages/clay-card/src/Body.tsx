/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import React from 'react';

import classNames from 'classnames';

import Context from './Context';

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Body: React.FunctionComponent<CardBodyProps> = ({
	children,
	className,
	...otherProps
}) => {
	const {horizontal, interactive} = React.useContext(Context);

	const TagName = interactive ? 'span' : 'div';

	if (horizontal && !interactive) {
		return (
			<div className="card card-horizontal">
				<div
					className={classNames('card-body', className)}
					{...otherProps}
				>
					<div className="card-row">{children}</div>
				</div>
			</div>
		);
	}

	return (
		<TagName className={classNames('card-body', className)} {...otherProps}>
			{interactive && !horizontal ? (
				children
			) : (
				<TagName className="card-row">{children}</TagName>
			)}
		</TagName>
	);
};
