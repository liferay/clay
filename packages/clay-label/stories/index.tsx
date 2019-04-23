/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLabel from '../src';
import React from 'react';
import {storiesOf} from '@storybook/react';

import 'clay-css/lib/css/atlas.css';

const spritemap = require('clay-css/lib/images/icons/icons.svg');

interface Props
	extends React.BaseHTMLAttributes<HTMLAnchorElement | HTMLSpanElement> {}

const ClayLabelWithState: React.FunctionComponent<Props> = ({
	children,
	href,
}) => {
	const [visible, setVisible] = React.useState<boolean>(true);

	return visible ? (
		<ClayLabel
			closeButtonProps={{
				onClick: () => setVisible(val => !val),
			}}
			displayType="success"
			href={href}
			spritemap={spritemap}
		>
			{children}
		</ClayLabel>
	) : null;
};

storiesOf('ClayLabel', module)
	.add('default', () => (
		<div>
			<ClayLabel>{'Default Label'}</ClayLabel>
			<ClayLabel displayType="info">{'Info Label'}</ClayLabel>
			<ClayLabel displayType="warning">{'Warning Label'}</ClayLabel>
			<ClayLabel displayType="danger">{'Danger Label'}</ClayLabel>
			<ClayLabel displayType="success">{'Success Label'}</ClayLabel>
			<ClayLabel href="#/foo/bar">{'Label w/ link'}</ClayLabel>
		</div>
	))
	.add('closable', () => (
		<div>
			<ClayLabelWithState>{'Closable'}</ClayLabelWithState>
			<ClayLabelWithState href="#/foo/bar">
				{'Label w/ link & Closable'}
			</ClayLabelWithState>
		</div>
	));
