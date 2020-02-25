/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import Icon from '@clayui/icon';
import React from 'react';

import Context from './Context';

export type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

const ICON_MAP = {
	danger: 'exclamation-full',
	info: 'info-circle',
	success: 'check-circle-full',
	warning: 'warning-full',
};

const ClayModalHeader: React.FunctionComponent<HeaderProps> = ({
	children,
}: HeaderProps) => {
	const {onClose, spritemap, status} = React.useContext(Context);

	return (
		<div className="modal-header">
			{status && (
				<div className="modal-title-indicator">
					<Icon spritemap={spritemap} symbol={ICON_MAP[status]} />
				</div>
			)}
			<div className="modal-title">{children}</div>
			<Button
				aria-label="close"
				className="close"
				displayType="unstyled"
				onClick={onClose}
			>
				<Icon spritemap={spritemap} symbol="times" />
			</Button>
		</div>
	);
};

export default ClayModalHeader;
