/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

import ClayMultiStepNavDivider from './Divider';
import ClayMultiStepNavIndicator from './Indicator';
import ClayMultiStepNavItem from './Item';
import ClayMultiStepNavTitle from './Title';

interface IProps extends React.HTMLAttributes<HTMLOListElement> {

	/**
	 * Flag to indicate if nav should add `multi-step-nav-collapse-sm` class
	 */
	autoCollapse?: boolean;

	/**
	 * Flag to indicate if nav should add the `multi-step-nav-center` class.
	 */
	center?: boolean;

	/**
	 * Flag to indicate if nav should add `multi-step-item-fixed-width` class.
	 */
	fixedWidth?: boolean;

	/**
	 * Flag to indicate the position of the indicator label.
	 */
	indicatorLabel?: 'bottom' | 'top';
}

function MultiStepNav({
	autoCollapse = true,
	center,
	children,
	className,
	fixedWidth,
	indicatorLabel = 'bottom',
	...otherProps
}: IProps) {
	return (
		<ol
			className={classNames('multi-step-nav', className, {
				'multi-step-item-fixed-width': fixedWidth,
				'multi-step-nav-center': center,
				'multi-step-nav-collapse-sm': autoCollapse,
				[`multi-step-indicator-label-${indicatorLabel}`]:
					indicatorLabel,
			})}
			{...otherProps}
		>
			{children}
		</ol>
	);
}

MultiStepNav.Divider = ClayMultiStepNavDivider;
MultiStepNav.Indicator = ClayMultiStepNavIndicator;
MultiStepNav.Item = ClayMultiStepNavItem;
MultiStepNav.Title = ClayMultiStepNavTitle;

export default MultiStepNav;
