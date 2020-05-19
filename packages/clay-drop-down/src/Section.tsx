/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Flag that indicates if item is selected.
	 */
	active?: boolean;

	/**
	 * Flag that indicates if item is disabled or not.
	 */
	disabled?: boolean;

	innerRef?: React.Ref<any>;
}

const ClayDropDownSection = React.forwardRef<HTMLLIElement, IProps>(
	({active, children, className, disabled, innerRef, ...otherProps}, ref) => (
		<li aria-selected={active} ref={ref}>
			<div
				{...otherProps}
				className={classNames('dropdown-section', className, {
					active,
					disabled,
				})}
				ref={innerRef}
			>
				{children}
			</div>
		</li>
	)
);

export default ClayDropDownSection;
