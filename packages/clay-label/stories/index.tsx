/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {boolean, select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayLabel from '../src';

const ClayLabelWithState = () => {
	const [visible, setVisible] = React.useState<boolean>(true);

	return visible ? (
		<ClayLabel
			closeButtonProps={
				boolean('Closeable', false)
					? {
							onClick: () => setVisible(val => !val),
					  }
					: undefined
			}
			displayType={
				select(
					'Display Type',
					{
						danger: 'danger',
						info: 'info',
						secondary: 'secondary',
						success: 'success',
						warning: 'warning',
					},
					'secondary'
				) as 'secondary'
			}
			href={text('Href', '')}
			large={boolean('Large', false)}
			spritemap={spritemap}
		>
			{text('Label', 'Label')}
		</ClayLabel>
	) : null;
};

storiesOf('Components|ClayLabel', module).add('default', () => (
	<ClayLabelWithState />
));
