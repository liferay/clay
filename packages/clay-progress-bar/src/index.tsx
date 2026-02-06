/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import Icon from '@clayui/icon';
import {sub} from '@clayui/shared';
import classNames from 'classnames';
import React from 'react';
import warning from 'warning';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {

	/**
	 * Flag to indicate if `children` should be wrapped as `feedback`.
	 */
	feedback?: boolean;

	/**
	 * Aria Messages for the Progress Bar.
	 */
	messages?: {
		ariaLabelAttention: string;
		ariaLabelComplete: string;
		ariaLabelInProgress: string;
	};

	/**
	 * Path to spritemap for icon symbol.
	 */
	spritemap?: string;

	/**
	 * The current value of the progress bar. Should range from 0 to 100.
	 */
	value: number;

	/**
	 * Flag to indicate whether a "warning" color for the bar.
	 */
	warn?: boolean;
}

const defaultMessages = {
	ariaLabelAttention: 'Attention: Value is at {0}%',
	ariaLabelComplete: 'Complete',
	ariaLabelInProgress: 'Progress: {0}%',
};

const ProgressBar = ({
	children,
	className,
	feedback = false,
	messages: externalMessages,
	spritemap,
	value = 0,
	warn,
	...otherProps
}: IProps) => {
	warning(
		value >= 0 && value <= 100,
		`ClayProgressBar requires \`value\` to be in the range of 0 to 100, it received ${value}.`
	);

	const messages = {
		...defaultMessages,
		...(externalMessages ?? {}),
	};

	value = Math.min(Math.max(value, 0), 100);

	let addon =
		children ||
		(value === 100 ? (
			<Icon spritemap={spritemap} symbol="check-circle" />
		) : (
			`${value}%`
		));

	if (value === 100 || feedback) {
		addon = <div className="progress-group-feedback">{addon}</div>;
	}

	let status;

	if (warn) {
		status = 'warning';
	}
	else if (value === 100) {
		status = 'success';
	}

	let ariaLabel: string;

	if (warn) {
		ariaLabel = sub(messages.ariaLabelAttention, [value]);
	}
	else if (value === 100) {
		ariaLabel = messages.ariaLabelComplete;
	}
	else {
		ariaLabel = sub(messages.ariaLabelInProgress, [value]);
	}

	return (
		<div
			{...otherProps}
			className={classNames(className, 'progress-group', {
				[`progress-${status}`]: status,
			})}
		>
			<div className="progress">
				<div
					aria-label={otherProps['aria-label'] || ariaLabel}
					aria-valuemax={100}
					aria-valuemin={0}
					aria-valuenow={value}
					className="progress-bar"
					role="progressbar"
					style={{width: `${value}%`}}
				/>
			</div>

			{addon && <div className="progress-group-addon">{addon}</div>}
		</div>
	);
};

export default ProgressBar;
