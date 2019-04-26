/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';
import ClayButton from '@clayui/button';

const DropDownAction: React.FunctionComponent<
	React.HTMLAttributes<HTMLButtonElement>
> = ({children, className, ...otherProps}) => {
	return (
		<div className={classNames('dropdown-section', className)}>
			<ClayButton {...otherProps}>{children}</ClayButton>
		</div>
	);
};

export default DropDownAction;
