/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

interface IDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Divider: React.FunctionComponent<IDividerProps> = ({...otherProps}) => {
	return <div {...otherProps}>{'Should be a divider'}</div>;
};

Divider.displayName = 'Divider';

export default Divider;
