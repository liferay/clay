/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import React from 'react';
import {select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import 'clay-css/lib/css/atlas.css';
import ClayBadge from '../src/ClayBadge';

storiesOf('ClayBadge', module).add('default', () => (
	<ClayBadge
		displayType={
			select(
				'Display Type',
				{
					error: 'error',
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
