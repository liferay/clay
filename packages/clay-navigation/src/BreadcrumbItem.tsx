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
	onItemClick?: (event: React.SyntheticEvent) => void;
}

export const BreadcrumbItem = ({
	active,
	href,
	label,
	onItemClick,
	...otherProps
}: IBreadcrumbItem) => {
	const ItemElement = ({
		active,
		href,
		label,
		onItemClick,
	}: IBreadcrumbItem) => {
		if (!active) {
			if (href) {
				return (
					<a
						className="breadcrumb-link"
						data-testid={`testId${label}`}
						href={href}
						role="button"
					>
						{label}
					</a>
				);
			}

			if (onItemClick) {
				return (
					<ClayButton
						className="breadcrumb-text-truncate"
						data-testid={`testId${label}`}
						displayType="unstyled"
						onClick={onItemClick}
						title={label}
					>
						{label}
					</ClayButton>
				);
			}
		}

		return (
			<span
				className="breadcrumb-text-truncate"
				data-testid={`testId${label}`}
				title={label}
			>
				{label}
			</span>
		);
	};

	return (
		<li
			className={classNames('breadcrumb-item', {
				active,
			})}
			{...otherProps}
		>
			<ItemElement
				active={active}
				href={href}
				label={label}
				onItemClick={onItemClick}
			/>
		</li>
	);
};
