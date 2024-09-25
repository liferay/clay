/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import {ClayDualListBox} from '@clayui/form';
import React from 'react';

const dualListBoxImports = `import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import classNames from 'classnames';
`;

const dualListBoxCode = `const Component = () => {
	const moveBoxesOptions = [
		[
			{
				label: 'Discord',
				value: 'discord',
			},
			{
				label: 'Evernote',
				value: 'evernote',
			},
			{
				label: 'Facebook',
				value: 'facebook',
			},
			{
				label: 'LinkedIn',
				value: 'linkedin',
			},
		],
		[
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
		],
	];

	const [items, setItems] = useState(moveBoxesOptions);
	const [leftSelected, setLeftSelected] = useState([]);
	const [rightSelected, setRightSelected] = useState([]);

	const [firstSelectBoxItems, secondSelectBoxItems] = items;

	return (
		<ClayDualListBox
			disableLTR={firstSelectBoxItems.length === 0}
			disableRTL={secondSelectBoxItems.length === 0}
			items={items}
			left={{
				label: 'In Use',
				onSelectChange: setLeftSelected,
				selected: leftSelected,
			}}
			onItemsChange={setItems}
			right={{
				label: 'Available',
				onSelectChange: setRightSelected,
				selected: rightSelected,
			}}
			size={8}
			spritemap={spritemap}
		/>
	);
}

render(<Component />)`;

export const DualListBox = () => {
	const scope = {
		ClayDualListBox,
	};

	return (
		<Editor
			code={dualListBoxCode}
			imports={dualListBoxImports}
			scope={scope}
		/>
	);
};
