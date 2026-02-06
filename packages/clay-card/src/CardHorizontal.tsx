/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

import Context from './Context';

interface IProps extends React.BaseHTMLAttributes<HTMLDivElement> {

	/**
	 * Flag that indicates if `active` class is applied
	 */
	active?: boolean;

	/**
	 * Flag that indicates if the card can be selectable.
	 */
	selectable?: boolean;
}

function Body({
	children,
	className,
	...otherProps
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={classNames('card card-horizontal', className)}
			{...otherProps}
		>
			{children}
		</div>
	);
}

export function ClayCardHorizontal({
	active,
	children,
	className,
	selectable,
	...otherProps
}: IProps) {
	return (
		<Context.Provider value={{horizontal: true, interactive: false}}>
			<div
				className={classNames(
					className,
					{
						active,
						'card card-horizontal': !selectable,
						'form-check-card form-check form-check-middle-left':
							selectable,
					},
					'card-type-directory'
				)}
				{...otherProps}
			>
				{children}
			</div>
		</Context.Provider>
	);
}

ClayCardHorizontal.Body = Body;
