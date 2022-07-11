/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.HTMLAttributes<HTMLLIElement> {
	/**
	 * Flag to indicate if `active` classname should be applied
	 */
	active?: boolean;

	/**
	 * Additional className to apply
	 */
	className?: string;

	/**
	 * Flag to indicate if `complete` classname should be applied
	 */
	complete?: boolean;

	/**
	 * Flag to indicate if progress line should expand out from step
	 */
	expand?: boolean;
}

const ClayMultiStepNavItem = ({
	active,
	children,
	className,
	complete,
	expand,
	...otherProps
}: IProps) => {
	return (
		<li
			className={classNames('multi-step-item', {
				active,
				className,
				complete,
				['multi-step-item-expand']: expand,
			})}
			{...otherProps}
		>
			{children}
		</li>
	);
};

export default ClayMultiStepNavItem;
