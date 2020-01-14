/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayTimePicker from '../src';

const TimePickerWithState = (props: any) => {
	const [state, setState] = React.useState({
		hours: '--',
		minutes: '--',
	});

	return (
		<ClayTimePicker {...props} onInputChange={setState} values={state} />
	);
};

storiesOf('Components|ClayTimePicker', module).add('default', () => (
	<div className="sheet">
		<div className="form-group">
			<label>{'Time Picker'}</label>
			<TimePickerWithState
				disabled={boolean('Disabled', false)}
				icon={boolean('Show icon', false)}
				name={text('Name', 'time-picker')}
				spritemap={spritemap}
				timezone={text('Timezone', 'GMT+01:00')}
				use12Hours={boolean('Use 12 hours', false)}
			/>
		</div>
	</div>
));
