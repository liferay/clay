/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLoadingIndicator from '../src';
import React from 'react';
import {boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import 'clay-css/lib/css/atlas.css';

storiesOf(`ClayLoadingIndicator`, module).add(`default`, () => (
	<ClayLoadingIndicator
		light={boolean(`Light`, false)}
		small={boolean(`Small`, false)}
	/>
));
