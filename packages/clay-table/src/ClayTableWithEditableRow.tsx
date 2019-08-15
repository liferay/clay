/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Cell from './Cell';
import ClayButton from '@clayui/button';
import React from 'react';
import Row, {IRowProps} from './Row';
import {ClayCheckbox, ClayInput} from '@clayui/form';

interface IEditableCell {
	cellProps?: Object;
	editable?: boolean;
	value: string;
}

interface IEditableRowProps extends IRowProps {
	/**
	 * Defines the Cell.
	 */
	cells: Array<IEditableCell>;

	/**
	 * Callback function for when the selectable checkbox state changes.
	 */
	onCheckboxChange?: (isChecked: boolean) => void;

	/**
	 * Callback function for when the `Save` button is clicked.
	 */
	onRowUpdated?: (
		newEntries: Array<IEditableCell>,
		oldEntries: Array<IEditableCell>
	) => void;

	/**
	 * Flag to indicate if the Row is selectable.
	 */
	selectable?: boolean;
}

export const ClayTableWithEditableRow: React.FunctionComponent<IEditableRowProps> = ({
	cells,
	onCheckboxChange = () => {},
	onRowUpdated = () => {},
	selectable = false,
	...otherProps
}: IEditableRowProps) => {
	const [check, setCheck] = React.useState<boolean>(false);
	const [editing, setEditing] = React.useState<boolean>(false);

	const oldCells = React.useMemo(
		() => cells.map(cell => Object.assign(cell)),
		[cells]
	);

	// Pular o foco para o Row inteiro quando o Edit mode for triggado!

	return (
		<Row active={check} {...otherProps}>
			{selectable && (
				<Cell>
					<ClayCheckbox
						checked={check}
						onChange={() => {
							setCheck(val => !val);
							onCheckboxChange(!check);
						}}
					/>
				</Cell>
			)}
			{cells.map(({cellProps, editable = false, value}, index) => (
				<Cell expanded key={index} {...cellProps}>
					{editable && editing ? (
						<ClayInput
							className="form-control-sm"
							defaultValue={value}
							onChange={event => {
								cells[index].value = event.target.value;
							}}
							placeholder={value}
							type="text"
						/>
					) : (
						value
					)}
				</Cell>
			))}
			<Cell columnTextAlignment="end" key="actionsCell">
				{editing ? (
					<ClayButton.Group className="btn-group-nowrap" spaced>
						<ClayButton
							displayType="primary"
							onClick={() => {
								onRowUpdated(cells, oldCells);
								setEditing(false);
							}}
							small
						>
							{'Save'}
						</ClayButton>
						<ClayButton
							displayType="secondary"
							onClick={() => setEditing(val => !val)}
							small
						>
							{'Cancel'}
						</ClayButton>
					</ClayButton.Group>
				) : (
					<ClayButton.Group className="btn-group-nowrap">
						<ClayButton
							displayType="secondary"
							onClick={() => setEditing(val => !val)}
							small
						>
							{'Edit'}
						</ClayButton>
					</ClayButton.Group>
				)}
			</Cell>
		</Row>
	);
};
