/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

export interface IToastContainerProps
	extends React.HTMLAttributes<HTMLDivElement> {

	/**
	 * Children of the ToastContainer must be a ClayAlert
	 */
	children?: React.ReactElement<any> | Array<React.ReactElement<any>>;
}

export function ClayToastContainer({
	children,
	className,
	...otherProps
}: IToastContainerProps) {
	return (
		<div
			{...otherProps}
			className={classNames(className, 'alert-container container')}
		>
			<div className="alert-notifications alert-notifications-fixed">
				{children}
			</div>
		</div>
	);
}

ClayToastContainer.displayName = 'ClayToastContainer';
