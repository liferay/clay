/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import classNames from 'classnames';
import ClayButton from '@clayui/button';
import React from 'react';

export interface IBreadcrumbItem {
	active?: boolean;
	href?: string;
	label: string;

	/**
	 * Callback for when a Breadcrumb item is clicked.
	 */
	onItemClick?: (event: React.SyntheticEvent) => void;
}

export const BreadcrumbItem = ({
	active,
	href,
	label,
	onItemClick,
	...otherProps
}: IBreadcrumbItem) => {
	return (
		<li
			className={classNames('breadcrumb-item', {
				active,
			})}
			onClick={onItemClick}
			{...otherProps}
		>
			{href ? (
				<a className="breadcrumb-link" href={href} role="button">
					{label}
				</a>
			) : (
				<ClayButton
					className="breadcrumb-text-truncate"
					displayType="unstyled"
					title={label}
				>
					{label}
				</ClayButton>
			)}
		</li>
	);
};
