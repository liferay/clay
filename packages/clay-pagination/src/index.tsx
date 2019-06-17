/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import classNames from 'classnames';
import ClayIcon from '@clayui/icon';
import PaginationEllipsis, {
	IPaginationEllipsisProps,
} from './PaginationEllipsis';
import PaginationItem from './PaginationItem';
import React from 'react';

const ELLIPSIS_BUFFER = 2;

const getBufferList = (
	items: number[],
	start: number,
	end: number,
	ellipsisProps: IPaginationEllipsisProps
): (number | JSX.Element)[] => {
	const removedItems = items.slice(start, Math.max(end, start));

	return removedItems.length > 1
		? [
				<PaginationEllipsis
					{...ellipsisProps}
					items={removedItems}
					key="paginationEllipsis"
				/>,
		  ]
		: removedItems;
};

const getPages = (
	activeIndex: number,
	ellipsisBuffer: number,
	pages: number[],
	ellipsisProps: IPaginationEllipsisProps
) => {
	const lastIndex = pages.length - 1;

	const leftBufferEnd = activeIndex - ellipsisBuffer;
	// Add 1 to account for active index
	const rightBufferStart = activeIndex + ellipsisBuffer + 1;

	const leftBuffer = getBufferList(pages, 1, leftBufferEnd, ellipsisProps);
	const rightBuffer = getBufferList(
		pages,
		rightBufferStart,
		lastIndex,
		ellipsisProps
	);

	return [
		pages[0],
		...leftBuffer,
		...pages.slice(
			Math.max(activeIndex - ellipsisBuffer, 1),
			// Add 1 to account for active index
			Math.min(activeIndex + ellipsisBuffer + 1, lastIndex)
		),
		...rightBuffer,
		pages[lastIndex],
	];
};

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
	disabledPages?: number[];

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
	 * Path to spritemap from clay-css.
	 */
	spritemap: string;
}

const Pagination: React.FunctionComponent<IProps> = ({
	activePage,
	className,
	disabledPages = [],
	ellipsisBuffer = ELLIPSIS_BUFFER,
	hrefConstructor,
	onPageChange,
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
		<ul className={classNames('pagination pagination-root', className)}>
			<PaginationItem
				data-testid="prevArrow"
				disabled={activePage === 1}
				href={previousHref}
				onClick={() => onPageChange && onPageChange(previousPage)}
			>
				<ClayIcon spritemap={spritemap} symbol="angle-left" />
			</PaginationItem>

			{(ellipsisBuffer
				? getPages(activePage - 1, ellipsisBuffer, pages, {
						disabledPages,
						hrefConstructor,
						onPageChange,
				  })
				: pages
			).map((page: number | JSX.Element, index: number) =>
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

export default Pagination;
