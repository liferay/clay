/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Cell from './Cell';
import ClayButton from '@clayui/button';
import React from 'react';
import Row from './Row';
import {ClayCheckbox, ClayInput} from '@clayui/form';

interface IEditableCell {
	cellProps?: Object;
	editable?: boolean;
	title: string;
}

type IRowProps = React.ComponentProps<typeof Row>;

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
	onRowUpdated?: (newEntries: Array<IEditableCell>) => void;

	/**
	 * Labels for changing some texts inside the component.
	 * Use this property for i18n.
	 */
	labels?: {
		cancel: string;
		edit: string;
		save: string;
	};

	/**
	 * Flag to indicate if the Row is selectable.
	 */
	selectable?: boolean;
}

const DEFAULT_LABELS = {
	cancel: 'Cancel',
	edit: 'Edit',
	save: 'Save',
};

export const ClayTableWithEditableRow: React.FunctionComponent<
	IEditableRowProps
> = ({
	cells,
	onCheckboxChange = () => {},
	onRowUpdated = () => {},
	labels = DEFAULT_LABELS,
	selectable = false,
	...otherProps
}: IEditableRowProps) => {
	const [check, setCheck] = React.useState<boolean>(false);
	const [editing, setEditing] = React.useState<boolean>(false);

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
			{cells.map(({cellProps, editable = false, title}, index) => (
				<Cell {...cellProps} expanded key={index}>
					{editable && editing ? (
						<ClayInput
							className="form-control-sm"
							defaultValue={title}
							onChange={event => {
								cells[index].title = event.target.value;
							}}
							placeholder={title}
							type="text"
						/>
					) : (
						title
					)}
				</Cell>
			))}
			<Cell columnTextAlignment="end" key="actionsCell">
				{editing ? (
					<ClayButton.Group className="btn-group-nowrap" spaced>
						<ClayButton
							aria-label={labels.save}
							displayType="primary"
							onClick={() => {
								onRowUpdated(cells);
								setEditing(false);
							}}
							small
						>
							{labels.save}
						</ClayButton>
						<ClayButton
							aria-label={labels.cancel}
							displayType="secondary"
							onClick={() => setEditing(val => !val)}
							small
						>
							{labels.cancel}
						</ClayButton>
					</ClayButton.Group>
				) : (
					<ClayButton.Group className="btn-group-nowrap">
						<ClayButton
							aria-label={labels.edit}
							displayType="secondary"
							onClick={() => setEditing(val => !val)}
							small
						>
							{labels.edit}
						</ClayButton>
					</ClayButton.Group>
				)}
			</Cell>
		</Row>
	);
};
