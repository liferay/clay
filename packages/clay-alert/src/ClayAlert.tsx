/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';
import Icon from '@clayui/icon';

type DisplayType = 'danger' | 'info' | 'success' | 'warning';

interface ClayAlertProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Callback function for when the 'x' is clicked.
	 */
	onClose?: () => void;

	/**
	 * Determines the style of the alert.
	 */
	displayType?: DisplayType;

	/**
	 * Flag to indicate the stripe variant.
	 */
	stripe?: boolean;

	/**
	 * The summary of the Alert, often is something like 'Error' or 'Info'.
	 */
	title: string;

	/**
	 * Path to the spritemap that Icon should use when referencing symbols.
	 */
	spritemap?: string;
}

interface ToastContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Chilren of the ToastContainer must be a ClayAlert
	 */
	children?:
		| React.ReactElement<ClayAlertProps>
		| React.ReactElement<ClayAlertProps>[];
}

const ICON_MAP = {
	danger: 'exclamation-full',
	info: 'info-circle',
	success: 'check-circle-full',
	warning: 'warning-full',
};

const ClayAlert: React.FunctionComponent<ClayAlertProps> & {
	ToastContainer: React.FunctionComponent<ToastContainerProps>;
} = ({
	children,
	className,
	displayType = 'info',
	onClose,
	spritemap,
	stripe,
	title,
	...otherProps
}) => {
	const ConditionalContainer: React.FunctionComponent<{}> = ({children}) =>
		stripe ? <div className="container">{children}</div> : <>{children}</>;

	return (
		<div
			{...otherProps}
			className={classNames(className, 'alert', {
				'alert-dismissible': onClose,
				'alert-fluid': stripe,
				[`alert-${displayType}`]: displayType,
			})}
			role="alert"
		>
			<ConditionalContainer>
				<span className="alert-indicator">
					<Icon
						spritemap={spritemap}
						symbol={ICON_MAP[displayType]}
					/>
				</span>

				<strong className="lead">{title}</strong>

				{children}

				{onClose && (
					<button
						aria-label="Close"
						className="close"
						onClick={onClose}
						type="button"
					>
						<Icon spritemap={spritemap} symbol="times" />
					</button>
				)}
			</ConditionalContainer>
		</div>
	);
};

ClayAlert.ToastContainer = ({children, className, ...otherProps}) => {
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

export default ClayAlert;
