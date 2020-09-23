/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import {boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayLoadingIndicator from '../src';

storiesOf('Components|ClayLoadingIndicator', module).add('default', () => (
	<ClayLoadingIndicator
		light={boolean('Light', false)}
		small={boolean('Small', false)}
	/>
));
