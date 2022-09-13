/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import ClayButton, {ClayButtonWithIcon} from '../src';

export default {
	argTypes: {
		displayType: {
			control: {type: 'select'},
			options: ['link', 'primary', 'secondary', 'unstyled'],
		},
		size: {
			control: {type: 'select'},
			options: [null, 'xs', 'sm'],
		},
	},
	component: ClayButton,
	title: 'Design System/Components/Button',
};

export const Default = (args: any) => (
	<ClayButton
		block={args.block}
		borderless={args.borderless}
		disabled={args.disabled}
		displayType={args.displayType}
		monospaced={args.monospaced}
		outline={args.outline}
		rounded={args.rounded}
		size={args.size}
		small={args.small}
	>
		{args.children}
	</ClayButton>
);

Default.args = {
	block: false,
	borderless: false,
	children: 'Click Me',
	disabled: false,
	displayType: 'primary',
	monospaced: false,
	outline: false,
	rounded: false,
	small: false,
};

export const Group = (args: any) => (
	<ClayButton.Group spaced={args.spaced}>
		<ClayButton>This</ClayButton>
		<ClayButton displayType="secondary">is</ClayButton>
		<ClayButton>a</ClayButton>
		<ClayButton displayType="secondary">button</ClayButton>
		<ClayButton>group.</ClayButton>
	</ClayButton.Group>
);

Group.args = {
	spaced: false,
};

export const GroupVertical = (args: any) => (
	<ClayButton.Group spaced={args.spaced} vertical>
		<ClayButton>This</ClayButton>
		<ClayButton displayType="secondary">is</ClayButton>
		<ClayButton>a</ClayButton>
		<ClayButton displayType="secondary">button</ClayButton>
		<ClayButton>group.</ClayButton>
	</ClayButton.Group>
);

GroupVertical.args = {
	spaced: false,
};

export const Icon = () => (
	<>
		<ClayButtonWithIcon aria-label="Trash" symbol="trash" />
		<ClayButtonWithIcon
			aria-label="Cog"
			displayType="secondary"
			symbol="cog"
		/>
		<ClayButtonWithIcon aria-label="Cut" displayType="link" symbol="cut" />
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
