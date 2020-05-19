/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Flag to indicate if field should automatically expand its width
	 * to fit in the containing space.
	 */
	expand?: boolean;
}

const ClayListItemField: React.FunctionComponent<IProps> = ({
	children,
	className,
	expand,
	...otherProps
}: IProps) => {
	return (
		<div
			{...otherProps}
			className={classNames('autofit-col', className, {
				'autofit-col-expand': expand,
			})}
		>
			{children}
		</div>
	);
};

export default ClayListItemField;
