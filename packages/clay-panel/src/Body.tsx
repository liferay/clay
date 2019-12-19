/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import * as React from 'react';

const ClayPanelBody: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> = ({children, className, ...otherProps}) => {
	return (
		<div {...otherProps} className={classNames('panel-body', className)}>
			{children}
		</div>
	);
};

export default ClayPanelBody;
