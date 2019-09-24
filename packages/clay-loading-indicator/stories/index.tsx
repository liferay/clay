/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayLoadingIndicator from '../src';
import React from 'react';
import {boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

storiesOf('Components|ClayLoadingIndicator', module).add('default', () => (
	<ClayLoadingIndicator
		light={boolean('Light', false)}
		small={boolean('Small', false)}
	/>
));
