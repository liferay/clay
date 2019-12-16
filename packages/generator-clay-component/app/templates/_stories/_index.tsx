/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import {boolean, select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import * as React from 'react';
import <%= componentName %> from '../src';

storiesOf('Components|<%= componentName %>', module)
	.add('default', () => (
		<<%= componentName %> />
	));