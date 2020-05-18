/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Element or component to render for container
	 */
	containerElement?: React.JSXElementConstructor<{
		className: string;
		[key: string]: any;
	}>;

	/**
	 * Adds `.container-fluid` class to create a fluid container that
	 * doesn't expand beyond a set width
	 */
	fluid?: boolean;

	/**
	 * Adds `.container-fluid-${size}` class to set max width on container.
	 */
	fluidSize?: 'sm' | 'md' | 'lg' | 'xl';

	/**
	 * Adds the `.container-form-${formSize}` class to properly space
	 * between application controls and the form. This class only modifies
	 * the padding on the container.
	 */
	formSize?: 'sm' | 'md' | 'lg' | 'xl';

	/**
	 * Adds the `.container-view` class to properly space between application
	 * controls and view pages (e.g., Card View, Table View, or List View).
	 * This class only modifies the padding on the container.
	 */
	view?: boolean;
}

const ClayContainer: React.FunctionComponent<IProps> = ({
	children,
	className,
	containerElement: ContainerElement = 'div',
	fluid,
	fluidSize,
	formSize,
	view,
	...otherProps
}) => {
	return (
		<ContainerElement
			{...otherProps}
			className={classNames(className, {
				container: !fluid,
				'container-fluid': fluid,
				[`container-form-${formSize}`]: formSize,
				'container-view': view,
				[`container-fluid-max-${fluidSize}`]: fluid && fluidSize,
			})}
		>
			{children}
		</ContainerElement>
	);
};

export default ClayContainer;
