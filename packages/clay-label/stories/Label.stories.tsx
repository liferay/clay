/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayIcon from '@clayui/icon';
import React, {useState} from 'react';

import ClayLabel from '../src';

export default {
	argTypes: {
		displayType: {
			control: {type: 'select'},
			options: ['danger', 'info', 'secondary', 'success', 'warning'],
		},
	},
	component: ClayLabel,
	title: 'Design System/Components/Label',
};
export function Default(args: any) {
	const [visible, setVisible] = useState<boolean>(true);

	return visible ? (
		<ClayLabel
			closeButtonProps={
				args.closeable
					? {
							onClick: () => setVisible((val) => !val),
						}
					: undefined
			}
			displayType={args.displayType}
			href={args.href}
			large={args.large}
		>
			{args.label}
		</ClayLabel>
	) : null;
}

Default.args = {
	closeable: false,
	displayType: 'secondary',
	href: '',
	label: 'Label',
	large: false,
};
export function Truncate() {
	return (
		<div style={{width: 150}}>
			<ClayLabel displayType="secondary">
				<span className="text-truncate">
					this is a very long bit of text, can you see the end of it?
				</span>
			</ClayLabel>
		</div>
	);
}
export function ContentBefore() {
	return (
		<ClayLabel displayType="secondary" withClose={false}>
			<ClayLabel.ItemBefore>
				<ClayIcon symbol="check" />
			</ClayLabel.ItemBefore>

			<ClayLabel.ItemExpand>Label</ClayLabel.ItemExpand>
		</ClayLabel>
	);
}
