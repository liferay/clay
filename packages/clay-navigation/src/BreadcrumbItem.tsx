/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import classNames from 'classnames';
import React from 'react';

export interface IBreadcrumbItem {
	active?: boolean;

	href: string;

	label: string;
}

export const BreadcrumbItem = ({
	active,
	href,
	label,
	...otherProps
}: IBreadcrumbItem) => {
	return (
		<li
			className={classNames('breadcrumb-item', {
				active,
			})}
			{...otherProps}
		>
			{active ? (
				<span className="breadcrumb-text-truncate" title={label}>
					{label}
				</span>
			) : (
				<a className="breadcrumb-link" href={href} role="button">
					{label}
				</a>
			)}
		</li>
	);
};
