/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import ClayIcon from '@clayui/icon';
import {boolean, select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayLabel from '../src';

const ClayLabelWithState = (props: any) => {
	const [visible, setVisible] = React.useState<boolean>(true);

	return visible ? (
		<ClayLabel
			{...props}
			closeButtonProps={
				boolean('Closeable', false)
					? {
							onClick: () => setVisible(val => !val),
					  }
					: undefined
			}
			displayType={
				select(
					'Display Type',
					{
						danger: 'danger',
						info: 'info',
						secondary: 'secondary',
						success: 'success',
						warning: 'warning',
					},
					'secondary'
				) as 'secondary'
			}
			href={text('Href', '')}
			large={boolean('Large', false)}
			spritemap={spritemap}
		>
			{text('Label', props.children || 'Label')}
		</ClayLabel>
	) : null;
};

storiesOf('Components|ClayLabel', module)
	.add('default', () => <ClayLabelWithState />)
	.add('w/ truncation', () => (
		<div style={{width: 150}}>
			<ClayLabelWithState
				innerElementProps={{className: 'text-truncate'}}
			>
				{'this is a very long bit of text, can you see the end of it?'}
			</ClayLabelWithState>
		</div>
	))
	.add('w/ content before', () => (
		<ClayLabel
			contentBefore={
				<ClayIcon spritemap={spritemap} symbol={'repository'} />
			}
			displayType={'secondary'}
			spritemap={spritemap}
		>
			{text('Label', 'Label')}
		</ClayLabel>
	))
	.add('w/ content before', () => (
		<ClayLabel
			contentBefore={
				<ClayIcon spritemap={spritemap} symbol="repository" />
			}
			displayType={'secondary'}
			spritemap={spritemap}
		>
			{text('Label', 'Label')}
		</ClayLabel>
	))
	.add('w/ multiple contents before', () => (
		<ClayLabel
			contentBefore={
				<>
					<ClayIcon spritemap={spritemap} symbol="repository" />
					<ClayIcon spritemap={spritemap} symbol="repository" />
				</>
			}
			displayType={'secondary'}
			spritemap={spritemap}
		>
			{text('Label', 'Label')}
		</ClayLabel>
	));
