/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const ClaySidebar: React.FunctionComponent<IProps> = ({
	className,
	...otherProps
}) => {
	return (
		<div {...otherProps} className={classNames(className)}>{'ClaySidebar'}</div>
	);
};

export default ClaySidebar;
