/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import {getEllipsisItems} from '@clayui/shared';
import classNames from 'classnames';
import React from 'react';

import PaginationEllipsis from './PaginationEllipsis';
import PaginationItem from './PaginationItem';

const ELLIPSIS_BUFFER = 2;

interface IProps extends React.HTMLAttributes<HTMLUListElement> {
	/**
	 * The page that is currently active. The first page is `1`.
	 */
	activePage: number;

	/**
	 * The number of pages to show on each side of the active page before
	 * using an ellipsis dropdown.
	 */
	ellipsisBuffer?: number;

	/**
	 * The page numbers that should be disabled. For example, `[2,5,6]`.
	 */
	disabledPages?: Array<number>;

	/**
	 * Function used to create the href provided for each page link.
	 */
	hrefConstructor?: (page?: number) => string;

	/**
	 * Callback for when the active page changes. This is only used if
	 * an href is not provided.
	 */
	onPageChange?: (page?: number) => void;

	/**
	 * The total number of pages in the pagination list.
	 */
	totalPages: number;

	/**
	 * The size of pagination element.
	 */
	size?: 'lg' | 'sm';

	/**
	 * Path to spritemap from clay-css.
	 */
	spritemap?: string;
}

const ClayPagination: React.FunctionComponent<IProps> = ({
	activePage,
	className,
	disabledPages = [],
	ellipsisBuffer = ELLIPSIS_BUFFER,
	hrefConstructor,
	onPageChange,
	size,
	spritemap,
	totalPages,
}: IProps) => {
	const previousPage = activePage - 1;
	const previousHref = hrefConstructor && hrefConstructor(previousPage);

	const nextPage = activePage + 1;
	const nextHref = hrefConstructor && hrefConstructor(nextPage);

	const pages = Array(totalPages)
		.fill(0)
		.map((item, index) => index + 1);

	return (
		<ul
			className={classNames('pagination pagination-root', className, {
				[`pagination-${size}`]: size,
			})}
		>
			<PaginationItem
				data-testid="prevArrow"
				disabled={activePage === 1}
				href={previousHref}
				onClick={() => onPageChange && onPageChange(previousPage)}
			>
				<ClayIcon spritemap={spritemap} symbol="angle-left" />
			</PaginationItem>

			{(ellipsisBuffer
				? getEllipsisItems(
						{
							EllipsisComponent: PaginationEllipsis,
							ellipsisProps: {
								disabledPages,
								hrefConstructor,
								onPageChange,
							},
							items: pages,
						},
						ellipsisBuffer,
						activePage - 1
				  )
				: pages
			).map((page: number | JSX.Element | Object, index: number) =>
				React.isValidElement(page) ? (
					React.cloneElement(page, {key: `ellipsis${index}`})
				) : (
					<PaginationItem
						active={page === activePage}
						disabled={disabledPages.includes(page as number)}
						href={
							hrefConstructor && hrefConstructor(page as number)
						}
						key={page as number}
						onClick={() =>
							onPageChange && onPageChange(page as number)
						}
					>
						{page}
					</PaginationItem>
				)
			)}

			<PaginationItem
				data-testid="nextArrow"
				disabled={activePage === totalPages}
				href={nextHref}
				onClick={() => onPageChange && onPageChange(nextPage)}
			>
				<ClayIcon spritemap={spritemap} symbol="angle-right" />
			</PaginationItem>
		</ul>
	);
};

export default ClayPagination;
