/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useState, useEffect} from 'react';

import Table from './Table';

interface IRowSchema {
	[propName: string]: any;
	id: string | number;
}

interface IHeader
	extends Omit<React.ComponentProps<typeof Table.Cell>, 'headingCell'> {
	[propName: string]: any;
	header?: string;
	key: string;
	type?: string;
}

interface ICell {
	[propName: string]: any;
	value: React.ReactChildren;
}

interface IRows {
	[propName: string]: any;
	cells: Array<ICell>;
	id: string | number;
}

interface IChildrenProps {
	headers: Array<IHeader>;
	rows: Array<IRows>;
}

interface ICellRenderers {
	[propName: string]: React.FunctionComponent<any>;
}

interface IProps {
	cellRenderers?: ICellRenderers;
	children?: (props: IChildrenProps) => any;
	headers: Array<IHeader>;
	rows: Array<IRowSchema>;
}

const normalize = (rows: Array<IRowSchema>, headers: Array<IHeader>) => {
	const rowsById: Array<IRows> = new Array(rows.length);

	rows.forEach((row, index) => {
		rowsById[index] = {
			cells: new Array(headers.length),
			id: row.id,
		};

		headers.forEach(({key, ...props}, i) => {
			rowsById[index].cells[i] = {
				...props,
				id: `${row.id}:${key}`,
				value: row[key],
			};
		});
	});

	return rowsById;
};

const TableCellDefault: React.FunctionComponent<ICell> = ({
	value,
	...props
}) => <Table.Cell {...props}>{value}</Table.Cell>;

const Omit = <T, K extends keyof T>(obj: T, keys: Array<K>) => {
	return keys.reduce((r, key) => (delete r[key], r), {...obj});
};

const ClayDataTable: React.FunctionComponent<IProps> = ({
	cellRenderers = {},
	children,
	headers,
	rows: rowsFields,
}) => {
	const [rows, setRows] = useState<Array<IRows>>(() =>
		normalize(rowsFields, headers)
	);

	useEffect(() => {
		setRows(normalize(rowsFields, headers));
	}, [rowsFields, headers]);

	const getCell = (type: string = 'default', {id, ...props}: ICell) => {
		const Cell = cellRenderers[type] || TableCellDefault;

		return <Cell {...props} key={id} />;
	};

	if (children) {
		return children({headers, rows});
	}

	return (
		<Table>
			<Table.Head>
				<Table.Row>
					{headers.map(({header, key, ...props}) => (
						<Table.Cell
							{...Omit(props, ['type'])}
							headingCell
							key={key}
						>
							{header}
						</Table.Cell>
					))}
				</Table.Row>
			</Table.Head>
			<Table.Body>
				{rows.map(row => (
					<Table.Row key={row.id}>
						{row.cells.map(({type, ...props}) =>
							getCell(type, props)
						)}
					</Table.Row>
				))}
			</Table.Body>
		</Table>
	);
};

export default ClayDataTable;
