/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const ClayPanelBody: React.FunctionComponent<Props> = ({
	children,
	className,
	...otherProps
}) => {
	return (
		<div {...otherProps} className={classNames('panel-body', className)}>
			{children}
		</div>
	);
};

export default ClayPanelBody;
