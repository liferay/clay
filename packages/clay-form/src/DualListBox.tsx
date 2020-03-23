/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayButtonWithIcon} from '@clayui/button';
import classNames from 'classnames';
import React from 'react';

import ClaySelectBox, {TItem, getSelectedIndexes} from './SelectBox';

type TItems = Array<Array<TItem>>;

function swapArrayItems(arrays: TItems, selectedIndexes: Array<number>) {
	const [sourceArray, targetArray] = arrays;

	const newTargetArray = [...targetArray];

	const newSourceArray = sourceArray.filter((item, index) => {
		if (selectedIndexes.includes(index)) {
			newTargetArray.push(item);

			return false;
		}

		return true;
	});

	return [newSourceArray, newTargetArray];
}

interface IBoxProps {
	/**
	 * Label of the left Select Box.
	 */
	label?: string;

	/**
	 * Handler that triggers when a new item is selected in the left Select Box.
	 */
	onSelectChange?: (val: Array<string>) => void;

	/**
	 * Array of selected items in the left Select Box.
	 */
	selected?: Array<string>;
}

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Items spread across two arrays that will be displayed in the two Select Boxes.
	 */
	items: TItems;

	/**
	 * Handler that triggers when the content of the items prop are changed. Caused by either reordering or transfering of items.
	 */
	onItemsChange: (val: TItems) => void;

	/**
	 * Props for the left Select Box.
	 */
	left?: IBoxProps;

	/**
	 * Props for the right Select Box.
	 */
	right?: IBoxProps;

	/**
	 * Amount of items that can fit inside the both Select Boxes before a scrollbar is introduced.
	 */
	size?: number;

	/**
	 * Path to the spritemap that Icon should use when referencing symbols.
	 */
	spritemap?: string;
}

const ClayDualListBox: React.FunctionComponent<IProps> = ({
	className,
	items,
	left = {},
	onItemsChange,
	right = {},
	size,
	spritemap,
	...otherProps
}: IProps) => {
	const [internalLeftSelected, setInternalLeftSelected] = React.useState(
		left.selected || []
	);
	const [internalRightSelected, setInternalRightSelected] = React.useState(
		right.selected || []
	);

	const handleLeftSelectedChange =
		left.onSelectChange || setInternalLeftSelected;
	const handleRightSelectedChange =
		right.onSelectChange || setInternalRightSelected;

	const leftSelected = left.selected || internalLeftSelected;
	const rightSelected = right.selected || internalRightSelected;

	const [leftItems, rightItems] = items;

	const selectedIndexesLeft = getSelectedIndexes(leftItems, leftSelected);
	const selectedIndexesRight = getSelectedIndexes(rightItems, rightSelected);

	return (
		<div {...otherProps} className={classNames(className, 'form-group')}>
			<div className="clay-dual-listbox">
				<ClaySelectBox
					className="clay-dual-listbox-item clay-dual-listbox-item-expand listbox-left"
					items={leftItems}
					label={left.label}
					multiple
					onItemsChange={newLeftItems =>
						onItemsChange([newLeftItems, rightItems])
					}
					onSelectChange={handleLeftSelectedChange}
					showArrows
					size={size}
					spritemap={spritemap}
					value={leftSelected}
				/>

				<div className="btn-group-vertical clay-dual-listbox-actions clay-dual-listbox-item">
					<ClayButtonWithIcon
						className="transfer-button-ltr"
						data-testid="ltr"
						disabled={!leftSelected.length}
						displayType="secondary"
						onClick={() => {
							const [arrayLeft, arrayRight] = swapArrayItems(
								[leftItems, rightItems],
								selectedIndexesLeft
							);

							onItemsChange([arrayLeft, arrayRight]);
						}}
						small
						spritemap={spritemap}
						symbol="caret-right"
					/>

					<ClayButtonWithIcon
						className="transfer-button-rtl"
						data-testid="rtl"
						disabled={!rightSelected.length}
						displayType="secondary"
						onClick={() => {
							const [arrayRight, arrayLeft] = swapArrayItems(
								[rightItems, leftItems],
								selectedIndexesRight
							);

							onItemsChange([arrayLeft, arrayRight]);
						}}
						small
						spritemap={spritemap}
						symbol="caret-left"
					/>
				</div>

				<ClaySelectBox
					className="clay-dual-listbox-item clay-dual-listbox-item-expand listbox-right"
					items={rightItems}
					label={right.label}
					multiple
					onItemsChange={newRightItems =>
						onItemsChange([leftItems, newRightItems])
					}
					onSelectChange={handleRightSelectedChange}
					size={size}
					value={rightSelected}
				/>
			</div>
		</div>
	);
};

export default ClayDualListBox;
