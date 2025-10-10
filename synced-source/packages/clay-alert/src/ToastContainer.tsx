/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
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

export const ClayToastContainer = ({
	children,
	className,
	...otherProps
}: IToastContainerProps) => {
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
};

ClayToastContainer.displayName = 'ClayToastContainer';
