/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';
import Icon from '@clayui/icon';

const useAutoClose = (autoClose?: boolean | number, onClose = () => {}) => {
	const timer = React.useRef<number | undefined>(undefined);

	let cancelTimer = () => {};
	let startTimer = () => {};

	if (autoClose) {
		cancelTimer = () => {
			if (timer.current) {
				clearTimeout(timer.current);

				timer.current = undefined;
			}
		};

		startTimer = () => {
			timer.current = setTimeout(
				onClose,
				autoClose === true ? 8000 : autoClose
			);
		};
	}

	React.useEffect(() => {
		if (autoClose && onClose) {
			startTimer();

			return cancelTimer;
		}
	}, []);

	return {
		cancelAutoCloseTimer: cancelTimer,
		startAutoCloseTimer: startTimer,
	};
};

type DisplayType = 'danger' | 'info' | 'success' | 'warning';

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
	const {cancelAutoCloseTimer, startAutoCloseTimer} = useAutoClose(
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
			onMouseOver={cancelAutoCloseTimer}
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
