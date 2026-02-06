/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';

import Container from './Container';

export interface IProps
	extends Omit<
		React.ComponentProps<typeof Container>,
		'fluid' | 'fluidSize'
	> {
	size?: React.ComponentProps<typeof Container>['fluidSize'] | false;
}

const ContainerFluid = React.forwardRef<HTMLElement, IProps>(
	({children, size = 'xl', ...otherProps}: IProps, ref) => {
		return (
			<Container
				{...otherProps}
				fluid
				fluidSize={size === false ? undefined : size}
				ref={ref}
			>
				{children}
			</Container>
		);
	}
);

ContainerFluid.displayName = 'ClayContainerFluid';

export default ContainerFluid;
