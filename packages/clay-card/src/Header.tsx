/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import React from 'react';

import Context from './Context';

import {AspectRatio} from './AspectRatio';
import {CardProps} from './index';

interface CardHeaderProps
	extends CardProps,
		React.HTMLAttributes<HTMLDivElement> {
	children:
		| React.ReactElement<HTMLElement>[]
		| React.ReactElement<HTMLElement>;
}

export type CardHeaderType = React.FunctionComponent<CardHeaderProps>;

export const Header: React.FunctionComponent<CardHeaderProps> = ({
	children,
}) => {
	const {displayType} = React.useContext(Context);

	const isCardType = {
		directory: displayType === 'directory',
		interactive: displayType === 'interactive',
	};

	if (isCardType.interactive) {
		return (
			<AspectRatio>
				<span className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
					{children}
				</span>
			</AspectRatio>
		);
	}

	return <AspectRatio className="card-item-first">{children}</AspectRatio>;
};
