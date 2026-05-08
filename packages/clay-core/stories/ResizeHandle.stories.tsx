/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, {useState} from 'react';

import {ResizeHandle} from '../src/resize-handle';

const MAX_WIDTH = 480;
const MIN_WIDTH = 240;

export default {
	component: ResizeHandle,
	title: 'Design System/Components/ResizeHandle',
};

export function ResizingLeft() {
	const [width, setWidth] = useState(320);

	return (
		<div
			className="border d-flex overflow-hidden rounded"
			style={{height: 280}}
		>
			<div className="bg-light p-3 position-relative" style={{width}}>
				<div className="text-secondary">Resizable region</div>

				<div className="text-weight-semi-bold">{width}px</div>

				<ResizeHandle
					aria-label="Resize region"
					maxWidth={MAX_WIDTH}
					minWidth={MIN_WIDTH}
					onWidthChange={setWidth}
					position="left"
					width={width}
				/>
			</div>

			<div className="bg-white flex-grow-1 p-3">
				<div className="text-secondary">Remaining region</div>

				<div className="text-weight-semi-bold">Fills the rest</div>
			</div>
		</div>
	);
}

export function ResizingRight() {
	const [width, setWidth] = useState(320);

	return (
		<div
			className="border d-flex overflow-hidden rounded"
			style={{height: 280}}
		>
			<div className="bg-white flex-grow-1 p-3">
				<div className="text-secondary">Remaining region</div>

				<div className="text-weight-semi-bold">Fills the rest</div>
			</div>

			<div className="bg-light p-3 position-relative" style={{width}}>
				<div className="text-secondary">Resizable region</div>

				<div className="text-weight-semi-bold">{width}px</div>

				<ResizeHandle
					aria-label="Resize region"
					maxWidth={MAX_WIDTH}
					minWidth={MIN_WIDTH}
					onWidthChange={setWidth}
					position="right"
					width={width}
				/>
			</div>
		</div>
	);
}
