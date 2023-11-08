/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import {Body, Cell, Head, Row, Table, Text} from '@clayui/core';
import React, {useCallback, useState} from 'react';

const tableImportsCode = `import React, {useCallback, useState} from 'react';
import {Body, Cell, Head, Row, Table} from '@clayui/core';`;

const tableCode = `const TableExample = () => {
  const [sort, setSort] = useState(null);
	const [items, setItems] = useState([
		{files: 22, id: 1, name: 'Games', type: 'File folder'},
		{files: 7, id: 2, name: 'Program Files', type: 'File folder'},
	]);

	const onSortChange = useCallback((sort) => {
		if (sort) {
			setItems((items) =>
				items.sort((a, b) => {
					let cmp = new Intl.Collator('en', {numeric: true}).compare(
						a[sort.column],
						b[sort.column]
					);

					if (sort.direction === 'descending') {
						cmp *= -1;
					}

					return cmp;
				})
			);
		}

		setSort(sort);
	}, []);

	return (
		<Table onSortChange={onSortChange} sort={sort}>
			<Head items={[
        {
          id: 'name',
          name: 'Name',
        },
        {
          id: 'files',
          name: 'Files',
        },
        {
          id: 'type',
          name: 'Type',
        },
      ]}>
				{(column) => <Cell key={column.id} sortable>{column.name}</Cell>}
			</Head>

			<Body defaultItems={items}>
				{(row) => (
					<Row>
            <Cell><Text size={3} weight="semi-bold">{row['name']}</Text></Cell>
            <Cell>{row['files']}</Cell>
            <Cell>{row['type']}</Cell>
					</Row>
				)}
			</Body>
		</Table>
	);
}

render(<TableExample />)`;

const TableExample = () => {
	const scope = {Body, Cell, Head, Row, Table, Text, useCallback, useState};

	return <Editor code={tableCode} imports={tableImportsCode} scope={scope} />;
};

const tableTreeImportsCode = `import React, {useCallback, useState} from 'react';
import {Body, Cell, Head, Row, Table} from '@clayui/core';`;

const tableTreeCode = `const TableExample = () => {
  const columns = [
    {
      id: 'name',
      name: 'Name',
    },
    {
      id: 'type',
      name: 'Type',
    },
  ];

	return (
		<Table aria-label="Drive" nestedKey="children">
      <Head items={columns}>
        {(column) => (
          <Cell className="table-cell-minw-300" key={column.id}>
            {column.name}
          </Cell>
        )}
      </Head>

      <Body
        defaultItems={[
          {
            children: [{id: 10,name: 'WoW',type: 'MMORPG'}],
            id: 1,
            name: 'Games',
            type: 'File folder',
          },
          {
            id: 2,
            name: 'Program Files',
            type: 'File folder',
          },
        ]}
      >
        {(row) => (
          <Row items={columns}>
            {(column) => (
              <Cell key={row.id + ':' + column.id}>
                {row[column.id]}
              </Cell>
            )}
          </Row>
        )}
      </Body>
    </Table>
	);
}

render(<TableExample />)`;

const TableTreeExample = () => {
	const scope = {Body, Cell, Head, Row, Table, Text, useCallback, useState};

	return (
		<Editor
			code={tableTreeCode}
			imports={tableTreeImportsCode}
			scope={scope}
		/>
	);
};

export {TableExample, TableTreeExample};
