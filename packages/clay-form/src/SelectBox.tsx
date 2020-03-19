/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import classNames from 'classnames';
import React from 'react';

function arrayMove(
	arrayToMove: Array<{
		label: string;
		value: string;
	}>,
	oldIndex: number,
	newIndex: number
) {
	arrayToMove.splice(newIndex, 0, arrayToMove.splice(oldIndex, 1)[0]);

	return arrayToMove;
}

function reorderUp(
	array: Array<{
		label: string;
		value: string;
	}>,
	selectedIndexes: Array<number>
) {
	let clonedArray = [...array];

	for (let i = 0; i < selectedIndexes.length; i++) {
		const item = selectedIndexes[i];

		if (item === 0) {
			return clonedArray;
		}

		clonedArray = arrayMove(clonedArray, item, item - 1);
	}

	return clonedArray;
}

function reorderDown(
	array: Array<{
		label: string;
		value: string;
	}>,
	selectedIndexes: Array<number>
) {
	let clonedArray = [...array];

	for (let i = 0; i < selectedIndexes.length; i++) {
		const item = selectedIndexes[i];

		if (selectedIndexes.includes(clonedArray.length - 1)) {
			return clonedArray;
		}

		clonedArray = arrayMove(clonedArray, item, item + 1);
	}

	return clonedArray;
}

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	/**
	 * Aligns the buttons used to reorder items relative to the Select Box.
	 */
	buttonAlignment?: 'center' | 'end';

	/**
	 * Items to be displayed in the Select Box.
	 */
	items: Array<{
		label: string;
		value: string;
	}>;

	/**
	 * Label to be displayed above the Select Box.
	 */
	label?: string;

	/**
	 * Defines whether the Select Box supports selection of multiple items.
	 */
	multiple?: boolean;

	/**
	 * Handler that triggers when the content of the items prop are changed caused by reordering of items.
	 */
	onItemsChange?: (
		items: Array<{
			label: string;
			value: string;
		}>
	) => void;

	/**
	 * Handler that triggers when a new item is selected.
	 */
	onSelectChange: (val: Array<string>) => void;

	/**
	 *  Selected indexes, most commonly used in combination with the  Dual Listbox component
	 */
	selectedIndexes?: Array<number>;

	/**
	 * Amount of items that can fit inside the both Select Boxes before a scrollbar is introduced.
	 */
	size?: number;

	/**
	 * Defines whether the component should render buttons that allow reordering of items.
	 */
	showArrows?: boolean;

	/**
	 * Value of the component.
	 */
	value: string | Array<string>;

	/**
	 * Path to the spritemap that Icon should use when referencing symbols.
	 */
	spritemap?: string;
}

const ClaySelectBox: React.FunctionComponent<IProps> = ({
	buttonAlignment = 'right',
	className,
	items,
	label,
	multiple,
	onItemsChange,
	onSelectChange,
	showArrows,
	size,
	spritemap,
	value,
}) => {
	const selectedIndexes = items.reduce(
		(acc: any, item: any, index: number) => {
			if (value.includes(item.value)) {
				return [...acc, index];
			}

			return acc;
		},
		[]
	);

	return (
		<div className={classNames(className, 'form-group')}>
			{label && <label className="reorder-label">{label}</label>}

			<div
				className={`clay-reorder clay-reorder-footer-${buttonAlignment}`}
			>
				<select
					className="form-control form-control-inset"
					multiple={multiple}
					onChange={event => {
						const selectedItems = [...event.target.options]
							.filter(({selected}) => selected)
							.map(item => item.value);

						onSelectChange(selectedItems);
					}}
					size={size}
					value={value}
				>
					{items.map((option: {label: string; value: string}) => (
						<option
							className="reorder-option"
							key={option.value}
							value={option.value}
						>
							{option.label}
						</option>
					))}
				</select>

				<div className="clay-reorder-underlay form-control" />

				{showArrows && onItemsChange && (
					<div className="clay-reorder-footer">
						<ClayButton.Group className="reorder-order-buttons">
							<ClayButtonWithIcon
								className="reorder-button reorder-button-up"
								disabled={value.length ? false : true}
								displayType="secondary"
								onClick={() =>
									onItemsChange(
										reorderUp(items, selectedIndexes)
									)
								}
								spritemap={spritemap}
								symbol="caret-top"
							/>

							<ClayButtonWithIcon
								className="reorder-button reorder-button-down"
								disabled={value.length ? false : true}
								displayType="secondary"
								onClick={() =>
									onItemsChange(
										reorderDown(items, selectedIndexes)
									)
								}
								spritemap={spritemap}
								symbol="caret-bottom"
							/>
						</ClayButton.Group>
					</div>
				)}
			</div>
		</div>
	);
};

export default ClaySelectBox;
