/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Receives a number that indicates the `tabkey` to be rendered.
	 */
	activeTabKey: number;

	/**
	 * Children elements received from ClayTabs.Content component.
	 */
	children: Array<React.ReactElement>;

	/**
	 * Flag to indicate if `fade` classname that applies an fading animation should be applied.
	 */
	fade?: boolean;
}

const Content: React.FunctionComponent<IProps> = ({
	activeTabKey = 0,
	children,
	className,
	fade = false,
	...otherProps
}: IProps) => {
	return (
		<div className={classNames('tab-content', className)} {...otherProps}>
			{React.Children.map(children, (child, index) => {
				return React.cloneElement(child, {
					...child.props,
					active: activeTabKey === index,
					fade,
					key: index,
				});
			})}
		</div>
	);
};

export default Content;
