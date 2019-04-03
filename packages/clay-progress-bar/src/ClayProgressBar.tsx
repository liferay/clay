/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	feedback?: boolean;
	status?: 'success' | 'warning';
	value: number;
}

const ClayProgressBar: React.FunctionComponent<Props> = ({
	children,
	className,
	feedback,
	status,
	value,
	...otherProps
}) => {
	let addon = children;

	if (feedback) {
		addon = <div className="progress-group-feedback">{addon}</div>;
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
