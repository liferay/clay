/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import classNames from 'classnames';
import ClayButton from '@clayui/button';
import React from 'react';

export interface IBreadcrumbItem {
	/**
	 * Flag to indicate if the Breadcrumb item is active or not.
	 */
	active?: boolean;

	/**
	 * This value is used to be the target of the link.
	 */
	href?: string;

	/**
	 * Label of the Breadcrumb item
	 */
	label: string;

	/**
	 * Callback for when a Breadcrumb item is clicked.
	 */
	onClick?: (event: React.SyntheticEvent) => void;
}

export const BreadcrumbItem = ({
	active,
	href,
	label,
	onClick,
	...otherProps
}: IBreadcrumbItem) => (
	<li
		className={classNames('breadcrumb-item', {
			active,
		})}
		{...otherProps}
	>
		{!active && href ? (
			<a
				className="breadcrumb-link"
				data-testid={`testId${label}`}
				href={href}
				role="button"
			>
				<span className="breadcrumb-text-truncate">{label}</span>
			</a>
		) : !active && onClick ? (
			<ClayButton
				className="breadcrumb-link"
				data-testid={`testId${label}`}
				displayType="unstyled"
				onClick={onClick}
				title={label}
			>
				<span className="breadcrumb-text-truncate">{label}</span>
			</ClayButton>
		) : (
			<span
				className="breadcrumb-text-truncate"
				data-testid={`testId${label}`}
				title={label}
			>
				{label}
			</span>
		)}
	</li>
);
