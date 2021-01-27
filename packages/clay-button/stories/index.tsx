/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {boolean, select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayButton, {ClayButtonWithIcon} from '../src';

storiesOf('Components|ClayButton', module)
	.add('default', () => (
		<ClayButton
			block={boolean('Block', false) as false}
			borderless={boolean('Borderless', false) as false}
			disabled={boolean('Disabled', false) as false}
			displayType={
				select(
					'Display Type',
					{
						link: 'link',
						primary: 'primary',
						secondary: 'secondary',
						unstyled: 'unstyled',
					},
					'primary'
				) as 'primary'
			}
			monospaced={boolean('Monospaced', false) as false}
			outline={boolean('Outline', false) as false}
			small={boolean('Small', false) as false}
		>
			{text('children', 'Click Me')}
		</ClayButton>
	))
	.add('button group', () => (
		<ClayButton.Group spaced={boolean('Spaced', false) as false}>
			<ClayButton>{'This'}</ClayButton>
			<ClayButton displayType="secondary">{'is'}</ClayButton>
			<ClayButton>{'a'}</ClayButton>
			<ClayButton displayType="secondary">{'button'}</ClayButton>
			<ClayButton>{'group.'}</ClayButton>
		</ClayButton.Group>
	))
	.add('button group vertical', () => (
		<ClayButton.Group spaced={boolean('Spaced', false) as false} vertical>
			<ClayButton>{'This'}</ClayButton>
			<ClayButton displayType="secondary">{'is'}</ClayButton>
			<ClayButton>{'a'}</ClayButton>
			<ClayButton displayType="secondary">{'button'}</ClayButton>
			<ClayButton>{'group.'}</ClayButton>
		</ClayButton.Group>
	))
	.add('ButtonWithIcon', () => (
		<>
			<ClayButtonWithIcon
				aria-label="Trash"
				spritemap={spritemap}
				symbol="trash"
			/>
			<ClayButtonWithIcon
				aria-label="Cog"
				displayType="secondary"
				spritemap={spritemap}
				symbol="cog"
			/>
			<ClayButtonWithIcon
				aria-label="Cut"
				displayType="link"
				spritemap={spritemap}
				symbol="cut"
			/>
			<ClayButtonWithIcon
				aria-label="Desktop"
				displayType="unstyled"
				spritemap={spritemap}
				symbol="desktop"
			/>

			<ClayButtonWithIcon
				aria-label="Desktop"
				displayType="unstyled"
				monospaced={false}
				spritemap={spritemap}
				symbol="desktop"
			/>
		</>
	));
