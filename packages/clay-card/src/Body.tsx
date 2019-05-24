/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import React from 'react';

import classNames from 'classnames';

import Context from './Context';

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
	children:
		| React.ReactElement<HTMLElement>[]
		| React.ReactElement<HTMLElement>;
}

export const Body: React.FunctionComponent<CardBodyProps> = ({
	children,
	className,
	...otherProps
}) => {
	const {horizontal, interactive} = React.useContext(Context);

	const isCardType = {
		horizontal,
		interactive,
	};

	const TagName =
		isCardType.interactive ||
		(isCardType.horizontal && isCardType.interactive)
			? 'span'
			: 'div';

	if (isCardType.horizontal && !isCardType.interactive) {
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
			{isCardType.interactive && !isCardType.horizontal ? (
				children
			) : (
				<TagName className="card-row">{children}</TagName>
			)}
		</TagName>
	);
};
