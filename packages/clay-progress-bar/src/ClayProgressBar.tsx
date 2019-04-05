/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';
import warning from 'warning';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Flag to indicate if `children` should be wrapped as `feedback`.
	 */
	feedback?: boolean;

	/**
	 * The current value of the progress bar. Should range from 0 to 100.
	 */
	value: number;

	/**
	 * Flag to indicate whether a "warning" color for the bar.
	 */
	warn?: boolean;
}

const ClayProgressBar: React.FunctionComponent<Props> = ({
	children,
	className,
	feedback = true,
	value = 0,
	warn,
	...otherProps
}) => {
	warning(
		value >= 0 || value <= 100,
		'ClayProgressBar requires `value` to be in the range of 0 to 100'
	);

	let addon = children || `${value}%`;

	if (feedback) {
		addon = <div className="progress-group-feedback">{addon}</div>;
	}

	let status;

	if (warn) {
		status = 'warning';
	} else if (value === 100) {
		status = 'success';
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

export default ClayProgressBar;
