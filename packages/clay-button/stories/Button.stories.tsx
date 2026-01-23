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

export const Default = (args: any) => (
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

export const OutlineBorderless = (args: any) => (
	<>
		<div className="p-4">
			<ClayButton
				borderless
				className="mr-2"
				displayType="primary"
				outline
				size={args.size}
			>
				Primary
			</ClayButton>
			<ClayButton
				borderless
				className="mr-2"
				displayType="secondary"
				outline
				size={args.size}
			>
				Secondary
			</ClayButton>
			<ClayButton
				borderless
				className="mr-2"
				displayType="info"
				outline
				size={args.size}
			>
				Info
			</ClayButton>
			<ClayButton
				borderless
				className="mr-2"
				displayType="success"
				outline
				size={args.size}
			>
				Success
			</ClayButton>
			<ClayButton
				borderless
				className="mr-2"
				displayType="warning"
				outline
				size={args.size}
			>
				Warning
			</ClayButton>
			<ClayButton
				borderless
				className="mr-2"
				displayType="danger"
				outline
				size={args.size}
			>
				Danger
			</ClayButton>
			<ClayButton
				borderless
				className="mr-2"
				displayType="light"
				outline
				size={args.size}
			>
				Light
			</ClayButton>
			<ClayButton
				borderless
				className="mr-2"
				displayType="dark"
				outline
				size={args.size}
			>
				Dark
			</ClayButton>
		</div>
		<div className="bg-dark p-4 text-white">
			<div className="h4">clay-dark</div>
			<ClayButton
				borderless
				className="mr-2"
				dark
				displayType="primary"
				outline
				size={args.size}
			>
				Primary
			</ClayButton>
			<ClayButton
				borderless
				className="mr-2"
				dark
				displayType="secondary"
				outline
				size={args.size}
			>
				Secondary
			</ClayButton>
			<ClayButton
				borderless
				className="mr-2"
				dark
				displayType="info"
				outline
				size={args.size}
			>
				Info
			</ClayButton>
			<ClayButton
				borderless
				className="mr-2"
				dark
				displayType="success"
				outline
				size={args.size}
			>
				Success
			</ClayButton>
			<ClayButton
				borderless
				className="mr-2"
				dark
				displayType="warning"
				outline
				size={args.size}
			>
				Warning
			</ClayButton>
			<ClayButton
				borderless
				className="mr-2"
				dark
				displayType="danger"
				outline
				size={args.size}
			>
				Danger
			</ClayButton>
			<ClayButton
				borderless
				className="mr-2"
				dark
				displayType="light"
				outline
				size={args.size}
			>
				Light
			</ClayButton>
			<ClayButton
				borderless
				className="mr-2"
				dark
				displayType="dark"
				outline
				size={args.size}
			>
				Dark
			</ClayButton>
		</div>
	</>
);
