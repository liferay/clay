/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import Menu from './Menu';

import type {Messages} from './Menu';

const Inner = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(function InnerForward(
	{children, className, ...otherProps}: React.HTMLAttributes<HTMLDivElement>,
	ref
) {
	return (
		<div
			{...otherProps}
			className={classNames(className, 'drilldown-inner')}
			ref={ref}
		>
			{children}
		</div>
	);
});

export type {Messages};
export default {Inner, Menu};
