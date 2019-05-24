/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';

interface CardGroupProps extends React.HTMLAttributes<HTMLUListElement> {
	children: React.ReactElement<HTMLBaseElement>[] | React.ReactElement;

	/**
	 * Header's label of Card Group
	 */
	label?: string;
}

export type CardGroupType = React.FunctionComponent<CardGroupProps>;

export const Group: React.FunctionComponent<CardGroupProps> = ({
	children,
	className,
	label,
	...otherProps
}) => {
	return (
		<ul {...otherProps} className={classNames('card-page', className)}>
			{label && (
				<li className="card-page-item card-page-item-header">
					<p className="card-section-header">{label}</p>
				</li>
			)}

			{React.Children.map(children, (child, index) => (
				<li
					className="card-page-item card-page-item-directory"
					key={index}
				>
					{child}
				</li>
			))}
		</ul>
	);
};

export default Group;
