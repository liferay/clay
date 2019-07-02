/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';
import {Breadcrumb} from './Breadcrumb';

const ClayNavigation: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> & {
	Breadcrumb: typeof Breadcrumb;
} = ({className, ...otherProps}) => {
	return (
		<div {...otherProps} className={classNames(className)}>
			{'ClayNavigation'}
		</div>
	);
};

ClayNavigation.Breadcrumb = Breadcrumb;

export default ClayNavigation;
