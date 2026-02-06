/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';

import ClayButton, {ClayButtonWithIcon} from '../src';

export default {
	argTypes: {
		displayType: {
			control: {type: 'select'},
			options: [
				'link',
				'primary',
				'secondary',
				'success',
				'info',
				'warning',
				'danger',
				'unstyled',
				'beta',
				'beta-dark',
			],
		},
		size: {
			control: {type: 'select'},
			options: [null, 'xs', 'sm'],
		},
	},
	component: ClayButton,
	title: 'Design System/Components/Button',
};
export function Default(args: any) {
	return (
		<ClayButton
			block={args.block}
			borderless={args.borderless}
			dark={args.dark}
			disabled={args.disabled}
			displayType={args.displayType}
			loading={args.loading}
			monospaced={args.monospaced}
			outline={args.outline}
			rounded={args.rounded}
			size={args.size}
			small={args.small}
			translucent={args.translucent}
		>
			{args.children}
		</ClayButton>
	);
}

Default.args = {
	block: false,
	borderless: false,
	children: 'Click Me',
	dark: false,
	disabled: false,
	displayType: 'primary',
	loading: false,
	monospaced: false,
	outline: false,
	rounded: false,
	small: false,
	translucent: false,
};
export function Group(args: any) {
	return (
		<ClayButton.Group spaced={args.spaced}>
			<ClayButton>This</ClayButton>

			<ClayButton displayType="secondary">is</ClayButton>

			<ClayButton>a</ClayButton>

			<ClayButton displayType="secondary">button</ClayButton>

			<ClayButton>group.</ClayButton>
		</ClayButton.Group>
	);
}

Group.args = {
	spaced: false,
};
export function GroupVertical(args: any) {
	return (
		<ClayButton.Group spaced={args.spaced} vertical>
			<ClayButton>This</ClayButton>

			<ClayButton displayType="secondary">is</ClayButton>

			<ClayButton>a</ClayButton>

			<ClayButton displayType="secondary">button</ClayButton>

			<ClayButton>group.</ClayButton>
		</ClayButton.Group>
	);
}

GroupVertical.args = {
	spaced: false,
};
export function Icon() {
	return (
		<>
			<ClayButtonWithIcon aria-label="Trash" symbol="trash" />
			<ClayButtonWithIcon
				aria-label="Cog"
				displayType="secondary"
				symbol="cog"
			/>

			<ClayButtonWithIcon
				aria-label="Cut"
				displayType="link"
				symbol="cut"
			/>
			<ClayButtonWithIcon
				aria-label="Desktop"
				displayType="unstyled"
				symbol="desktop"
			/>

			<ClayButtonWithIcon
				aria-label="Desktop"
				displayType="unstyled"
				monospaced={false}
				symbol="desktop"
			/>
		</>
	);
}
