/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

const styles: React.CSSProperties = {
	border: 0,
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	margin: '0 -1px -1px 0',
	overflow: 'hidden',
	padding: 0,
	position: 'absolute',
	whiteSpace: 'nowrap',
	width: 1,
};

type Props = {
	children: React.ReactNode;
	liveAnnouncer?: boolean;
};

export function VisuallyHidden({children, liveAnnouncer}: Props) {
	return (
		<div data-live-announcer={liveAnnouncer} style={styles}>
			{children}
		</div>
	);
}
