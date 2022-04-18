/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import {ClaySelectBox} from '../src';

export default {
	component: ClaySelectBox,
	title: 'Design System/Components/SelectBox',
};

export const Default = () => {
	const [items, setItems] = React.useState([
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
	]);
	const [value, setValue] = React.useState<Array<string>>([]);

	return (
		<ClaySelectBox
			items={items}
			label="In Use"
			multiple
			onItemsChange={setItems}
			onSelectChange={setValue}
			showArrows
			size={8}
			value={value}
		/>
	);
};
