/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import ClayButton from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import ClayPagination from '../src/index';
import React, {useState} from 'react';
import {noop, sub} from '@clayui/shared';

const defaultDeltas = [
	{
		label: '10',
		value: 10,
	},
	{
		label: '20',
		value: 20,
	},
	{
		label: '30',
		value: 30,
	},
	{
		label: '50',
		value: 50,
	},
];

interface IDelta {
	label: string;

	value: number;
}

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	deltas?: Array<IDelta>;

	disabledPages?: number[];

	ellipsisBuffer?: number;

	hrefConstructor?: (page?: number) => string;

	labels?: {
		paginationResults: string;

		perPageItems: string;

		selectPerPageItems: string;
	};

	onDeltaChange?: (page?: number) => void;

	onPageChange?: (page?: number) => void;

	selectedDelta?: number;

	selectedPage?: number;

	size?: 'sm' | 'lg';

	spritemap: string;

	totalItems: number;
}

const DEFAULT_LABELS = {
	paginationResults: 'Showing {0} to {1} of {2}',
	perPageItems: '{0} items',
	selectPerPageItems: '{0} items',
};

export const ClayPaginationWithBar: React.FunctionComponent<IProps> = ({
	deltas = defaultDeltas,
	disabledPages,
	ellipsisBuffer,
	hrefConstructor,
	labels = DEFAULT_LABELS,
	onDeltaChange = noop,
	onPageChange = noop,
	selectedDelta = defaultDeltas[0].value,
	selectedPage = 1,
	size,
	spritemap,
	totalItems,
	...otherProps
}: IProps) => {
	const [active, setActive] = useState<boolean>(false);
	const [activePage, setActivePage] = useState<number>(selectedPage);
	const [perPage, setPerPage] = useState<number>(selectedDelta);

	return (
		<div
			className={classNames('pagination-bar', {
				[`pagination-${size}`]: size,
			})}
			{...otherProps}
		>
			<ClayDropDown
				active={active}
				className="pagination-items-per-page"
				onActiveChange={newVal => setActive(newVal)}
				trigger={
					<ClayButton
						data-testid="selectPaginationBar"
						displayType="unstyled"
					>
						{sub(labels.perPageItems, [perPage])}
						<ClayIcon
							spritemap={spritemap}
							symbol="caret-double-l"
						/>
					</ClayButton>
				}
			>
				<ClayDropDown.ItemList>
					{deltas.map((item, i) => (
						<ClayDropDown.Item
							data-testid={`dropdownItem${i}`}
							key={`dropdownItem${i}`}
							onClick={() => {
								setPerPage(item.value);
								if (onDeltaChange) {
									onDeltaChange(item.value);
								}
							}}
						>
							{sub(labels.selectPerPageItems, [item.label])}
						</ClayDropDown.Item>
					))}
				</ClayDropDown.ItemList>
			</ClayDropDown>

			<div className="pagination-results">
				{sub(labels.paginationResults, [
					activePage,
					Math.ceil(totalItems / perPage),
					totalItems,
				])}
			</div>

			<ClayPagination
				activePage={activePage}
				disabledPages={disabledPages}
				ellipsisBuffer={ellipsisBuffer}
				hrefConstructor={hrefConstructor}
				onPageChange={page => {
					if (page) {
						setActivePage(page);
						if (onPageChange) {
							onPageChange(page);
						}
					}
				}}
				spritemap={spritemap}
				totalPages={Math.ceil(totalItems / perPage)}
			/>
		</div>
	);
};
