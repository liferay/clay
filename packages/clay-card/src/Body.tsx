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

export type CardBodyType = React.FunctionComponent<CardBodyProps>;

export const Body: CardBodyType = ({children, className, ...otherProps}) => {
	const {displayType} = React.useContext(Context);

	const isCardType = {
		horizontal: displayType === 'horizontal',
		horizontalInteractive: displayType === 'horizontal interactive',
		interactive: displayType === 'interactive',
	};

	const TagName =
		isCardType.interactive || isCardType.horizontalInteractive
			? 'span'
			: 'div';

	if (isCardType.horizontal) {
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
			{isCardType.interactive ? (
				children
			) : (
				<TagName className="card-row">{children}</TagName>
			)}
		</TagName>
	);
};
