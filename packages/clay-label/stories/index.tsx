/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLabel from '../src/ClayLabel';
import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';

import 'clay-css/lib/css/atlas.css';

const spritemap = require('clay-css/lib/images/icons/icons.svg');

const ClayLabelWithState = () => {
	const [visible, setVisible] = React.useState<boolean>(true);

	return visible ? (
		<ClayLabel
			closeButtonProps={{
				onClick: () => setVisible(val => !val),
			}}
			displayType="success"
			spritemap={spritemap}
		>
			{'Closable'}
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
	.add('closable', () => <ClayLabelWithState />);
