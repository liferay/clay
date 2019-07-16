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
	 * Path to clay-css spritemap
	 */
	spritemap?: string;
}

const ClayMultiStepNav: React.FunctionComponent<IProps> & {
	Divider: typeof ClayMultiStepNavDivider;
	Indicator: typeof ClayMultiStepNavIndicator;
	Item: typeof ClayMultiStepNavItem;
	Title: typeof ClayMultiStepNavTitle;
} = ({children, className, ...otherProps}) => {
	return (
		<ol
			className={classNames(
				'multi-step-nav multi-step-nav-collapse-sm multi-step-indicator-label-bottom',
				className
			)}
			{...otherProps}
		>
			{children}
		</ol>
	);
};

ClayMultiStepNav.Divider = ClayMultiStepNavDivider;
ClayMultiStepNav.Indicator = ClayMultiStepNavIndicator;
ClayMultiStepNav.Item = ClayMultiStepNavItem;
ClayMultiStepNav.Title = ClayMultiStepNavTitle;

export default ClayMultiStepNav;
