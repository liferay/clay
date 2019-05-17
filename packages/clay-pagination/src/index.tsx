/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import classNames from 'classnames';
import ClayIcon from '@clayui/icon';
import PaginationEllipsis, {
	PaginationEllipsisProps,
} from './PaginationEllipsis';
import PaginationItem from './PaginationItem';
import React from 'react';

const ELLIPSIS_BUFFER = 2;

const getBufferList = (
	items: number[],
	start: number,
	end: number,
	ellipsisProps: PaginationEllipsisProps
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
	ellipsisProps: PaginationEllipsisProps
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

interface Props extends React.HTMLAttributes<HTMLUListElement> {
	activePage: number;
	ellipsisBuffer?: number;
	disabledPages?: number[];
	hrefConstructor?: (page?: number) => string;
	onPageChange?: (page?: number) => void;
	totalPages: number;
	spritemap: string;
}

const Pagination: React.FunctionComponent<Props> = ({
	activePage,
	className,
	disabledPages = [],
	ellipsisBuffer = ELLIPSIS_BUFFER,
	hrefConstructor,
	onPageChange,
	spritemap,
	totalPages,
}) => {
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
