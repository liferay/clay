/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

export interface ICardGroupProps
	extends React.HTMLAttributes<HTMLUListElement> {

	/**
	 * Header's label of Card Group
	 */
	label?: string;
}

function Group({children, className, label, ...otherProps}: ICardGroupProps) {
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
}

export default Group;
