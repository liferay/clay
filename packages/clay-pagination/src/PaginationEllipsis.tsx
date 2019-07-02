/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayButton from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import React, {useState} from 'react';

export interface IPaginationEllipsisProps {
	items?: number[];
	disabledPages?: number[];
	hrefConstructor?: (page?: number) => string;
	onPageChange?: (page?: number) => void;
}

const ClayPaginationEllipsis: React.FunctionComponent<
	IPaginationEllipsisProps
> = ({disabledPages = [], hrefConstructor, items, onPageChange}) => {
	const [active, setActive] = useState(false);

	return (
		<ClayDropDown
			active={active}
			className="page-item"
			containerElement="li"
			onActiveChange={newVal => setActive(newVal)}
			trigger={
				<ClayButton className="page-link" displayType="unstyled">
					{'...'}
				</ClayButton>
			}
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

export default ClayPaginationEllipsis;
