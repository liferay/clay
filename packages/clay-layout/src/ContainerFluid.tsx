/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import Container from './Container';

interface IProps
	extends Omit<
		React.ComponentProps<typeof Container>,
		'fluid' | 'fluidSize'
	> {
	size?: React.ComponentProps<typeof Container>['fluidSize'];
}

const ClayContainerFluid: React.FunctionComponent<IProps> = ({
	children,
	size = 'xl',
	...otherProps
}) => {
	return (
		<Container {...otherProps} fluid fluidSize={size}>
			{children}
		</Container>
	);
};

export default ClayContainerFluid;
