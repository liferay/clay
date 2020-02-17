/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayEmptyState from '../src';

storiesOf('Components|ClayEmptyState', module).add('default', () => (
	<ClayEmptyState />
));
