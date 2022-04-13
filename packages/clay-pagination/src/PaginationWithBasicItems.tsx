/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import {
	InternalDispatch,
	getEllipsisItems,
	useInternalState,
} from '@clayui/shared';
import React from 'react';

import Pagination from './Pagination';

import type {IPaginationEllipsisProps} from './Ellipsis';

const ELLIPSIS_BUFFER = 2;

interface IProps extends React.ComponentProps<typeof Pagination> {
	/**
	 * Sets the currently active page (controlled).
	 */
	active?: number;

	/**
	 * The page that is currently active. The first page is `1`.
	 * @deprecated since v3.49.0 - use `active` instead.
	 */
	activePage?: number;

	/**
	 * Sets the default DropDown position of the component. The component
	 * receives the Align constant values from the `@clayui/drop-down` package.
	 */
	alignmentPosition?: IPaginationEllipsisProps['alignmentPosition'];

	/**
	 * Labels for the aria attributes
	 */
	ariaLabels?: {
		previous: string;
		next: string;
	};

	/**
	 * The number of pages to show on each side of the active page before
	 * using an ellipsis dropdown.
	 */
	ellipsisBuffer?: number;

	/**
	 * Sets the default active page (uncontrolled).
	 */
	defaultActive?: number;

	/**
	 * Flag to disable ellipsis button
	 */
	disableEllipsis?: boolean;

	/**
	 * The page numbers that should be disabled. For example, `[2,5,6]`.
	 */
	disabledPages?: Array<number>;

	/**
	 * Function used to create the href provided for each page link.
	 */
	hrefConstructor?: (page?: number) => string;

	/**
	 * Callback called when the state of the active page changes (controlled).
	 * This is only used if an href is not provided.
	 */
	onActiveChange?: InternalDispatch<number>;

	/**
	 * Callback for when the active page changes. This is only used if
	 * an href is not provided.
	 * @deprecated since v3.49.0 - use `onActiveChange` instead.
	 */
	onPageChange?: InternalDispatch<number>;

	/**
	 * The total number of pages in the pagination list.
	 */
	totalPages: number;

	/**
	 * Path to spritemap from clay-css.
	 */
	spritemap?: string;
}

const ClayPaginationWithBasicItems = React.forwardRef<HTMLUListElement, IProps>(
	(
		{
			active,
			activePage,
			alignmentPosition,
			ariaLabels = {
				next: 'Next',
				previous: 'Previous',
			},
			defaultActive,
			disabledPages = [],
			disableEllipsis = false,
			ellipsisBuffer = ELLIPSIS_BUFFER,
			hrefConstructor,
			onActiveChange,
			onPageChange,
			spritemap,
			totalPages,
			...otherProps
		}: IProps,
		ref
	) => {
		const [internalActive, setActive] = useInternalState({
			defaultName: 'defaultActive',
			defaultValue: defaultActive,
			handleName: 'onActiveChange',
			name: 'value',
			onChange: onActiveChange ?? onPageChange,
			value: typeof active === 'undefined' ? activePage : active,
		});

		const previousPage = internalActive - 1;
		const previousHref = hrefConstructor && hrefConstructor(previousPage);

		const nextPage = internalActive + 1;
		const nextHref = hrefConstructor && hrefConstructor(nextPage);

		const pages = Array(totalPages)
			.fill(0)
			.map((item, index) => index + 1);

		return (
			<Pagination {...otherProps} ref={ref}>
				<Pagination.Item
					aria-label={ariaLabels.previous}
					data-testid="prevArrow"
					disabled={internalActive === 1}
					href={previousHref}
					onClick={() => setActive(previousPage)}
				>
					<ClayIcon spritemap={spritemap} symbol="angle-left" />
				</Pagination.Item>

				{(ellipsisBuffer
					? getEllipsisItems(
							{
								EllipsisComponent: Pagination.Ellipsis,
								ellipsisProps: {
									alignmentPosition,
									disabled: disableEllipsis,
									disabledPages,
									hrefConstructor,
									onPageChange: setActive,
								},
								items: pages,
							},
							ellipsisBuffer,
							internalActive - 1
					  )
					: pages
				).map((page: number | JSX.Element | Object, index: number) =>
					React.isValidElement(page) ? (
						React.cloneElement(page, {key: `ellipsis${index}`})
					) : (
						<Pagination.Item
							active={page === internalActive}
							disabled={disabledPages.includes(page as number)}
							href={
								hrefConstructor &&
								hrefConstructor(page as number)
							}
							key={page as number}
							onClick={() => setActive(page as number)}
						>
							{page}
						</Pagination.Item>
					)
				)}

				<Pagination.Item
					aria-label={ariaLabels.next}
					data-testid="nextArrow"
					disabled={internalActive === totalPages}
					href={nextHref}
					onClick={() => setActive(nextPage)}
				>
					<ClayIcon spritemap={spritemap} symbol="angle-right" />
				</Pagination.Item>
			</Pagination>
		);
	}
);

ClayPaginationWithBasicItems.displayName = 'ClayPaginationWithBasicItems';

export {ClayPaginationWithBasicItems};
