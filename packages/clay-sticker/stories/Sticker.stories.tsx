/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import React from 'react';

import ClaySticker from '../src';

export default {
	argTypes: {
		position: {
			control: {type: 'select'},
			options: ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
		},
	},
	component: ClaySticker,
	title: 'Design System/Components/Sticker',
};

export const Default = () => (
	<div>
		<ClaySticker>A</ClaySticker>

		<ClaySticker displayType="danger">B</ClaySticker>

		<ClaySticker displayType="dark">C</ClaySticker>

		<ClaySticker displayType="info">
			<ClayIcon symbol="user" />
		</ClaySticker>

		<ClaySticker displayType="light">
			<ClayIcon symbol="user" />
		</ClaySticker>

		<ClaySticker displayType="secondary">
			<ClayIcon symbol="user" />
		</ClaySticker>

		<ClaySticker displayType="success">
			<ClayIcon symbol="user" />
		</ClaySticker>

		<ClaySticker displayType="unstyled">
			<ClayIcon symbol="user" />
		</ClaySticker>

		<ClaySticker displayType="warning">
			<ClayIcon symbol="user" />
		</ClaySticker>

		<div className="mt-3">
			<ClaySticker displayType="outline-0">S</ClaySticker>
			<ClaySticker displayType="outline-1">M</ClaySticker>
			<ClaySticker displayType="outline-2">C</ClaySticker>
			<ClaySticker displayType="outline-3">M</ClaySticker>
			<ClaySticker displayType="outline-4">S</ClaySticker>
			<ClaySticker displayType="outline-5">S</ClaySticker>
			<ClaySticker displayType="outline-6">E</ClaySticker>
			<ClaySticker displayType="outline-7">Q</ClaySticker>
			<ClaySticker displayType="outline-8">D</ClaySticker>
			<ClaySticker displayType="outline-9">P</ClaySticker>
		</div>
	</div>
);

export const Shape = () => (
	<div>
		<ClaySticker>
			<ClayIcon symbol="user" />
		</ClaySticker>
		<ClaySticker displayType="danger" shape="circle">
			<ClayIcon symbol="user" />
		</ClaySticker>
	</div>
);

export const Size = () => (
	<div>
		<ClaySticker displayType="light" size="sm">
			<ClayIcon symbol="user" />
		</ClaySticker>

		<ClaySticker>
			<ClayIcon symbol="user" />
		</ClaySticker>

		<ClaySticker displayType="success" size="lg">
			<ClayIcon symbol="user" />
		</ClaySticker>

		<ClaySticker displayType="danger" size="xl">
			<ClayIcon symbol="user" />
		</ClaySticker>
	</div>
);

export const Image = () => (
	<div>
		<ClaySticker size="sm">
			<ClaySticker.Image
				alt="placeholder"
				src="https://via.placeholder.com/50"
			/>
		</ClaySticker>

		<ClaySticker>
			<ClaySticker.Image
				alt="placeholder"
				src="https://via.placeholder.com/50"
			/>
		</ClaySticker>

		<ClaySticker size="lg">
			<ClaySticker.Image
				alt="placeholder"
				src="https://via.placeholder.com/50"
			/>
		</ClaySticker>

		<ClaySticker size="xl">
			<ClaySticker.Image
				alt="placeholder"
				src="https://via.placeholder.com/50"
			/>
		</ClaySticker>
	</div>
);

export const UserImage = () => (
	<div>
		<ClaySticker shape="user-icon" size="sm">
			<ClaySticker.Image
				alt="placeholder"
				src="https://via.placeholder.com/50"
			/>
		</ClaySticker>

		<ClaySticker shape="user-icon">
			<ClaySticker.Image
				alt="placeholder"
				src="https://via.placeholder.com/50"
			/>
		</ClaySticker>
	</div>
);

export const Positions = (args: any) => (
	<div className="row">
		<div className="col-sm-1">
			<div className="aspect-ratio">
				<img
					alt=""
					className="aspect-ratio-item aspect-ratio-item-fluid"
					src="https://via.placeholder.com/200"
				/>
				<ClaySticker position={args.position} size="sm">
					A
				</ClaySticker>
			</div>
		</div>
	</div>
);

Positions.args = {
	position: 'top-left',
};

export const Outside = () => (
	<ClayButton displayType="primary">
		Button
		<ClaySticker
			displayType="danger"
			outside
			position="top-left"
			shape="circle"
		>
			<ClayIcon symbol="announcement" />
		</ClaySticker>
	</ClayButton>
);

export const Overlay = () => (
	<ClaySticker displayType="dark" size="xl">
		<ClaySticker.Overlay>
			<ClaySticker.Image alt="" src="https://via.placeholder.com/200" />
		</ClaySticker.Overlay>
		<ClaySticker.Overlay>BC</ClaySticker.Overlay>
	</ClaySticker>
);
