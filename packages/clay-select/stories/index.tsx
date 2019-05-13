/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClaySelect from '../src';
import React from 'react';
import {boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import 'clay-css/lib/css/atlas.css';

storiesOf('ClaySelect', module).add('default', () => (
	<ClaySelect
		disabled={boolean('Disabled', false) ? true : false}
		id="mySelectId"
		inline={boolean('Inline', false) ? true : false}
		label="Select Label"
		multiple={boolean('Multiple', false) ? true : false}
		name="mySelectName"
		options={[
			{
				label: 'Option 1',
				value: '1',
			},
			{
				label: 'Option 2',
				value: '2',
			},
		]}
	/>
));
