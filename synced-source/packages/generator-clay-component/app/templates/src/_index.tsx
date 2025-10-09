/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
import classNames from 'classnames';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const <%= componentName %> = ({
	className,
	...otherProps
}: IProps) => {
	return (
		<div {...otherProps} className={classNames(className)}>{'<%= componentName %>'}</div>
	);
};

export default <%= componentName %>;
