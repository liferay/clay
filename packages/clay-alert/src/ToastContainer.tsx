/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import classNames from 'classnames';
import React from 'react';
import {IClayAlertProps} from './index';

interface IToastContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Chilren of the ToastContainer must be a ClayAlert
	 */
	children?:
		| React.ReactElement<IClayAlertProps>
		| React.ReactElement<IClayAlertProps>[];
}

const ClayToastContainer = ({
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

export default ClayToastContainer;
