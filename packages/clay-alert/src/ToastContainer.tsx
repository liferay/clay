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
		| Array<React.ReactElement<IClayAlertProps>>;
}

type Toast = React.ForwardRefExoticComponent<
	IToastContainerProps & React.RefAttributes<HTMLDivElement>
>;

const ClayToastContainer = React.forwardRef(
	({children, className, ...otherProps}: IToastContainerProps, ref) => (
		<div
			{...otherProps}
			className={classNames(className, 'alert-container container')}
			ref={ref}
		>
			<div className="alert-notifications alert-notifications-fixed">
				{children}
			</div>
		</div>
	)
) as Toast;

export default ClayToastContainer;
