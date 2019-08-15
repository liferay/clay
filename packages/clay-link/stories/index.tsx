/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayIcon from '@clayui/icon';
import ClayLink, {ClayLinkContext} from '../src';
import React from 'react';
import {storiesOf} from '@storybook/react';

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

storiesOf('ClayLink', module)
	.add('default', () => (
		<div>
			<ClayLink href="#link-styles">{'Default'}</ClayLink>

			<ClayLink displayType="secondary" href="#link-styles">
				{'Secondary'}
			</ClayLink>

			<ClayLink aria-label="My Link" href="#link-styles">
				{'With Aria Label'}
			</ClayLink>
		</div>
	))
	.add('borderless', () => (
		<ClayLink borderless href="#1">
			{'Borderless'}
		</ClayLink>
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
		</>
	))
	.add('monospaced', () => (
		<>
			<ClayLink displayType="primary" href="#1" monospaced outline>
				<ClayIcon spritemap={spritemap} symbol="add-cell" />
			</ClayLink>
			<ClayLink
				borderless
				displayType="primary"
				href="#1"
				monospaced
				outline
			>
				<ClayIcon spritemap={spritemap} symbol="add-cell" />
			</ClayLink>
			<ClayLink displayType="secondary" href="#1" monospaced outline>
				<ClayIcon spritemap={spritemap} symbol="picture" />
			</ClayLink>
			<ClayLink
				borderless
				displayType="secondary"
				href="#1"
				monospaced
				outline
			>
				<ClayIcon spritemap={spritemap} symbol="picture" />
			</ClayLink>
		</>
	))
	.add('w/custom link component', () => {
		const ConfirmLink: React.FunctionComponent<any> = ({
			children,
			...otherProps
		}) => (
			<a
				{...otherProps}
				onClick={e => {
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
			</ClayLinkContext.Provider>
		);
	});
