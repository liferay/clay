/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import * as React from 'react';
import ClayButton from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';

export interface PaginationEllipsisProps {
	items?: number[];
	disabledPages?: number[];
	hrefConstructor?: (page?: number) => string;
	onPageChange?: (page?: number) => void;
}

const PaginationEllipsis: React.FunctionComponent<PaginationEllipsisProps> = ({
	disabledPages = [],
	hrefConstructor,
	items,
	onPageChange,
}) => {
	const [active, setActive] = React.useState(false);

	return (
		<ClayDropDown
			active={active}
			className="page-item"
			containerElement="li"
			onActiveChange={newVal => setActive(newVal)}
			trigger={<ClayButton className="page-link">{'...'}</ClayButton>}
		>
			<ClayDropDown.ItemList>
				{items &&
					items.map(page => (
						<ClayDropDown.Item
							disabled={disabledPages.includes(page)}
							href={
								hrefConstructor
									? hrefConstructor(page)
									: 'javascript:;'
							}
							key={page}
							onClick={() => onPageChange && onPageChange(page)}
						>
							{page}
						</ClayDropDown.Item>
					))}
			</ClayDropDown.ItemList>
		</ClayDropDown>
	);
};

export default PaginationEllipsis;
