/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classnames from 'classnames';

const DropDownHelp: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> = ({children, className, ...otherProps}) => {
	return (
		<div
			{...otherProps}
			className={classnames('alert alert-fluid alert-info', className)}
			role="alert"
		>
			{children}
		</div>
	);
};

export default DropDownHelp;
