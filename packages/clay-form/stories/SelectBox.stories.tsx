/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';

import {ClaySelectBox} from '../src';

export default {
	component: ClaySelectBox,
	title: 'Design System/Components/SelectBox',
};
export function Default() {
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
}
