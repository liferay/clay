/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import 'clay-css/lib/css/atlas.css';
import ClayIcon from '@clayui/icon';
import ClaySticker from '../src';
import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';

const spritemap = require('clay-css/lib/images/icons/icons.svg');

storiesOf('ClaySticker', module)
	.add('default', () => (
		<div>
			<ClaySticker>{text('Content', 'A')}</ClaySticker>

			<ClaySticker displayType="danger">{'B'}</ClaySticker>

			<ClaySticker displayType="dark">{'C'}</ClaySticker>

			<ClaySticker displayType="info">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="light">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="secondary">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="success">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="unstyled">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="warning">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>
		</div>
	))
	.add('shape', () => (
		<div>
			<ClaySticker>
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>
			<ClaySticker displayType="danger" shape="circle">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>
		</div>
	))
	.add('size', () => (
		<div>
			<ClaySticker displayType="light" size="sm">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker>
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="success" size="lg">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="danger" size="xl">
				<ClayIcon spritemap={spritemap} symbol="user" />
			</ClaySticker>
		</div>
	))
	.add('image', () => (
		<div>
			<ClaySticker size="sm">
				<img alt="placeholder" src="https://via.placeholder.com/50" />
			</ClaySticker>

			<ClaySticker>
				<img alt="placeholder" src="https://via.placeholder.com/50" />
			</ClaySticker>

			<ClaySticker size="lg">
				<img alt="placeholder" src="https://via.placeholder.com/50" />
			</ClaySticker>

			<ClaySticker size="xl">
				<img alt="placeholder" src="https://via.placeholder.com/50" />
			</ClaySticker>
		</div>
	));
