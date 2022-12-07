/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayPagination, {ClayPaginationWithBasicItems} from '@clayui/pagination';
import React from 'react';

const paginationImportsCode = `import ClayPagination from '@clayui/pagination';
`;

const PaginationCode = `const Component = () => {
	return (
		<ClayPagination>
			<ClayPagination.Item>{1}</ClayPagination.Item>
			<ClayPagination.Ellipsis aria-label="More" title="More" items={[2,3,4,5]} />
			<ClayPagination.Item>{'End'}</ClayPagination.Item>
		</ClayPagination>
	);
}
render(<Component />)`;

const Pagination = () => {
	const scope = {ClayPagination};
	const code = PaginationCode;

	return <Editor code={code} imports={paginationImportsCode} scope={scope} />;
};

const paginationWithBasicItemsImportsCode = `import {ClayPaginationWithBasicItems} from '@clayui/pagination';
`;

const PaginationWithBasicItemsCode = `const Component = () => {
	const [active, setActive] = useState(8);

	return (
		<ClayPaginationWithBasicItems
			active={active}
			ellipsisBuffer={2}
			ellipsisProps={{'aria-label': 'More', title: 'More'}}
			onActiveChange={setActive}
			spritemap={spritemap}
			totalPages={25}
		/>
	);
}
render(<Component />)`;

const PaginationWithBasicItems = () => {
	const scope = {ClayPaginationWithBasicItems};
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
