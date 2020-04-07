/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayTable from '@clayui/table';
import React, {useState} from 'react';

import Editor from '../Editor';

const tableImportsCode = `import ClayTable from '@clayui/table';
import React, {useState} from 'react';`;

const tableCode = `const Component = () => {
	const [value, setValue] = useState('one');

	return (
		<ClayTable>
			<ClayTable.Head>
				<ClayTable.Row>
					<ClayTable.Cell expanded headingCell>
						{'Teams'}
					</ClayTable.Cell>
					<ClayTable.Cell headingCell>
						{'Region'}
					</ClayTable.Cell>
					<ClayTable.Cell headingCell>
						{'Country'}
					</ClayTable.Cell>
				</ClayTable.Row>
			</ClayTable.Head>
			<ClayTable.Body>
				<ClayTable.Row>
					<ClayTable.Cell headingTitle>
						{'White and Red'}
					</ClayTable.Cell>
					<ClayTable.Cell>{'South America'}</ClayTable.Cell>
					<ClayTable.Cell>{'Brazil'}</ClayTable.Cell>
				</ClayTable.Row>
				<ClayTable.Row>
					<ClayTable.Cell headingTitle>
						{'White and Purple'}
					</ClayTable.Cell>
					<ClayTable.Cell>{'Europe'}</ClayTable.Cell>
					<ClayTable.Cell>{'Spain'}</ClayTable.Cell>
				</ClayTable.Row>
			</ClayTable.Body>
		</ClayTable>
	);
}

render(<Component />)`;

const Table = () => {
	const scope = {ClayTable, useState};

	return <Editor code={tableCode} imports={tableImportsCode} scope={scope} />;
};

export {Table};
