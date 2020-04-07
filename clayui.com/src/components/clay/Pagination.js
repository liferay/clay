/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayPagination, {ClayPaginationWithBasicItems} from '@clayui/pagination';
import React, {useState} from 'react';

import Editor from '../Editor';

const paginationImportsCode = `import ClayPagination from '@clayui/pagination';
import React from 'react';`;

const PaginationCode = `const Component = () => {
	return (
		<ClayPagination>
			<ClayPagination.Item>{1}</ClayPagination.Item>
			<ClayPagination.Ellipsis items={[2,3,4,5]} />
			<ClayPagination.Item>{'End'}</ClayPagination.Item>
		</ClayPagination>
	);
}
render(<Component />)`;

const Pagination = () => {
	const scope = {ClayPagination, useState};
	const code = PaginationCode;

	return <Editor code={code} imports={paginationImportsCode} scope={scope} />;
};

const paginationWithBasicItemsImportsCode = `import {ClayPaginationWithBasicItems} from '@clayui/pagination';
import React from 'react';`;

const PaginationWithBasicItemsCode = `const Component = () => {
	const [active, setActive] = useState(8);

	return (
		<ClayPaginationWithBasicItems
			activePage={active}
			ellipsisBuffer={2}
			onPageChange={setActive}
			spritemap={spritemap}
			totalPages={25}
		/>
	);
}
render(<Component />)`;

const spritemap = '/images/icons/icons.svg';

const PaginationWithBasicItems = () => {
	const scope = {ClayPaginationWithBasicItems, spritemap, useState};
	const code = PaginationWithBasicItemsCode;

	return (
		<Editor
			code={code}
			imports={paginationWithBasicItemsImportsCode}
			scope={scope}
		/>
	);
};

export {Pagination, PaginationWithBasicItems};
