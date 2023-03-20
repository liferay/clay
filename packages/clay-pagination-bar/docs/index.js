/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import {ClayPaginationWithBasicItems} from '@clayui/pagination';
import ClayPaginationBar, {
	ClayPaginationBarWithBasicItems,
} from '@clayui/pagination-bar';
import React from 'react';

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
				defaultActive={1}
				ellipsisProps={{'aria-label': 'More', title: 'More'}}
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
	const [delta, setDelta] = useState(4);

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
			defaultActive={1}
			activeDelta={delta}
			deltas={deltas}
			ellipsisBuffer={3}
			ellipsisProps={{'aria-label': 'More', title: 'More'}}
			onDeltaChange={setDelta}
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

const paginationWithBasicItemsWithoutDropDownImportsCode = `import {ClayPaginationBarWithBasicItems} from '@clayui/pagination-bar';
`;

const PaginationBarWithBasicItemsWithoutDropDownCode = `const Component = () => {
	const [delta, setDelta] = useState(5);

	return (
		<ClayPaginationBarWithBasicItems
			activeDelta={delta}
			defaultActive={1}
			ellipsisBuffer={3}
			ellipsisProps={{'aria-label': 'More', title: 'More'}}
			onDeltaChange={setDelta}
			showDeltasDropDown={false}
			spritemap={spritemap}
			totalItems={21}
		/>
	);
}
render(<Component />)`;

const PaginationBarWithBasicItemsWithoutDropDown = () => {
	const scope = {ClayPaginationBarWithBasicItems};
	const code = PaginationBarWithBasicItemsWithoutDropDownCode;

	return (
		<Editor
			code={code}
			imports={paginationWithBasicItemsWithoutDropDownImportsCode}
			scope={scope}
		/>
	);
};

export {
	PaginationBar,
	PaginationBarWithBasicItems,
	PaginationBarWithBasicItemsWithoutDropDown,
};
