/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import {ClayDropDownWithItems} from '@clayui/drop-down';
import {sub} from '@clayui/shared';
import React from 'react';

export interface IPaginationEllipsisProps {
	'aria-label'?: string;
	alignmentPosition?: React.ComponentProps<
		typeof ClayDropDownWithItems
	>['alignmentPosition'];
	disabled?: boolean;
	disabledPages?: Array<number>;
	hrefConstructor?: (page?: number) => string;
	items?: Array<number>;
	onPageChange?: (page?: number) => void;
	title?: string;
}

const ClayPaginationEllipsis = ({
	alignmentPosition,
	disabled = false,
	disabledPages = [],
	hrefConstructor,
	items = [],
	onPageChange,
	...otherProps
}: IPaginationEllipsisProps) => {
	const pages = disabled
		? []
		: items.map((page) => ({
				disabled: disabledPages.includes(page),
				href: hrefConstructor ? hrefConstructor(page) : undefined,
				label: String(page),
				onClick: () => onPageChange && onPageChange(page),
		  }));

	const ariaLabel =
		otherProps['aria-label'] && !disabled
			? sub(otherProps['aria-label'], [
					pages[0]?.label as string,
					pages[pages.length - 1]?.label as string,
			  ])
			: undefined;

	const title =
		otherProps['title'] && !disabled
			? sub(otherProps['title'], [
					pages[0]?.label as string,
					pages[pages.length - 1]?.label as string,
			  ])
			: undefined;

	return (
		<ClayDropDownWithItems
			alignmentPosition={alignmentPosition}
			className="page-item"
			containerElement="li"
			items={pages}
			trigger={
				<ClayButton
					{...otherProps}
					aria-label={ariaLabel}
					className="page-link"
					disabled={disabled}
					displayType="unstyled"
					title={title}
				>
					...
				</ClayButton>
			}
		/>
	);
};

export default ClayPaginationEllipsis;
