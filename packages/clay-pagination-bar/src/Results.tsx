/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

const ClayPaginationBarResults = ({
	children,
	className,
	...otherProps
}: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div
			{...otherProps}
			className={classNames(className, 'pagination-results')}
		>
			{children}
		</div>
	);
};

export default ClayPaginationBarResults;
