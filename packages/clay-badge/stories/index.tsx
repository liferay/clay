/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import {select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayBadge from '../src';

storiesOf('Components|ClayBadge', module).add('default', () => (
	<ClayBadge
		displayType={
			select(
				'Display Type',
				{
					danger: 'danger',
					info: 'info',
					primary: 'primary',
					secondary: 'secondary',
					success: 'success',
					warning: 'warning',
				},
				'primary'
			) as 'primary'
		}
		label={text('Label', '100')}
	/>
));
