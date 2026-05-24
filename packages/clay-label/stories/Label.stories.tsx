/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayIcon from '@clayui/icon';
import React from 'react';

import ClayLabel from '../src';

export default {
	argTypes: {
		inverse: {
			control: {type: 'boolean'},
		},
		large: {
			control: {type: 'boolean'},
		},
	},
	component: ClayLabel,
	title: 'Design System/Components/Label',
};

const displayTypes = [
	'danger',
	'info',
	'secondary',
	'success',
	'warning',
] as const;

export function Default(args: typeof Default.args) {
	const closeButtonProps = args.closeable
		? {
				onClick: () => alert('close callback'),
			}
		: undefined;

	return (
		<>
			{displayTypes.map((displayType) => (
				<ClayLabel
					closeButtonProps={closeButtonProps}
					displayType={displayType}
					href={args.href}
					inverse={args.inverse}
					key={displayType}
					large={args.large}
				>
					{args.label}
				</ClayLabel>
			))}
		</>
	);
}

Default.args = {
	closeable: false,
	href: '',
	inverse: false,
	label: 'Label',
	large: false,
};

export function Truncate(args: typeof Default.args) {
	return (
		<div style={{width: 150}}>
			{displayTypes.map((displayType) => (
				<ClayLabel
					displayType={displayType}
					inverse={args.inverse}
					key={displayType}
					large={args.large}
				>
					<span className="text-truncate">
						this is a very long bit of text, can you see the end of
						it?
					</span>
				</ClayLabel>
			))}
		</div>
	);
}

Truncate.args = {
	inverse: false,
	large: false,
};

export function ContentBefore(args: typeof Default.args) {
	return (
		<>
			{displayTypes.map((displayType) => (
				<ClayLabel
					displayType={displayType}
					inverse={args.inverse}
					key={displayType}
					large={args.large}
					withClose={false}
				>
					<ClayLabel.ItemBefore>
						<ClayIcon symbol="check" />
					</ClayLabel.ItemBefore>

					<ClayLabel.ItemExpand>Label</ClayLabel.ItemExpand>
				</ClayLabel>
			))}
		</>
	);
}

ContentBefore.args = {
	inverse: false,
	large: false,
};
