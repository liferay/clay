/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import * as React from 'react';
import getCN from 'classnames';

interface Props {
	className?: string;
}

const <%= componentName %>: React.FunctionComponent<Props> = ({
	className,
	...otherProps
}) => {
	return (
		<div {...otherProps} className={getCN(className)}>{'<%= componentName %>'}</div>
	);
};

export default <%= componentName %>;
