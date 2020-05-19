/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import {ClayDropDownWithItems} from '@clayui/drop-down';
import React from 'react';

export interface IPaginationEllipsisProps {
	items?: Array<number>;
	disabledPages?: Array<number>;
	hrefConstructor?: (page?: number) => string;
	onPageChange?: (page?: number) => void;
}

const ClayPaginationEllipsis: React.FunctionComponent<
	IPaginationEllipsisProps
> = ({disabledPages = [], hrefConstructor, items = [], onPageChange}) => {
	const pages = items.map(page => ({
		disabled: disabledPages.includes(page),
		href: hrefConstructor ? hrefConstructor(page) : undefined,
		label: String(page),
		onClick: () => onPageChange && onPageChange(page),
	}));

	return (
		<ClayDropDownWithItems
			className="page-item"
			containerElement="li"
			items={pages}
			trigger={
				<ClayButton className="page-link" displayType="unstyled">
					{'...'}
				</ClayButton>
			}
		/>
	);
};

export default ClayPaginationEllipsis;
