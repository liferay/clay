/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {

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

const Section = React.forwardRef<HTMLLIElement, IProps>(
	({active, children, className, disabled, innerRef, ...otherProps}, ref) => (
		<li aria-selected={active} ref={ref} role="none">
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

Section.displayName = 'ClayDropDownSection';

export default Section;
