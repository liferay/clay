/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import {ClayPaginationWithBasicItems} from '@clayui/pagination';
import ClayPaginationBar, {
	ClayPaginationBarWithBasicItems,
} from '@clayui/pagination-bar';
import React from 'react';

import Editor from '../Editor';

const paginationImportsCode = `import ClayPaginationBar from '@clayui/pagination-bar';
import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
`;

const PaginationBarCode = `const Component = () => {
	return (
		<ClayPaginationBar>
			<ClayPaginationBar.DropDown
				items={[
					{
						label: '10',
						onClick: () => {},
					},
				]}
				trigger={
					<ClayButton displayType="unstyled">
						{'10 items per page'}

						<ClayIcon
							spritemap={spritemap}
							symbol="caret-double-l"
						/>
					</ClayButton>
				}
			/>

			<ClayPaginationBar.Results>
				{'Showing a handful of items...'}
			</ClayPaginationBar.Results>

			<ClayPaginationWithBasicItems
				activePage={1}
				onPageChange={() => {}}
				spritemap={spritemap}
				totalPages={10}
			/>
		</ClayPaginationBar>
	);
}
render(<Component />)`;

const PaginationBar = () => {
	const scope = {
		ClayButton,
		ClayIcon,
		ClayPaginationBar,
		ClayPaginationWithBasicItems,
	};
	const code = PaginationBarCode;

	return <Editor code={code} imports={paginationImportsCode} scope={scope} />;
};

const paginationWithBasicItemsImportsCode = `import {ClayPaginationBarWithBasicItems} from '@clayui/pagination-bar';
`;

const PaginationBarWithBasicItemsCode = `const Component = () => {
	const [activePage, setActivePage] = useState(1);
	const [delta, setDelta] = useState(5);

	const deltas = [
		{
			href: '#1',
			label: 1,
		},
		{
			label: 2,
		},
		{
			href: '#3',
			label: 3,
		},
		{
			label: 4,
		},
	];

	return (
		<ClayPaginationBarWithBasicItems
			activeDelta={delta}
			activePage={activePage}
			deltas={deltas}
			ellipsisBuffer={3}
			onDeltaChange={setDelta}
			onPageChange={setActivePage}
			spritemap={spritemap}
			totalItems={21}
		/>
	);
}
render(<Component />)`;

const PaginationBarWithBasicItems = () => {
	const scope = {ClayPaginationBarWithBasicItems};
	const code = PaginationBarWithBasicItemsCode;

	return (
		<Editor
			code={code}
			imports={paginationWithBasicItemsImportsCode}
			scope={scope}
		/>
	);
};

export {PaginationBar, PaginationBarWithBasicItems};
