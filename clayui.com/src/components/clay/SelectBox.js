/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClaySelectBox} from '@clayui/form';
import React from 'react';

import Editor from '../Editor';

const selectBoxImports = `import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import classNames from 'classnames';
`;

const selectBoxCode = `const Component = () => {
	const selectBoxItems = [
		{
			label: 'Reddit',
			value: 'reddit',
		},
		{
			label: 'Slack',
			value: 'slack',
		},
		{
			label: 'Twitter',
			value: 'twitter',
		},
	];

	const [items, setItems] = React.useState(selectBoxItems);
	const [value, setValue] = React.useState([]);

	return (
		<ClaySelectBox
			items={items}
			label="In Use"
			multiple
			onItemsChange={setItems}
			onSelectChange={setValue}
			spritemap={spritemap}
			value={value}
		/>
	);
}

render(<Component />)`;

export const SelectBox = () => {
	const scope = {
		ClaySelectBox,
	};

	return (
		<Editor code={selectBoxCode} imports={selectBoxImports} scope={scope} />
	);
};
