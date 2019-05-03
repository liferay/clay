/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import React from 'react';
import {boolean, select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import ClayMultiSelect from '../src';

import 'clay-css/lib/css/atlas.css';

storiesOf('ClayMultiSelect', module)
	.add('default', () => (
		<ClayMultiSelect />
	));