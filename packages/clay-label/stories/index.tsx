/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import 'clay-css/lib/css/atlas.css';
import ClayLabel from '../src';
import React, {useState} from 'react';
import {boolean, select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const spritemap = require('clay-css/lib/images/icons/icons.svg');

const ClayLabelWithState = () => {
	const [visible, setVisible] = useState<boolean>(true);

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
			spritemap={spritemap}
		>
			{text('Label', 'Label')}
		</ClayLabel>
	) : null;
};

storiesOf('ClayLabel', module).add('default', () => <ClayLabelWithState />);
