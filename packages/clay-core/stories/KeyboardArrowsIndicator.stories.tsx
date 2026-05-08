/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

const spritemap = require('@clayui/css/src/images/icons/icons.svg');
import React from 'react';

import {KeyboardArrowsIndicator} from '../src/keyboard-arrows-indicator';

export default {
	title: 'Design System/Components/KeyboardArrowsIndicator',
};

export function Default() {
	return (
		<div style={{display: 'flex', gap: '2rem'}}>
			<KeyboardArrowsIndicator direction="all" spritemap={spritemap} />

			<KeyboardArrowsIndicator
				direction="horizontal"
				spritemap={spritemap}
			/>

			<KeyboardArrowsIndicator
				direction="vertical"
				spritemap={spritemap}
			/>
		</div>
	);
}

export function Sizes() {
	return (
		<div style={{alignItems: 'center', display: 'flex', gap: '2rem'}}>
			<KeyboardArrowsIndicator
				direction="all"
				size="sm"
				spritemap={spritemap}
			/>

			<KeyboardArrowsIndicator
				direction="all"
				size="md"
				spritemap={spritemap}
			/>
		</div>
	);
}

export function CustomLabel() {
	return (
		<KeyboardArrowsIndicator
			direction="all"
			label="Press the arrow keys to move focus"
			spritemap={spritemap}
		/>
	);
}

export function FloatingPlacement() {
	return (
		<div
			style={{
				border: '1px solid #ccc',
				borderRadius: '4px',
				height: '180px',
				padding: '1rem',
				position: 'relative',
				width: '320px',
			}}
		>
			<p style={{margin: 0}}>
				Imagine a popup or panel. The indicator anchors to the
				bottom-right corner via{' '}

				<code>placement=&quot;floating&quot;</code>.
			</p>

			<KeyboardArrowsIndicator
				direction="vertical"
				placement="floating"
				size="sm"
				spritemap={spritemap}
			/>
		</div>
	);
}

export function VisibilityOnFocus() {
	return (
		<div
			style={{
				alignItems: 'center',
				border: '1px solid #ccc',
				borderRadius: '4px',
				display: 'flex',
				gap: '1rem',
				padding: '1rem',
				width: '320px',
			}}
		>
			<input placeholder="Focus this input" style={{flex: 1}} />

			<KeyboardArrowsIndicator
				direction="all"
				size="sm"
				spritemap={spritemap}
				visibility="on-focus"
			/>
		</div>
	);
}
