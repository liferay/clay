/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
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
export function Default() {
	return (
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
				<ClaySticker displayType="outline">D</ClaySticker>

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
}
export function Shape() {
	return (
		<div>
			<ClaySticker>
				<ClayIcon symbol="user" />
			</ClaySticker>

			<ClaySticker displayType="danger" shape="circle">
				<ClayIcon symbol="user" />
			</ClaySticker>
		</div>
	);
}
export function Size() {
	return (
		<div>
			<ClaySticker className="mr-1" displayType="dark" size="xs">
				<ClayIcon symbol="user" />
			</ClaySticker>

			<ClaySticker className="mr-1" displayType="light" size="sm">
				<ClayIcon symbol="user" />
			</ClaySticker>

			<ClaySticker className="mr-1">
				<ClayIcon symbol="user" />
			</ClaySticker>

			<ClaySticker className="mr-1" displayType="success" size="lg">
				<ClayIcon symbol="user" />
			</ClaySticker>

			<ClaySticker className="mr-1" displayType="danger" size="xl">
				<ClayIcon symbol="user" />
			</ClaySticker>

			<ClaySticker className="mr-1" displayType="warning" size="xxl">
				<ClayIcon symbol="user" />
			</ClaySticker>

			<div className="mt-3">
				<ClaySticker className="mr-1" displayType="outline-0" size="xs">
					S
				</ClaySticker>

				<ClaySticker className="mr-1" displayType="outline-1" size="sm">
					M
				</ClaySticker>

				<ClaySticker className="mr-1" displayType="outline-2">
					C
				</ClaySticker>

				<ClaySticker className="mr-1" displayType="outline-3" size="lg">
					M
				</ClaySticker>

				<ClaySticker className="mr-1" displayType="outline-4" size="xl">
					S
				</ClaySticker>

				<ClaySticker
					className="mr-1"
					displayType="outline-5"
					size="xxl"
				>
					S
				</ClaySticker>
			</div>
		</div>
	);
}
export function Image() {
	return (
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
}
export function UserImage() {
	return (
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
}
export function Positions(args: any) {
	return (
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
}

Positions.args = {
	position: 'top-left',
};
export function Outside() {
	return (
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
}
export function Overlay() {
	return (
		<ClaySticker displayType="dark" size="xl">
			<ClaySticker.Overlay>
				<ClaySticker.Image
					alt=""
					src="https://via.placeholder.com/200"
				/>
			</ClaySticker.Overlay>

			<ClaySticker.Overlay>BC</ClaySticker.Overlay>
		</ClaySticker>
	);
}
