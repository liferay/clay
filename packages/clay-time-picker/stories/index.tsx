/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import 'clay-css/lib/css/atlas.css';
import ClayTimePicker from '../src';
import React from 'react';
import {storiesOf} from '@storybook/react';

storiesOf('ClayTimePicker', module).add('default', () => <ClayTimePicker />);
