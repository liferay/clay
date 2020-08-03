/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import Menu from './Menu';

const Inner: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = ({
	children,
	className,
	...otherProps
}) => (
	<div className={classNames(className, 'drilldown-inner')} {...otherProps}>
		{children}
	</div>
);

export default {Inner, Menu};
