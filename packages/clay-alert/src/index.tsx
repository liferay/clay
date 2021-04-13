/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Icon from '@clayui/icon';
import ClayLayout from '@clayui/layout';
import classNames from 'classnames';
import React from 'react';

import Footer from './Footer';
import ToastContainer from './ToastContainer';

const useAutoClose = (autoClose?: boolean | number, onClose = () => {}) => {
	const startedTime = React.useRef<number>(0);
	const timer = React.useRef<number | undefined>(undefined);
	const timeToClose = React.useRef(autoClose === true ? 10000 : autoClose);

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

export interface IClayAlertProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Flag to indicate alert should automatically call `onClose`. It also
	 * accepts a duration (in ms) which indicates how long to wait. If `true`
	 * is passed in, the timeout will be 10000ms.
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
	 * Flag to indicate if close icon should be show. This prop is used in
	 * conjunction with the `onClose`prop;
	 */
	hideCloseIcon?: boolean;

	/**
	 * Path to the spritemap that Icon should use when referencing symbols.
	 */
	spritemap?: string;

	/**
	 * The summary of the Alert, often is something like 'Error' or 'Info'.
	 */
	title?: string;

	/**
	 * Determines the variant of the alert.
	 */
	variant?: 'feedback' | 'stripe';
}

const ICON_MAP = {
	danger: 'exclamation-full',
	info: 'info-circle',
	success: 'check-circle-full',
	warning: 'warning-full',
};

const ClayAlert: React.FunctionComponent<IClayAlertProps> & {
	Footer: typeof Footer;
	ToastContainer: typeof ToastContainer;
} = ({
	autoClose,
	children,
	className,
	displayType = 'info',
	hideCloseIcon = false,
	onClose,
	spritemap,
	title,
	variant,
	...otherProps
}: IClayAlertProps) => {
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

	const showDismissible = onClose && !hideCloseIcon;

	return (
		<div
			{...otherProps}
			className={classNames(className, 'alert', {
				'alert-dismissible': showDismissible,
				'alert-feedback': variant === 'feedback',
				'alert-fluid': variant === 'stripe',
				[`alert-${displayType}`]: displayType,
			})}
			onMouseOut={startAutoCloseTimer}
			onMouseOver={pauseAutoCloseTimer}
			role="alert"
		>
			<ConditionalContainer>
				<ClayLayout.ContentRow className="alert-autofit-row">
					<ClayLayout.ContentCol>
						<ClayLayout.ContentSection>
							<span className="alert-indicator">
								<Icon
									spritemap={spritemap}
									symbol={ICON_MAP[displayType]}
								/>
							</span>
						</ClayLayout.ContentSection>
					</ClayLayout.ContentCol>

					<ClayLayout.ContentCol expand>
						<ClayLayout.ContentSection>
							{title && <strong className="lead">{title}</strong>}

							{children}
						</ClayLayout.ContentSection>
					</ClayLayout.ContentCol>
				</ClayLayout.ContentRow>

				{showDismissible && (
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

ClayAlert.Footer = Footer;
ClayAlert.ToastContainer = ToastContainer;

export default ClayAlert;
