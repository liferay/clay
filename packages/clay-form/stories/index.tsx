/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayForm from '../src';
import React from 'react';
import {storiesOf} from '@storybook/react';

import '@clayui/css/lib/css/atlas.css';

storiesOf('ClayForm', module).add('default', () => <ClayForm />);
