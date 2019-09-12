/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClaySticker from '../src';
import React from 'react';
import {boolean, select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

storiesOf('Components|ClaySticker', module)
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
	))
	.add('positions', () => (
		<>
			<div className="row">
				<div className="col-sm-1">
					<div className="aspect-ratio">
						<img
							className="aspect-ratio-item aspect-ratio-item-fluid"
							src="https://via.placeholder.com/200"
						/>
						<ClaySticker
							position={
								select(
									'Position',
									{
										'bottom-left': 'bottom-left',
										'bottom-right': 'bottom-right',
										'top-left': 'top-left',
										'top-right': 'top-right',
									},
									'top-left'
								) as 'top-left'
							}
							size="sm"
						>
							{'A'}
						</ClaySticker>
					</div>
				</div>
			</div>
		</>
	))
	.add('outside', () => (
		<>
			<ClayButton displayType="primary">
				{'Button'}
				<ClaySticker
					displayType="danger"
					outside={boolean('outside', true)}
					position="top-left"
					shape="circle"
				>
					<ClayIcon spritemap={spritemap} symbol="announcement" />
				</ClaySticker>
			</ClayButton>
		</>
	))
	.add('overlay', () => (
		<>
			<ClaySticker displayType="dark" size="xl">
				<div className="sticker-overlay">
					<img
						className="sticker-img"
						src="https://via.placeholder.com/200"
					/>
				</div>
				<div className="sticker-overlay">{'BC'}</div>
			</ClaySticker>
		</>
	));
