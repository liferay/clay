/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import ClayMultiStepNavDivider from './Divider';
import ClayMultiStepNavIndicator from './Indicator';
import ClayMultiStepNavItem from './Item';
import ClayMultiStepNavTitle from './Title';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLOListElement> {
	/**
	 * Flag to indicate if nav should add `multi-step-nav-collapse-sm` class
	 */
	autoCollapse?: boolean;

	/**
	 * Flag to indicate if nav should add `multi-step-item-fixed-width` class.
	 */
	fixedWidth?: boolean;
}

type MultiStep = React.ForwardRefExoticComponent<
	IProps & React.RefAttributes<HTMLOListElement>
> & {
	Divider: typeof ClayMultiStepNavDivider;
	Indicator: typeof ClayMultiStepNavIndicator;
	Item: typeof ClayMultiStepNavItem;
	Title: typeof ClayMultiStepNavTitle;
};

const ClayMultiStepNav = React.forwardRef(
	(
		{
			autoCollapse = true,
			children,
			className,
			fixedWidth,
			...otherProps
		}: IProps,
		ref
	) => (
		<ol
			className={classNames(
				'multi-step-nav multi-step-indicator-label-bottom',
				className,
				{
					['multi-step-item-fixed-width']: fixedWidth,
					['multi-step-nav-collapse-sm']: autoCollapse,
				}
			)}
			ref={ref}
			{...otherProps}
		>
			{children}
		</ol>
	)
) as MultiStep;

ClayMultiStepNav.Divider = ClayMultiStepNavDivider;
ClayMultiStepNav.Indicator = ClayMultiStepNavIndicator;
ClayMultiStepNav.Item = ClayMultiStepNavItem;
ClayMultiStepNav.Title = ClayMultiStepNavTitle;

export default ClayMultiStepNav;
