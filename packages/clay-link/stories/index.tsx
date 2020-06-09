/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import ClayIcon from '@clayui/icon';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayLink, {ClayLinkContext} from '../src';

storiesOf('Components|ClayLink', module)
	.add('default', () => (
		<div>
			<ClayLink href="#link-styles">{'Default'}</ClayLink>

			<ClayLink displayType="secondary" href="#link-styles">
				{'Secondary'}
			</ClayLink>

			<ClayLink aria-label="My Link" href="#link-styles">
				{'With Aria Label'}
			</ClayLink>

			<div id="link-styles" />
		</div>
	))
	.add('borderless', () => (
		<>
			<ClayLink borderless href="#1">
				{'Borderless'}
			</ClayLink>

			<div id="1" />
		</>
	))
	.add('outline', () => (
		<>
			<ClayLink displayType="primary" href="#1" outline>
				{'Outline Primary'}
			</ClayLink>
			<ClayLink displayType="secondary" href="#1" outline>
				{'Outline Secondary'}
			</ClayLink>
			<ClayLink borderless displayType="primary" href="#1" outline>
				{'Outline Borderless Primary'}
			</ClayLink>
			<ClayLink borderless displayType="secondary" href="#1" outline>
				{'Outline Borderless Secondary'}
			</ClayLink>

			<div id="1" />
		</>
	))
	.add('displayed as button', () => (
		<>
			<ClayLink button displayType="primary" href="#1">
				{'Primary'}
			</ClayLink>
			<ClayLink button displayType="secondary" href="#1">
				{'Secondary'}
			</ClayLink>
			<ClayLink
				borderless
				button
				displayType="secondary"
				href="#1"
				outline
			>
				{'Borderless Secondary'}
			</ClayLink>

			<div id="1" />
		</>
	))
	.add('monospaced', () => (
		<>
			<ClayLink
				aria-label="Monospaced link with icon"
				displayType="primary"
				href="#1"
				monospaced
				outline
			>
				<ClayIcon spritemap={spritemap} symbol="add-cell" />
			</ClayLink>
			<ClayLink
				aria-label="Monospaced link with icon borderless"
				borderless
				displayType="primary"
				href="#1"
				monospaced
				outline
			>
				<ClayIcon spritemap={spritemap} symbol="add-cell" />
			</ClayLink>
			<ClayLink
				aria-label="Monospaced link with icon secondary"
				displayType="secondary"
				href="#1"
				monospaced
				outline
			>
				<ClayIcon spritemap={spritemap} symbol="picture" />
			</ClayLink>
			<ClayLink
				aria-label="Monospaced link with icon secondary borderless"
				borderless
				displayType="secondary"
				href="#1"
				monospaced
				outline
			>
				<ClayIcon spritemap={spritemap} symbol="picture" />
			</ClayLink>

			<div id="1" />
		</>
	))
	.add('w/custom link component', () => {
		const ConfirmLink: React.FunctionComponent<any> = ({
			children,
			...otherProps
		}) => (
			<a
				{...otherProps}
				onClick={(e) => {
					if (!confirm('Proceed with navigation?')) {
						e.preventDefault();
					}
				}}
			>
				<strong>{children}</strong>
			</a>
		);

		return (
			<ClayLinkContext.Provider value={ConfirmLink}>
				<ClayLink href="#1">{'Click to Navigate'}</ClayLink>

				<div id="1" />
			</ClayLinkContext.Provider>
		);
	});
