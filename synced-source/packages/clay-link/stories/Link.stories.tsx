/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import React from 'react';

import ClayLink, {ClayLinkContext} from '../src';

export default {
	component: ClayLink,
	title: 'Design System/Components/Link',
};

export const Default = () => (
	<div>
		<h1>Regular</h1>
		<ClayLink href="#link-styles">Default</ClayLink>{' '}
		<ClayLink aria-label="My Link" href="#link-styles">
			With Aria Label
		</ClayLink>{' '}
		<ClayLink displayType="primary" href="#link-styles">
			Primary
		</ClayLink>{' '}
		<ClayLink displayType="secondary" href="#link-styles">
			Secondary
		</ClayLink>{' '}
		<ClayLink displayType="danger" href="#link-styles">
			Danger
		</ClayLink>{' '}
		<ClayLink displayType="tertiary" href="#link-styles">
			Tertiary
		</ClayLink>{' '}
		<ClayLink displayType="unstyled" href="#link-styles">
			Unstyled
		</ClayLink>{' '}
		<div id="link-styles" />
		<h1>Semi Bold</h1>
		<ClayLink href="#link-styles" weight="semi-bold">
			Default
		</ClayLink>{' '}
		<ClayLink displayType="primary" href="#link-styles" weight="semi-bold">
			Primary
		</ClayLink>{' '}
		<ClayLink
			displayType="secondary"
			href="#link-styles"
			weight="semi-bold"
		>
			Secondary
		</ClayLink>{' '}
		<ClayLink displayType="danger" href="#link-styles" weight="semi-bold">
			Danger
		</ClayLink>{' '}
		<ClayLink displayType="tertiary" href="#link-styles" weight="semi-bold">
			Tertiary
		</ClayLink>{' '}
	</div>
);

export const Borderless = () => (
	<>
		<ClayLink borderless href="#1" outline>
			Borderless
		</ClayLink>{' '}
		<div id="1" />
	</>
);

export const Outline = () => (
	<>
		<ClayLink displayType="primary" href="#1" outline>
			Outline Primary
		</ClayLink>{' '}
		<ClayLink displayType="secondary" href="#1" outline>
			Outline Secondary
		</ClayLink>{' '}
		<ClayLink borderless displayType="primary" href="#1" outline>
			Outline Borderless Primary
		</ClayLink>{' '}
		<ClayLink borderless displayType="secondary" href="#1" outline>
			Outline Borderless Secondary
		</ClayLink>{' '}
		<div id="1" />
	</>
);

export const DisplayedAsButton = () => (
	<>
		<ClayLink button displayType="primary" href="#1">
			Primary
		</ClayLink>{' '}
		<ClayLink button displayType="secondary" href="#1">
			Secondary
		</ClayLink>{' '}
		<ClayLink borderless button displayType="secondary" href="#1" outline>
			Borderless Secondary
		</ClayLink>{' '}
		<div id="1" />
	</>
);

export const Monospaced = () => (
	<>
		<ClayLink
			aria-label="Monospaced link with icon"
			displayType="primary"
			href="#1"
			monospaced
			outline
		>
			<ClayIcon symbol="add-cell" />
		</ClayLink>{' '}
		<ClayLink
			aria-label="Monospaced link with icon borderless"
			borderless
			displayType="primary"
			href="#1"
			monospaced
			outline
		>
			<ClayIcon symbol="add-cell" />
		</ClayLink>{' '}
		<ClayLink
			aria-label="Monospaced link with icon secondary"
			displayType="secondary"
			href="#1"
			monospaced
			outline
		>
			<ClayIcon symbol="picture" />
		</ClayLink>{' '}
		<ClayLink
			aria-label="Monospaced link with icon secondary borderless"
			borderless
			displayType="secondary"
			href="#1"
			monospaced
			outline
		>
			<ClayIcon symbol="picture" />
		</ClayLink>{' '}
		<div id="1" />
	</>
);

export const CustomLinkComponent = () => {
	const ConfirmLink = ({children, ...otherProps}: any) => (
		<a
			{...otherProps}
			onClick={(event) => {
				if (!confirm('Proceed with navigation?')) {
					event.preventDefault();
				}
			}}
		>
			<strong>{children}</strong>
		</a>
	);

	return (
		<ClayLinkContext.Provider value={ConfirmLink}>
			<ClayLink href="#1">Click to Navigate</ClayLink>

			<div id="1" />
		</ClayLinkContext.Provider>
	);
};
