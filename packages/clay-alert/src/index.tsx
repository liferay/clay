/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import Icon from '@clayui/icon';
import React from 'react';

const useAutoClose = (autoClose?: boolean | number, onClose = () => {}) => {
	const startedTime = React.useRef<number>(0);
	const timer = React.useRef<number | undefined>(undefined);
	const timeToClose = React.useRef(autoClose === true ? 8000 : autoClose);

	let pauseTimer = () => {};
	let startTimer = () => {};

	if (autoClose) {
		pauseTimer = () => {
			if (timer.current) {
				timeToClose.current =
					(timeToClose.current as number) -
					(Date.now() - startedTime.current);

				clearTimeout(timer.current);

				timer.current = undefined;
			}
		};

		startTimer = () => {
			startedTime.current = Date.now();
			timer.current = window.setTimeout(
				onClose,
				timeToClose.current as number
			);
		};
	}

	React.useEffect(() => {
		if (autoClose && onClose) {
			startTimer();

			return pauseTimer;
		}
	}, []);

	return {
		pauseAutoCloseTimer: pauseTimer,
		startAutoCloseTimer: startTimer,
	};
};

export type DisplayType = 'danger' | 'info' | 'success' | 'warning';

interface ClayAlertProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Flag to indicate alert should automatically call `onClose`. It also
	 * accepts a duration(in ms) which indicates how long to wait. If `true`
	 * is passed in, the timeout will be 8000ms.
	 */
	autoClose?: boolean | number;

	/**
	 * Callback function for when the 'x' is clicked.
	 */
	onClose?: () => void;

	/**
	 * Determines the style of the alert.
	 */
	displayType?: DisplayType;

	/**
	 * Path to the spritemap that Icon should use when referencing symbols.
	 */
	spritemap?: string;

	/**
	 * The summary of the Alert, often is something like 'Error' or 'Info'.
	 */
	title: string;

	/**
	 * Determines the variant of the alert.
	 */
	variant?: 'stripe';
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
	autoClose,
	children,
	className,
	displayType = 'info',
	onClose,
	spritemap,
	title,
	variant,
	...otherProps
}) => {
	const {pauseAutoCloseTimer, startAutoCloseTimer} = useAutoClose(
		autoClose,
		onClose
	);

	const ConditionalContainer: React.FunctionComponent<{}> = ({children}) =>
		variant === 'stripe' ? (
			<div className="container">{children}</div>
		) : (
			<>{children}</>
		);

	return (
		<div
			{...otherProps}
			className={classNames(className, 'alert', {
				'alert-dismissible': onClose,
				'alert-fluid': variant === 'stripe',
				[`alert-${displayType}`]: displayType,
			})}
			onMouseOut={startAutoCloseTimer}
			onMouseOver={pauseAutoCloseTimer}
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
