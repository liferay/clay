/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClayPagination from './Pagination';
import React from 'react';
import {ClayDropDownWithItems} from '@clayui/drop-down';
import {sub} from '@clayui/shared';

const defaultDeltas = [
	{
		label: 10,
	},
	{
		label: 20,
	},
	{
		label: 30,
	},
	{
		label: 50,
	},
];

type Items = React.ComponentProps<typeof ClayDropDownWithItems>['items'];

interface IDelta {
	/**
	 * Path or URL to be used for some SPA focused use cases.
	 */
	href?: string;

	/**
	 * Label of the delta
	 */
	label: number;
}

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	activeDelta?: number;
	/**
	 * Possible values of items per page.
	 */
	deltas?: Array<IDelta>;

	/**
	 * The page numbers that should be disabled. For example, `[2,5,6]`.
	 */
	disabledPages?: Array<number>;

	/**
	 * The number of pages to show on each side of the active page before
	 * using an ellipsis dropdown.
	 */
	ellipsisBuffer?: number;

	/**
	 * Function used to create the href provided for each page link.
	 */
	hrefConstructor?: (page?: number) => string;

	/**
	 * Labels for changing some texts inside the component.
	 * Use this property for i18n.
	 */
	labels?: {
		paginationResults: string;

		perPageItems: string;

		selectPerPageItems: string;
	};

	/**
	 * Callback for when the number of elements per page changes. This is only used if
	 * an href is not provided.
	 */
	onDeltaChange?: (page: number) => void;

	/**
	 * Callback for when the active page changes. This is only used if
	 * an href is not provided.
	 */
	onPageChange?: (page: number) => void;

	/**
	 * Initialize the page that is currently active. The first page is `1`.
	 */
	activePage?: number;

	/**
	 * Initializes delta. Default is `10`.
	 */
	initialSelectedDelta?: IDelta;

	/**
	 * The size of pagination element.
	 */
	size?: 'sm' | 'lg';

	/**
	 * Path to spritemap from clay-css.
	 */
	spritemap: string;

	/**
	 * The total number of items in the pagination list.
	 */
	totalItems: number;
}

const DEFAULT_LABELS = {
	paginationResults: 'Showing {0} to {1} of {2}',
	perPageItems: '{0} items',
	selectPerPageItems: '{0} items',
};

export const ClayPaginationWithBar: React.FunctionComponent<IProps> = ({
	activeDelta,
	activePage = 1,
	deltas = defaultDeltas,
	disabledPages,
	ellipsisBuffer,
	hrefConstructor,
	labels = DEFAULT_LABELS,
	onDeltaChange,
	onPageChange,
	size,
	spritemap,
	totalItems,
	...otherProps
}: IProps) => {
	if (!activeDelta) {
		activeDelta = deltas[0].label;
	}

	const items: Items = deltas.map(({href, label}) => {
		const item: {
			href?: string;
			label?: string;
			onClick?: () => void;
		} = {
			href,
			label: sub(labels.selectPerPageItems, [String(label)]),
		};

		if (!href) {
			item.onClick = () => {
				if (onDeltaChange) {
					onDeltaChange(label as number);
				}
			};
		}

		return item;
	});

	return (
		<div
			className={classNames('pagination-bar', {
				[`pagination-${size}`]: size,
			})}
			{...otherProps}
		>
			<ClayDropDownWithItems
				className="pagination-items-per-page"
				items={items}
				trigger={
					<ClayButton
						data-testid="selectPaginationBar"
						displayType="unstyled"
					>
						{sub(labels.perPageItems, [activeDelta])}

						<ClayIcon
							spritemap={spritemap}
							symbol="caret-double-l"
						/>
					</ClayButton>
				}
			/>

			<div className="pagination-results">
				{sub(labels.paginationResults, [
					(activePage - 1) * activeDelta + 1,
					activePage * activeDelta < totalItems
						? activePage * activeDelta
						: totalItems,
					totalItems,
				])}
			</div>

			<ClayPagination
				activePage={activePage}
				disabledPages={disabledPages}
				ellipsisBuffer={ellipsisBuffer}
				hrefConstructor={hrefConstructor}
				onPageChange={page => {
					if (page && onPageChange) {
						onPageChange(page);
					}
				}}
				spritemap={spritemap}
				totalPages={Math.ceil(totalItems / activeDelta)}
			/>
		</div>
	);
};
