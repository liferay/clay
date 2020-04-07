/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClaySelectBox} from '@clayui/form';
import React, {useState} from 'react';

import Editor from '../Editor';

const spritemap = '/images/icons/icons.svg';

const selectBoxImports = `import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import classNames from 'classnames';
import React, {useState} from 'react';`;

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

	const [items, setItems] = useState(selectBoxItems);
	const [value, setValue] = useState([]);

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
		spritemap,
		useState,
	};

	return (
		<Editor code={selectBoxCode} imports={selectBoxImports} scope={scope} />
	);
};
